"use client";

import { useState } from "react";

export default function TemplateSwitcher() {

  const [loading, setLoading] = useState(false);

  async function changeTemplate(template: string) {

    setLoading(true);

    await fetch("/api/template", {
      method: "POST",
      body: JSON.stringify({
        template,
      }),
    });

    location.reload();
  }

  return (
    <div className="space-y-4">

      <button
        onClick={() => changeTemplate("default")}
        className="w-full bg-orange-500 p-4 rounded-xl"
      >
        Default Template
      </button>

      <button
        onClick={() => changeTemplate("split")}
        className="w-full bg-gray-800 p-4 rounded-xl"
      >
        Split Template
      </button>

      {loading && (
        <p className="text-gray-400">
          Switching...
        </p>
      )}

    </div>
  );
}