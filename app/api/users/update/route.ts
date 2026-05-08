import { supabase } from "@/lib/supabase";

export async function PUT(req: Request) {

  const body = await req.json();

  await supabase
    .from("users")
    .update({
      name: body.name,
      active_template:
        body.template,
    })
    .eq("id", body.id);

  return Response.json({
    success: true,
  });
}