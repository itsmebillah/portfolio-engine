import SectionRenderer from "@/components/SectionRenderer";

type Props = {
  profile: any;
  skills: any[];
  projects: any[];
  certificates: any[];
  sections: any[];
   blogs: any[];
};

export default function HomeTemplate({
  profile,
  skills,
  projects,
  certificates,
  sections,
  blogs,
  
}: Props) {

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <div className="flex flex-col items-center justify-center text-center">

        <img
          src={profile?.profile_image}
          alt="profile"
          className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-white"
        />

        <h1 className="text-5xl font-bold mb-4">
          {profile?.name}
        </h1>

        <p className="text-xl text-gray-300 mb-2">
          {profile?.title}
        </p>

        <p className="text-gray-400 mb-10">
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

      </div>

      <div className="max-w-3xl mx-auto">

        <SectionRenderer
  sections={sections}
  skills={skills}
  projects={projects}
  certificates={certificates}
/>

{/* BLOGS */}
{blogs?.length > 0 && (

  <section className="mt-24">

    <div className="mb-10 text-center">

      <p className="text-orange-500 mb-3">
        BLOG ARTICLES
      </p>

      <h2 className="text-5xl font-bold">
        Latest Blogs
      </h2>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {blogs.map((blog: any) => (

        <a
          key={blog.id}
          href={`/blog/${blog.slug}`}
          className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden hover:border-orange-500 transition"
        >

          {blog.thumbnail && (

            <img
              src={blog.thumbnail}
              alt={blog.title}
              className="w-full h-[220px] object-cover"
            />

          )}

          <div className="p-6">

            <div className="mb-4">

              <span className="bg-orange-500/10 text-orange-400 px-4 py-2 rounded-xl text-sm">
                {blog.category}
              </span>

            </div>

            <h3 className="text-2xl font-bold mb-4">
              {blog.title}
            </h3>

            <p className="text-gray-400 line-clamp-3">
              {blog.description}
            </p>

          </div>

        </a>

      ))}

    </div>

  </section>

)}
      </div>

    </main>
  );
}