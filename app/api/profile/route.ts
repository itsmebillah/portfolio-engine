import { supabase } from "@/lib/supabase";

export async function GET(req: Request) {

  const { searchParams } =
    new URL(req.url);

  const userId =
    searchParams.get("userId");

  const { data } = await supabase
    .from("profile")
    .select("*")
    .eq("user_id", userId)
    .single();

  return Response.json(data);
}

export async function PUT(req: Request) {

  const body = await req.json();

  await supabase
    .from("profile")
    .update({
  name: body.name,
  title: body.title,
  location: body.location,
  bio: body.bio,
  github: body.github,
  linkedin: body.linkedin,
  facebook: body.facebook,
})
    .eq("id", body.id);

  return Response.json({
    success: true,
  });
}