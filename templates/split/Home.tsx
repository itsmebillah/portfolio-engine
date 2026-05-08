import SectionRenderer from "@/components/SectionRenderer";

type Props = {
  profile: any;
  projects: any[];
  skills: any[];
  certificates: any[];
  sections: any[];
};

export default function SplitTemplate({
  profile,
  skills,
  projects,
  certificates,
  sections,
}: Props) {

  return (
    <main className="min-h-screen bg-black text-white grid md:grid-cols-2">

      {/* LEFT */}
      <div className="flex flex-col justify-center p-10">

        <p className="text-orange-500 mb-4 text-xl">
          {profile?.title}
        </p>

        <h1 className="text-6xl font-bold mb-6">
          {profile?.name}
        </h1>

        <p className="text-gray-300 text-xl mb-4">
          {profile?.title}
        </p>

        <p className="text-gray-500 mb-8">
          {profile?.location}
        </p>

        <div className="flex gap-4 justify-center mb-10">

  {profile?.github && (
    <a
      href={profile.github}
      target="_blank"
      className="bg-gray-800 px-5 py-3 rounded-xl"
    >
      GitHub
    </a>
  )}

  {profile?.linkedin && (
    <a
      href={profile.linkedin}
      target="_blank"
      className="bg-gray-800 px-5 py-3 rounded-xl"
    >
      LinkedIn
    </a>
  )}

  {profile?.facebook && (
    <a
      href={profile.facebook}
      target="_blank"
      className="bg-gray-800 px-5 py-3 rounded-xl"
    >
      Facebook
    </a>
  )}

</div>

        <SectionRenderer
  sections={sections.filter(
    (s) => s.position > 1
  )}
  skills={skills}
  projects={projects}
  certificates={certificates}
/>

      </div>

      {/* RIGHT */}
      <div className="flex items-center justify-center p-10">

        <img
          src={profile?.profile_image}
          alt="profile"
          className="w-[500px] h-[500px] object-cover rounded-3xl"
        />

      </div>

      {/* BOTTOM */}
      <div className="col-span-2 px-10 pb-20">

        <SectionRenderer
          sections={[
            "projects",
            "certificates",
          ]}
          skills={skills}
          projects={projects}
          certificates={certificates}
        />

      </div>

    </main>
  );
}