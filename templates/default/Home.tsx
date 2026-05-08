import SectionRenderer from "@/components/SectionRenderer";
import Navbar from "@/components/Navbar";
import BackgroundEffects from "@/components/layout/BackgroundEffects";

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

    <main className="relative min-h-screen text-white overflow-hidden">

      {/* BACKGROUND */}
      <BackgroundEffects />
     <Navbar />

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-screen flex items-center px-6 py-20">

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.2fr_.8fr] gap-16 items-center">

          {/* LEFT SIDE */}
<div>

  {/* NAME */}
  <h1 className="text-5xl md:text-6xl xl:text-6xl font-black leading-[1.05] mb-8 tracking-[-2px] whitespace-nowrap">

    {profile?.name}

  </h1>

  {/* TITLE */}
  <p className="text-2xl text-gray-300 mb-6 leading-relaxed max-w-2xl">

    {profile?.title}

  </p>

  {/* DESCRIPTION */}
  <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl">

    Building modern digital experiences through
    analytics, automation, and scalable systems.

  </p>

  {/* BUTTONS */}
  <div className="flex flex-wrap gap-5 mb-14">

    <a
      href="#projects"
      className="h-14 px-8 rounded-2xl bg-orange-500 hover:bg-orange-600 transition flex items-center justify-center font-semibold"
    >

      View Projects

    </a>

    <a
      href="#contact"
      className="h-14 px-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center justify-center font-semibold"
    >

      Contact

    </a>

  </div>

  {/* MINI INFO */}
  <div className="flex flex-wrap gap-5 text-sm text-gray-500">

    <span>
      Based in {profile?.location}
    </span>

    <span>
      •
    </span>

    <span>
      Open to collaborations
    </span>

  </div>

</div>

          {/* RIGHT SIDE */}
<div className="flex justify-center lg:justify-end">

  <div className="relative">

    {/* SOFT GLOW */}
    <div className="absolute inset-0 bg-orange-500/10 blur-[120px] rounded-full scale-110" />

    {/* IMAGE FRAME */}
    <div className="relative p-3 rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">

      <img
        src={profile?.profile_image}
        alt="profile"
        className="w-[260px] md:w-[320px] xl:w-[360px] h-[360px] md:h-[430px] xl:h-[480px] object-cover rounded-[24px]"
      />

    </div>

  </div>

</div>
        </div>

      </section>

      {/* CONTENT AREA */}
      <div className="relative z-10 px-6 pb-32">

        <div className="max-w-7xl mx-auto">

          {/* DYNAMIC SECTIONS */}
          <SectionRenderer
            sections={sections}
            skills={skills}
            projects={projects}
            certificates={certificates}
          />

          {/* BLOGS */}
          {blogs?.length > 0 && (

            <section className="mt-32">

              <div className="mb-14 text-center">

                <p className="text-orange-500 uppercase tracking-[4px] mb-4">
                  BLOG ARTICLES
                </p>

                <h2 className="text-5xl md:text-6xl font-black mb-6">
                  Latest Blogs
                </h2>

                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                  Thoughts, case studies, tutorials, and deep dives into data,
                  automation, and modern systems.
                </p>

              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                {blogs.map((blog: any) => (

                  <a
                    key={blog.id}
                    href={`/blog/${blog.slug}`}
                    className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] overflow-hidden hover:border-orange-500 hover:-translate-y-2 transition duration-300"
                  >

                    {/* IMAGE */}
                    {blog.thumbnail && (

                      <div className="overflow-hidden">

                        <img
                          src={blog.thumbnail}
                          alt={blog.title}
                          className="w-full h-[240px] object-cover group-hover:scale-105 transition duration-500"
                        />

                      </div>

                    )}

                    {/* CONTENT */}
                    <div className="p-7">

                      <div className="mb-5">

                        <span className="bg-orange-500/10 text-orange-400 px-4 py-2 rounded-xl text-sm border border-orange-500/20">
                          {blog.category}
                        </span>

                      </div>

                      <h3 className="text-2xl font-bold mb-4 leading-snug group-hover:text-orange-400 transition">

                        {blog.title}

                      </h3>

                      <p className="text-gray-400 leading-relaxed line-clamp-3">

                        {blog.description}

                      </p>

                    </div>

                  </a>

                ))}

              </div>

            </section>

          )}

        </div>

      </div>

    </main>

  );

}