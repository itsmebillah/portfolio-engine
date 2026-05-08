import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {

  const body = await req.json();

  await supabase
    .from("projects")
    .delete()
    .eq("id", body.id);

  return Response.json({
    success: true,
  });
}