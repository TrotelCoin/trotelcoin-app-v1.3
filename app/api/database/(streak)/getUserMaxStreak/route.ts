import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/db";
import { Address } from "viem";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  const wallet: Address = searchParams.get("wallet") as Address;

  if (!wallet) {
    return NextResponse.json("Parameters not found", { status: 400 });
  }

  const { data: result, error } = await supabase
    .from("streak")
    .select("max_streak")
    .eq("wallet", wallet as Address);

  if (error) {
    console.error(error);
    return NextResponse.json(0, { status: 500 });
  }

  if (result.length > 0) {
    return NextResponse.json(result[0].max_streak);
  } else {
    return NextResponse.json(0, {
      status: 200,
      headers: { "Cache-Control": "no-store" },
    });
  }
}
