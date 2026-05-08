import { supabase } from "@/lib/supabase";

export default async function BlogPage() {

  const { data: blogs } =
    await supabase
      .from("blogs")
      .select("*")
      .eq("published", true)
      .order("created_at", {
        ascending: false,
      });

  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-10">

      {/* TOP */}
      <div className="mb-14">

        <p className="text-orange-500 mb-3">
          PUBLIC BLOGS
        </p>

        <h1 className="text-6xl font-bold mb-4">
          Blog Articles
        </h1>

        <p className="text-gray-400 text-lg">
          Insights, tutorials and ideas.
        </p>

      </div>

      {/* BLOG GRID */}
      <div className="grid md:grid-cols-3 gap-8">

        {blogs?.map((blog) => (

          <a
            key={blog.id}
            href={`/blog/${blog.slug}`}
            className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden hover:border-orange-500 transition"
          >

            {/* IMAGE */}
            {blog.thumbnail && (

              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="w-full h-[240px] object-cover"
              />

            )}

            <div className="p-6">

              <div className="flex items-center justify-between mb-4">

                <div className="bg-orange-500/10 text-orange-400 px-4 py-2 rounded-xl text-sm">
                  {blog.category}
                </div>

              </div>

              <h2 className="text-2xl font-bold mb-4">
                {blog.title}
              </h2>

              <p className="text-gray-400 line-clamp-3">
                {blog.description}
              </p>

            </div>

          </a>

        ))}

      </div>

    </main>
  );
}