import { supabase } from "@/app/store/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const topicId = req.nextUrl.searchParams.getAll("topicId")[0];
    const res = await supabase
        .from("Problems")
        .select()
        .order("difficulty")
        .eq("topic_id", topicId);

    return NextResponse.json(res.data, { status: 200 });
}
