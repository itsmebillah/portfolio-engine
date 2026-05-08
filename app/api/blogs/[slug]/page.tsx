import { supabase } from "@/lib/supabase";

type Props = {
  params: {
    slug: string;
  };
};

export default async function SingleBlogPage({
  params,
}: Props) {

  const { data: blog } =
    await supabase
      .from("blogs")
      .select("*")
      .eq("slug", params.slug)
      .eq("published", true)
      .single();

  if (!blog) {

    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center text-4xl font-bold">
        Blog Not Found
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO IMAGE */}
      {blog.thumbnail && (

        <img
          src={blog.thumbnail}
          alt={blog.title}
          className="w-full h-[420px] object-cover"
        />

      )}

      <div className="max-w-4xl mx-auto px-6 py-14">

        {/* CATEGORY */}
        <div className="mb-5">

          <span className="bg-orange-500/10 text-orange-400 px-4 py-2 rounded-xl">
            {blog.category}
          </span>

        </div>

        {/* TITLE */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
          {blog.title}
        </h1>

        {/* DESCRIPTION */}
        <p className="text-2xl text-gray-400 leading-relaxed mb-10">
          {blog.description}
        </p>

        {/* CONTENT */}
        <div className="text-lg leading-[2] text-gray-300 whitespace-pre-wrap">

          {blog.content}

        </div>

      </div>

    </main>
  );
}