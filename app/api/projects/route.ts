import { supabase } from "@/lib/supabase";

export async function GET(req: Request) {

  const { searchParams } =
    new URL(req.url);

  const userId =
    searchParams.get("userId");

  const { data } = await supabase
    .from("projects")
    .select("*")
    .eq("user_id", userId)
    .order("id", {
      ascending: false,
    });

  return Response.json(data);
}

export async function POST(req: Request) {

  const body = await req.json();

  await supabase
    .from("projects")
    .insert({
      title: body.title,
      description:
        body.description,

      live_link:
        body.live_link,

      github_link:
        body.github_link,

      cover_image:
        body.cover_image,

      tech_stack:
        body.tech_stack,

      user_id:
        body.userId,
    });

  return Response.json({
    success: true,
  });
}

export async function DELETE(req: Request) {

  const { searchParams } =
    new URL(req.url);

  const id =
    searchParams.get("id");

  await supabase
    .from("projects")
    .delete()
    .eq("id", id);

  return Response.json({
    success: true,
  });
}