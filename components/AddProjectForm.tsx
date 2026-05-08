"use client";

import { useState } from "react";

import { getCurrentUser } from "@/lib/auth";

export default function AddProjectForm() {

  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [liveLink, setLiveLink] =
    useState("");

  const [githubLink, setGithubLink] =
    useState("");

  const [coverImage, setCoverImage] =
    useState("");

  const [techStack, setTechStack] =
    useState("");

  async function addProject() {

    const user =
      getCurrentUser();

    await fetch("/api/projects", {
      method: "POST",

      body: JSON.stringify({
        title,
        description,
        live_link: liveLink,
        github_link: githubLink,
        cover_image: coverImage,
        tech_stack: techStack,
        userId: user.id,
      }),
    });

    alert("Project added");

    setTitle("");
    setDescription("");
    setLiveLink("");
    setGithubLink("");
    setCoverImage("");
    setTechStack("");

    window.location.reload();
  }

  return (
    <div className="space-y-5">

      {/* TITLE */}
      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="w-full p-4 bg-black border border-gray-800 rounded-2xl"
      />

      {/* DESCRIPTION */}
      <textarea
        placeholder="Project Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
        className="w-full p-4 bg-black border border-gray-800 rounded-2xl min-h-[140px]"
      />

      {/* LIVE LINK */}
      <input
        type="text"
        placeholder="Live Website Link"
        value={liveLink}
        onChange={(e) =>
          setLiveLink(e.target.value)
        }
        className="w-full p-4 bg-black border border-gray-800 rounded-2xl"
      />

      {/* GITHUB */}
      <input
        type="text"
        placeholder="GitHub Repository Link"
        value={githubLink}
        onChange={(e) =>
          setGithubLink(e.target.value)
        }
        className="w-full p-4 bg-black border border-gray-800 rounded-2xl"
      />

      {/* COVER IMAGE */}
      <input
        type="text"
        placeholder="Cover Image URL"
        value={coverImage}
        onChange={(e) =>
          setCoverImage(e.target.value)
        }
        className="w-full p-4 bg-black border border-gray-800 rounded-2xl"
      />

      {/* TECH STACK */}
      <input
        type="text"
        placeholder="Tech Stack (React, Next.js, SQL...)"
        value={techStack}
        onChange={(e) =>
          setTechStack(e.target.value)
        }
        className="w-full p-4 bg-black border border-gray-800 rounded-2xl"
      />

      <button
        onClick={addProject}
        className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-2xl"
      >
        Add Project
      </button>

    </div>
  );
}