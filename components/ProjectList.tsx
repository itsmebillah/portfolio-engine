"use client";

import { useEffect, useState } from "react";

import { getCurrentUser } from "@/lib/auth";

export default function ProjectList() {

  const [projects, setProjects] =
    useState<any[]>([]);

  async function loadProjects() {

    const user =
      getCurrentUser();

    const res = await fetch(
      `/api/projects?userId=${user.id}`
    );

    const data = await res.json();

    setProjects(data);
  }

  useEffect(() => {
    loadProjects();
  }, []);

  async function deleteProject(
    id: number
  ) {

    await fetch(
      `/api/projects?id=${id}`,
      {
        method: "DELETE",
      }
    );

    loadProjects();
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">

      <div className="mb-8">

        <p className="text-orange-500 mb-2">
          ALL PROJECTS
        </p>

        <h2 className="text-4xl font-bold">
          Project List
        </h2>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {projects.map((project) => (

          <div
            key={project.id}
            className="bg-black border border-gray-800 rounded-3xl overflow-hidden"
          >

            {/* IMAGE */}
            {project.cover_image && (

              <img
                src={project.cover_image}
                alt={project.title}
                className="w-full h-[220px] object-cover"
              />

            )}

            <div className="p-6">

              {/* TITLE */}
              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 mb-5 line-clamp-3">
                {project.description}
              </p>

              {/* TECH */}
              {project.tech_stack && (

                <div className="mb-5">

                  <div className="bg-orange-500/10 text-orange-400 inline-block px-4 py-2 rounded-xl text-sm">
                    {project.tech_stack}
                  </div>

                </div>

              )}

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-3">

                {project.live_link && (

                  <a
                    href={project.live_link}
                    target="_blank"
                    className="bg-orange-500 hover:bg-orange-600 transition px-4 py-2 rounded-xl"
                  >
                    Live
                  </a>

                )}

                {project.github_link && (

                  <a
                    href={project.github_link}
                    target="_blank"
                    className="bg-gray-800 hover:bg-gray-700 transition px-4 py-2 rounded-xl"
                  >
                    GitHub
                  </a>

                )}

                <button
                  onClick={() =>
                    deleteProject(project.id)
                  }
                  className="bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-xl"
                >
                  Delete
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}