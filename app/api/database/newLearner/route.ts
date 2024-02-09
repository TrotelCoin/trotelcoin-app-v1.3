import { supabase } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  const wallet = searchParams.get("wallet");

  try {
    // check if the wallet exists in the database
    const { data: userExists, error: userExistsError } = await supabase
      .from("learners")
      .select("*")
      .eq("wallet", wallet);

    if (userExistsError) {
      console.error(userExistsError);
      return new NextResponse(
        JSON.stringify({ error: "Something went wrong." }),
        { status: 500 }
      );
    }

    if (!userExists.length) {
      // wallet does not exist in the database
      const { error: insertError } = await supabase.from("learners").insert([
        {
          wallet,
          number_of_quizzes_answered: 0,
          number_of_quizzes_created: 0,
          total_rewards_pending: 0,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ]);

      if (insertError) {
        console.error(insertError);
        return new NextResponse(
          JSON.stringify({ error: "Something went wrong." }),
          { status: 500 }
        );
      }

      return new NextResponse(
        JSON.stringify({ success: "New learner added." }),
        { status: 200 }
      );
    }

    return new NextResponse(
      JSON.stringify({ success: "Learner already exists." }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ error: "Something went wrong." }),
      { status: 500 }
    );
  }
}
