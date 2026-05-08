"use client";

import { useEffect, useState } from "react";

export default function SectionManager() {

  const [sections, setSections] = useState<any[]>([]);

  async function loadSections() {

    const res = await fetch("/api/sections");

    const data = await res.json();

    setSections(data);
  }

  async function toggleSection(
    id: number,
    active: boolean
  ) {

    await fetch("/api/sections", {
      method: "PUT",
      body: JSON.stringify({
        id,
        active: !active,
      }),
    });

    loadSections();
    location.reload();
  }

  useEffect(() => {
    loadSections();
  }, []);

  return (
    <div className="space-y-4">

      {sections.map((section) => (

        <div
          key={section.id}
          className="flex items-center justify-between bg-gray-800 p-4 rounded-xl"
        >

          <p className="capitalize">
            {section.name}
          </p>

          <button
            onClick={() =>
              toggleSection(
                section.id,
                section.active
              )
            }
            className={`px-4 py-2 rounded-xl ${
              section.active
                ? "bg-green-500"
                : "bg-red-500"
            }`}
          >
            {section.active
              ? "Visible"
              : "Hidden"}
          </button>

        </div>

      ))}

    </div>
  );
}