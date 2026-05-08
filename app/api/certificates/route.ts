import { supabase } from "@/lib/supabase";

export async function GET(req: Request) {

  const { searchParams } =
    new URL(req.url);

  const userId =
    searchParams.get("userId");

  const { data } = await supabase
    .from("certificates")
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
    .from("certificates")
    .insert({
      title: body.title,

      issuer: body.issuer,

      credential_link:
        body.credential_link,

      image: body.image,

      issue_date:
        body.issue_date,

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
    .from("certificates")
    .delete()
    .eq("id", id);

  return Response.json({
    success: true,
  });
}