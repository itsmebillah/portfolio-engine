import { supabase } from "@/lib/supabase";

export async function GET() {

  const { data } = await supabase
    .from("users")
    .select("*")
    .neq("role", "super_admin")
    .order("id", {
      ascending: false,
    });

  return Response.json(data);
}