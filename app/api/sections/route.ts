import { supabase } from "@/lib/supabase";

export async function GET() {

  const { data } = await supabase
    .from("sections")
    .select("*")
    .order("position");

  return Response.json(data);
}

export async function PUT(req: Request) {

  const body = await req.json();

  await supabase
    .from("sections")
    .update({
      active: body.active,
    })
    .eq("id", body.id);

  return Response.json({
    success: true,
  });
}