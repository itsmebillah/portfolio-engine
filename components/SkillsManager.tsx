"use client";

import { useEffect, useState } from "react";

import { getCurrentUser } from "@/lib/auth";

export default function SkillsManager() {

  const [skills, setSkills] =
    useState<any[]>([]);

  const [skill, setSkill] =
    useState("");

  async function loadSkills() {

    const user = getCurrentUser();

    const res = await fetch(
      `/api/skills?userId=${user.id}`
    );

    const data = await res.json();

    setSkills(data);
  }

  useEffect(() => {
    loadSkills();
  }, []);

  async function addSkill() {

    const user = getCurrentUser();

    await fetch("/api/skills", {
      method: "POST",

      body: JSON.stringify({
        name: skill,
        userId: user.id,
      }),
    });

    setSkill("");

    loadSkills();
  }

  async function deleteSkill(id: number) {

    await fetch(
      `/api/skills?id=${id}`,
      {
        method: "DELETE",
      }
    );

    loadSkills();
  }

  return (
    <div className="space-y-8">

      {/* ADD */}
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">

        <div className="mb-8">

          <p className="text-orange-500 mb-2">
            SKILLS
          </p>

          <h2 className="text-4xl font-bold">
            Add Skill
          </h2>

        </div>

        <div className="flex gap-4">

          <input
            type="text"
            placeholder="React, SQL, Power BI..."
            value={skill}
            onChange={(e) =>
              setSkill(e.target.value)
            }
            className="flex-1 p-4 bg-black border border-gray-800 rounded-2xl"
          />

          <button
            onClick={addSkill}
            className="bg-orange-500 hover:bg-orange-600 transition px-6 rounded-2xl"
          >
            Add
          </button>

        </div>

      </div>

      {/* LIST */}
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">

        <div className="mb-8">

          <p className="text-orange-500 mb-2">
            ALL SKILLS
          </p>

          <h2 className="text-4xl font-bold">
            Skills List
          </h2>

        </div>

        <div className="flex flex-wrap gap-4">

          {skills.map((item) => (

            <div
              key={item.id}
              className="bg-black border border-gray-800 px-5 py-3 rounded-2xl flex items-center gap-4"
            >

              <span>
                {item.name}
              </span>

              <button
                onClick={() =>
                  deleteSkill(item.id)
                }
                className="text-red-500"
              >
                ✕
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}