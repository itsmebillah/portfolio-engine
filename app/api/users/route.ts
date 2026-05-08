import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {

  const body = await req.json();

  const { data: user } = await supabase
    .from("users")
    .insert({
      name: body.name,
      email: body.email,
      password: body.password,
      username: body.username,
      active_template: body.template,
    })
    .select()
    .single();

  await supabase
    .from("profile")
    .insert({
      user_id: user.id,
      name: body.name,
      title: "New Portfolio User",
    });

  return Response.json({
    success: true,
    user,
  });
}