import { NextRequest, NextResponse } from "next/server";

import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    process.env.SUPABASE_PROJECT_URL!,
    process.env.SUPABASE_API_KEY!
);

export async function GET(req: NextRequest) {
    const topicId = req.nextUrl.searchParams.getAll("topicId")[0];
    console.log(topicId);
    const res = await supabase
        .from("Problems")
        .select()
        .order("difficulty")
        .eq("topic_id", topicId);

    return NextResponse.json(res.data, { status: 200 });
}
