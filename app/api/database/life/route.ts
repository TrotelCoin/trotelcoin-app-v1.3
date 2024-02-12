import { supabase } from "@/lib/db";
import { Address } from "viem";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  const wallet = searchParams.get("wallet");

  try {
    // if doesn't exist create a new record
    const { data: result, error } = await supabase
      .from("life")
      .select("life")
      .eq("wallet", wallet as Address);

    if (error) {
      console.error(error);
      return new NextResponse("Something went wrong.", { status: 500 });
    }

    if (result.length === 0) {
      const { error: insertError } = await supabase.from("life").insert([
        {
          wallet: wallet as Address,
          life: 3,
          last_reset_at: new Date().toISOString(),
        },
      ]);

      if (insertError) {
        console.error(insertError);
        return new NextResponse("Something went wrong.", { status: 500 });
      }

      return new NextResponse(JSON.stringify(3), { status: 200 });
    }

    // if last_reset_at is more than 1 day old, reset life
    const { error: updateError } = await supabase
      .from("life")
      .update({ life: 3 })
      .lte(
        "last_reset_at",
        new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
      )
      .eq("wallet", wallet as Address);

    if (updateError) {
      console.error(updateError);
      return new NextResponse("Something went wrong.", { status: 500 });
    }

    return new NextResponse(JSON.stringify(result[0].life), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse("Something went wrong.", { status: 500 });
  }
}
