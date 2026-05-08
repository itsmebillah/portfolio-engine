import { supabase } from "@/lib/supabase";
import { templateRegistry } from "@/templates";

type Props = {
  params: Promise<{
    username: string;
  }>;
};

export default async function UserPortfolio({
  params,
}: Props) {

    
  const { username } = await params;

  const { data: user } = await supabase
    .from("users")
    .select("*")
    .eq("username", username)
    .single();

  if (!user) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        User not found
      </main>
    );
  }
const { data: blogs } =
  await supabase
    .from("blogs")
    .select("*")
    .eq("user_id", user.id)
    .eq("published", true)
    .order("created_at", {
      ascending: false,
    })
    .limit(3);
  const { data: profile } = await supabase
    .from("profile")
    .select("*")
    .eq("user_id", user.id)
    .single();

  const { data: skills } = await supabase
    .from("skills")
    .select("*")
    .eq("user_id", user.id);

  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .eq("user_id", user.id);

  const { data: certificates } = await supabase
    .from("certificates")
    .select("*")
    .eq("user_id", user.id);

  const { data: sections } = await supabase
    .from("sections")
    .select("*")
    .eq("active", true)
    .order("position");

  const ActiveTemplate =
    templateRegistry[user.active_template] ||
    templateRegistry.default;

  return (
    <ActiveTemplate
      profile={profile}
      skills={skills}
      projects={projects}
      certificates={certificates}
      sections={sections}
      blogs={blogs}
    />
  );
}