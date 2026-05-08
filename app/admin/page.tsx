"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";

import AdminSidebar from "@/components/AdminSidebar";

import ProfileForm from "@/components/ProfileForm";
import AddProjectForm from "@/components/AddProjectForm";
import ProjectList from "@/components/ProjectList";
import SectionManager from "@/components/SectionManager";
import SkillsManager from "@/components/SkillsManager";
import CertificatesManager from "@/components/CertificatesManager";

export default function AdminPage() {

  const router = useRouter();

  const [loading, setLoading] =
    useState(true);

  const [user, setUser] =
    useState<any>(null);

  const [active, setActive] =
    useState("dashboard");

  const [projectsCount, setProjectsCount] =
    useState(0);

  const [skillsCount, setSkillsCount] =
    useState(0);

  const [certificatesCount, setCertificatesCount] =
    useState(0);

  async function loadStats(userId: number) {

    const projectsRes =
      await fetch(
        `/api/projects/list?userId=${userId}`
      );

    const projectsData =
      await projectsRes.json();

    setProjectsCount(
      projectsData.length
    );

    const skillsRes =
      await fetch(
        `/api/skills?userId=${userId}`
      );

    const skillsData =
      await skillsRes.json();

    setSkillsCount(
      skillsData.length
    );

    const certificatesRes =
      await fetch(
        `/api/certificates?userId=${userId}`
      );

    const certificatesData =
      await certificatesRes.json();

    setCertificatesCount(
      certificatesData.length
    );
  }

  useEffect(() => {

    const currentUser =
      getCurrentUser();

    if (!currentUser) {
      router.push("/login");
      return;
    }

    setUser(currentUser);

    loadStats(currentUser.id);

    setLoading(false);

  }, []);

  function logout() {

    localStorage.removeItem("user");

    window.location.href =
      "/login";
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading Dashboard...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex">

      {/* SIDEBAR */}
      <AdminSidebar
        active={active}
        setActive={setActive}
      />

      {/* CONTENT */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">

        {/* TOP */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

          <div>

            <p className="text-orange-500 mb-2">
              CLIENT DASHBOARD
            </p>

            <h1 className="text-5xl font-bold">
              Welcome, {user?.name}
            </h1>

          </div>

          <div className="flex items-center gap-4">

            <a
              href={`/${user?.username}`}
              target="_blank"
              className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-2xl"
            >
              Live Preview
            </a>

            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-2xl"
            >
              Logout
            </button>

          </div>

        </div>

        {/* DASHBOARD */}
        {active === "dashboard" && (

          <div>

            {/* STATS */}
            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-gray-900 border border-gray-800 p-6 rounded-3xl">

                <p className="text-gray-400 mb-2">
                  Projects
                </p>

                <h2 className="text-3xl font-bold">
                  {projectsCount}
                </h2>

              </div>

              <div className="bg-gray-900 border border-gray-800 p-6 rounded-3xl">

                <p className="text-gray-400 mb-2">
                  Skills
                </p>

                <h2 className="text-3xl font-bold">
                  {skillsCount}
                </h2>

              </div>

              <div className="bg-gray-900 border border-gray-800 p-6 rounded-3xl">

                <p className="text-gray-400 mb-2">
                  Certificates
                </p>

                <h2 className="text-3xl font-bold">
                  {certificatesCount}
                </h2>

              </div>

            </div>

            {/* QUICK ACTIONS */}
            <div className="grid md:grid-cols-2 gap-6 mt-10">

              {/* PROFILE */}
              <button
                onClick={() =>
                  setActive("profile")
                }
                className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-left hover:border-orange-500 transition"
              >

                <p className="text-orange-500 mb-3">
                  PROFILE
                </p>

                <h2 className="text-3xl font-bold mb-3">
                  Edit Profile
                </h2>

                <p className="text-gray-400">
                  Update personal information,
                  bio, image and social links.
                </p>

              </button>

              {/* PROJECTS */}
              <button
                onClick={() =>
                  setActive("projects")
                }
                className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-left hover:border-orange-500 transition"
              >

                <p className="text-orange-500 mb-3">
                  PROJECTS
                </p>

                <h2 className="text-3xl font-bold mb-3">
                  Manage Projects
                </h2>

                <p className="text-gray-400">
                  Add portfolio projects and
                  showcase your work.
                </p>

              </button>

              {/* SKILLS */}
              <button
                onClick={() =>
                  setActive("skills")
                }
                className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-left hover:border-orange-500 transition"
              >

                <p className="text-orange-500 mb-3">
                  SKILLS
                </p>

                <h2 className="text-3xl font-bold mb-3">
                  Skills Manager
                </h2>

                <p className="text-gray-400">
                  Add and organize technical
                  and professional skills.
                </p>

              </button>

              {/* LIVE PREVIEW */}
              <a
                href={`/${user?.username}`}
                target="_blank"
                className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-orange-500 transition block"
              >

                <p className="text-orange-500 mb-3">
                  WEBSITE
                </p>

                <h2 className="text-3xl font-bold mb-3">
                  Live Preview
                </h2>

                <p className="text-gray-400">
                  Open your public portfolio
                  in a new tab.
                </p>

              </a>

            </div>

          </div>

        )}

        {/* PROFILE */}
        {active === "profile" && (

          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">

            <div className="mb-8">

              <p className="text-orange-500 mb-2">
                PROFILE SETTINGS
              </p>

              <h2 className="text-4xl font-bold">
                Edit Profile
              </h2>

            </div>

            <ProfileForm />

          </div>

        )}

        {/* PROJECTS */}
        {active === "projects" && (

          <div className="space-y-8">

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">

              <div className="mb-8">

                <p className="text-orange-500 mb-2">
                  PROJECT MANAGEMENT
                </p>

                <h2 className="text-4xl font-bold">
                  Add Project
                </h2>

              </div>

              <AddProjectForm />

            </div>

            <ProjectList />

          </div>

        )}

        {/* SKILLS */}
        {active === "skills" && (

          <SkillsManager />

        )}

        {/* CERTIFICATES */}
        {active === "certificates" && (

          <CertificatesManager />

        )}

        {/* APPEARANCE */}
        {active === "appearance" && (

          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">

            <div className="mb-8">

              <p className="text-orange-500 mb-2">
                SITE STRUCTURE
              </p>

              <h2 className="text-4xl font-bold">
                Sections
              </h2>

            </div>

            <SectionManager />

          </div>

        )}

      </div>

    </main>
  );
}