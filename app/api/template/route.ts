import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {

  const body = await req.json();

  await supabase
    .from("profile")
    .update({
      active_template: body.template,
    })
    .eq("id", 1);

  return Response.json({
    success: true,
  });
}