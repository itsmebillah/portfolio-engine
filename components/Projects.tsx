type Props = {
  projects: any[];
};

export default function Projects({
  projects,
}: Props) {

  const featured =
    projects?.[0];

  const others =
    projects?.slice(1);

  return (

    <div className="space-y-10">

      {/* FEATURED PROJECT */}
      {featured && (

        <div className="group overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">

          <div className="grid lg:grid-cols-[1.1fr_.9fr] min-h-[320px]">

            {/* IMAGE */}
            <div className="relative overflow-hidden">

              <img
                src={featured?.cover_image}
                alt={featured?.title}
                className="w-full h-[260px] md:h-[320px] object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            </div>

            {/* CONTENT */}
            <div className="p-6 md:p-8 flex flex-col justify-center">

              {/* BADGE */}
              <div className="mb-5">

                <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm">

                  Featured Project

                </span>

              </div>

              {/* TITLE */}
              <h3 className="text-2xl md:text-3xl font-black mb-5 leading-tight">

                {featured?.title}

              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 leading-relaxed mb-8 line-clamp-4">

                {featured?.description}

              </p>

              {/* BUTTON */}
              {featured?.live_link && (

                <a
                  href={featured?.live_link}
                  target="_blank"
                  className="inline-flex w-fit items-center gap-2 px-6 h-12 rounded-2xl bg-orange-500 hover:bg-orange-600 transition font-semibold"
                >

                  Live Preview

                </a>

              )}

            </div>

          </div>

        </div>

      )}

      {/* NORMAL GRID */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {others?.map((project) => (

          <div
            key={project.id}
            className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-orange-500/30 transition duration-500"
          >

            {/* IMAGE */}
            <div className="relative overflow-hidden">

              <img
                src={project?.cover_image}
                alt={project?.title}
                className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            </div>

            {/* CONTENT */}
            <div className="p-6">

              {/* TITLE */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition">

                {project?.title}

              </h3>

              {/* SHORT DESCRIPTION */}
              <p className="text-gray-400 leading-relaxed line-clamp-3 mb-6">

                {project?.description}

              </p>

              {/* BUTTON */}
              {project?.live_link && (

                <a
                  href={project?.live_link}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-orange-400 font-semibold hover:gap-3 transition-all"
                >

                  Visit Project →

                </a>

              )}

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}