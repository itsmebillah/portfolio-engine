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