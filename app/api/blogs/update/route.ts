import { supabase } from "@/lib/supabase";

export async function PUT(req: Request) {

  const body = await req.json();

  await supabase
    .from("blogs")
    .update({
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
    })
    .eq("id", body.id);

  return Response.json({
    success: true,
  });
}