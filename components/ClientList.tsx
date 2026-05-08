"use client";

import { useEffect, useState } from "react";

export default function ClientList() {

  const [clients, setClients] =
    useState<any[]>([]);

  const [search, setSearch] =
    useState("");

  const [selectedClient, setSelectedClient] =
    useState<any>(null);

  const [editName, setEditName] =
    useState("");

  const [editTemplate, setEditTemplate] =
    useState("");

  async function loadClients() {

    const res = await fetch(
      "/api/users/list"
    );

    const data = await res.json();

    setClients(data);
  }

  useEffect(() => {
    loadClients();
  }, []);

  const filteredClients =
    clients.filter((client) =>
      client.name
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );

  async function updateClient() {

    await fetch(
      "/api/users/update",
      {
        method: "PUT",

        body: JSON.stringify({
          id: selectedClient.id,
          name: editName,
          template: editTemplate,
        }),
      }
    );

    setSelectedClient(null);

    loadClients();

    alert("Client updated");
  }

  function loginAsClient(client: any) {

    localStorage.setItem(
      "user",
      JSON.stringify(client)
    );

    window.location.href =
      "/admin";
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">

      {/* TOP */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

        <div>

          <p className="text-orange-500 mb-2">
            CLIENT DATABASE
          </p>

          <h2 className="text-4xl font-bold">
            Clients
          </h2>

        </div>

        <input
          type="text"
          placeholder="Search client..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="bg-black border border-gray-800 rounded-2xl px-5 py-4 w-full md:w-[320px]"
        />

      </div>

      {/* CLIENTS */}
      <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">

        {filteredClients.map((client) => (

          <div
            key={client.id}
            className="bg-black border border-gray-800 rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >

            {/* LEFT */}
            <div>

              <h3 className="text-2xl font-semibold">
                {client.name}
              </h3>

              <p className="text-gray-400">
                @{client.username}
              </p>

            </div>

            {/* CENTER */}
            <div className="flex items-center gap-3">

              <div className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-xl text-sm">
                {client.active_template}
              </div>

              <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl text-sm">
                Active
              </div>

            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-3">

              <a
                href={`/${client.username}`}
                target="_blank"
                className="bg-orange-500 hover:bg-orange-600 transition px-4 py-2 rounded-xl"
              >
                Open
              </a>

              <button
                onClick={() =>
                  loginAsClient(client)
                }
                className="bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-xl"
              >
                Login As
              </button>

              <button
                onClick={() => {

                  setSelectedClient(client);

                  setEditName(client.name);

                  setEditTemplate(
                    client.active_template
                  );

                }}
                className="bg-gray-800 hover:bg-gray-700 transition px-4 py-2 rounded-xl"
              >
                Edit
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* EDIT MODAL */}
      {selectedClient && (

        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-5">

          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 w-full max-w-xl">

            <div className="flex items-center justify-between mb-8">

              <div>

                <p className="text-orange-500 mb-2">
                  CLIENT SETTINGS
                </p>

                <h2 className="text-4xl font-bold">
                  Edit Client
                </h2>

              </div>

              <button
                onClick={() =>
                  setSelectedClient(null)
                }
                className="text-2xl"
              >
                ✕
              </button>

            </div>

            <div className="space-y-5">

              <input
                type="text"
                value={editName}
                onChange={(e) =>
                  setEditName(e.target.value)
                }
                className="w-full p-4 bg-black border border-gray-800 rounded-2xl"
              />

              <select
                value={editTemplate}
                onChange={(e) =>
                  setEditTemplate(
                    e.target.value
                  )
                }
                className="w-full p-4 bg-black border border-gray-800 rounded-2xl"
              >

                <option value="default">
                  Default Template
                </option>

                <option value="split">
                  Split Template
                </option>

                <option value="tree">
                  Tree Template
                </option>

              </select>

              <button
                onClick={updateClient}
                className="w-full bg-orange-500 hover:bg-orange-600 transition p-4 rounded-2xl font-bold"
              >
                Save Changes
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}