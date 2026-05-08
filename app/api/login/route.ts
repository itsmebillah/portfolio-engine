import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {

  const body = await req.json();

  const { data: user } = await supabase
    .from("users")
    .select("*")
    .eq("email", body.email)
    .eq("password", body.password)
    .single();

  if (!user) {
    return Response.json({
      success: false,
      message: "Invalid credentials",
    });
  }

  return Response.json({
    success: true,
    user,
  });
}