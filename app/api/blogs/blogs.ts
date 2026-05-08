import { supabase } from "@/lib/supabase";

export async function GET(req: Request) {

  const { searchParams } =
    new URL(req.url);

  const userId =
    searchParams.get("userId");

  const { data } = await supabase
    .from("blogs")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", {
      ascending: false,
    });

  return Response.json(data);
}

export async function POST(req: Request) {

  const body = await req.json();

  await supabase
    .from("blogs")
    .insert({
      title: body.title,

      slug: body.slug,

      description:
        body.description,

      content:
        body.content,

      thumbnail:
        body.thumbnail,

      category:
        body.category,

      published:
        body.published,

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
    .from("blogs")
    .delete()
    .eq("id", id);

  return Response.json({
    success: true,
  });
}