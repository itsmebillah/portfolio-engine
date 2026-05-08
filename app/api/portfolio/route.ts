import { supabase } from "@/lib/supabase";

export async function GET(req: Request) {

  const { searchParams } =
    new URL(req.url);

  const userId =
    searchParams.get("userId");

  const { data: profile } = await supabase
    .from("profile")
    .select("*")
    .eq("user_id", userId)
    .single();

  const { data: skills } = await supabase
    .from("skills")
    .select("*")
    .eq("user_id", userId);

  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .eq("user_id", userId);

  const { data: certificates } = await supabase
    .from("certificates")
    .select("*")
    .eq("user_id", userId);

  const { data: sections } = await supabase
    .from("sections")
    .select("*")
    .eq("active", true)
    .order("position");

  return Response.json({
    profile,
    skills,
    projects,
    certificates,
    sections,
  });
}