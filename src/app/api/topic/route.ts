import { NextRequest, NextResponse } from "next/server";

import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    process.env.SUPABASE_PROJECT_URL!,
    process.env.SUPABASE_API_KEY!
);

export async function GET(req: NextRequest) {
    // console.log(req.nextUrl.searchParams.getAll("topic")[0]);
    const topicName = req.nextUrl.searchParams.getAll("topic")[0];
    const res = await supabase.from("Topics").select().eq("name", topicName);

    return NextResponse.json(res.data, { status: 200 });
}
