import { NextRequest, NextResponse } from "next/server";

import { supabase } from "@/app/store/supabase";

export async function GET(req: NextRequest) {
    // console.log(req.nextUrl.searchParams.getAll("topic")[0]);
    const topicName = req.nextUrl.searchParams.getAll("topic")[0];
    const res = await supabase.from("Topics").select().eq("name", topicName);

    return NextResponse.json(res.data, { status: 200 });
}
