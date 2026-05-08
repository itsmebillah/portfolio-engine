type Props = {
  projects: any[];
};

export default function Projects({
  projects,
}: Props) {

  return (
    <div className="grid gap-6 mt-10">

      {projects?.map((project) => (

        <div
          key={project.id}
          className="border border-gray-800 rounded-2xl overflow-hidden bg-gray-900"
        >

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-52 object-cover"
          />

          <div className="p-6">

            <h2 className="text-2xl font-bold mb-3">
              {project.title}
            </h2>

            <p className="text-gray-400 mb-5">
              {project.description}
            </p>

            <div className="flex gap-4">

              <a
                href={project.live_url}
                target="_blank"
                className="px-4 py-2 bg-orange-500 rounded-xl"
              >
                Live
              </a>

              <a
                href={project.github_url}
                target="_blank"
                className="px-4 py-2 bg-gray-700 rounded-xl"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>

      ))}

    </div>
  );
}