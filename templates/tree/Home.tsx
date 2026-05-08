import SectionRenderer from "@/components/SectionRenderer";

type Props = {
  profile: any;
  skills: any[];
  projects: any[];
  certificates: any[];
  sections: any[];
};

export default function TreeTemplate({
  profile,
  skills,
  projects,
  certificates,
  sections,
}: Props) {

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="grid lg:grid-cols-2">

        {/* LEFT SIDEBAR */}
        <div className="border-r border-gray-800 p-10 sticky top-0 h-screen">

          <img
            src={profile?.profile_image}
            alt="profile"
            className="w-40 h-40 rounded-full object-cover mb-8 border-4 border-orange-500"
          />

          <h1 className="text-5xl font-bold mb-4">
            {profile?.name}
          </h1>

          <p className="text-orange-500 text-2xl mb-4">
            {profile?.title}
          </p>

          <p className="text-gray-400 mb-8">
            {profile?.location}
          </p>

          <p className="text-gray-500 leading-8">
            {profile?.bio}
          </p>

        </div>

        {/* RIGHT CONTENT */}
        <div className="p-10">

          <div className="relative border-l border-orange-500 pl-10 space-y-20">

            <div className="absolute left-[-8px] top-0 w-4 h-4 bg-orange-500 rounded-full" />

            <SectionRenderer
              sections={sections}
              skills={skills}
              projects={projects}
              certificates={certificates}
            />

          </div>

        </div>

      </div>

    </main>
  );
}