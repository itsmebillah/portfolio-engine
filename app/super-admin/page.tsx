"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import CreateUserForm from "@/components/CreateUserForm";
import ClientList from "@/components/ClientList";

export default function SuperAdminPage() {

  const router = useRouter();

  const [loading, setLoading] =
    useState(true);

  const [user, setUser] =
    useState<any>(null);

  const [showClients, setShowClients] =
    useState(false);

  const [showCreateUser, setShowCreateUser] =
    useState(false);

  useEffect(() => {

    const userData =
      localStorage.getItem("user");

    if (!userData) {
      router.push("/login");
      return;
    }

    const parsedUser =
      JSON.parse(userData);

    if (
      parsedUser.role !==
      "super_admin"
    ) {
      router.push("/admin");
      return;
    }

    setUser(parsedUser);

    setLoading(false);

  }, []);

  function logout() {

    localStorage.removeItem("user");

    window.location.href = "/login";
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center text-2xl">
        Loading Super Admin...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-10">

      {/* TOP BAR */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-4">

        <div>

          <p className="text-orange-500 text-lg mb-2">
            SYSTEM CONTROL PANEL
          </p>

          <h1 className="text-5xl md:text-6xl font-bold">
            Super Admin
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            Logged in as {user?.name}
          </p>

        </div>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-2xl"
        >
          Logout
        </button>

      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-gradient-to-br from-orange-500 to-orange-700 p-6 rounded-3xl shadow-2xl">

          <p className="text-sm opacity-80 mb-2">
            PLATFORM
          </p>

          <h2 className="text-3xl font-bold">
            Portfolio Engine
          </h2>

        </div>

        <div className="bg-gray-900 border border-gray-800 p-6 rounded-3xl">

          <p className="text-gray-400 mb-2">
            Access Level
          </p>

          <h2 className="text-3xl font-bold text-orange-500">
            Super Admin
          </h2>

        </div>

        <div className="bg-gray-900 border border-gray-800 p-6 rounded-3xl">

          <p className="text-gray-400 mb-2">
            Templates
          </p>

          <h2 className="text-3xl font-bold">
            3 Active
          </h2>

        </div>

      </div>

      {/* MANAGEMENT CARDS */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* CLIENTS */}
        <div
          onClick={() =>
            setShowClients(true)
          }
          className="bg-gray-900 border border-gray-800 p-8 rounded-3xl cursor-pointer hover:border-orange-500 transition"
        >

          <p className="text-orange-500 mb-3">
            CLIENT MANAGEMENT
          </p>

          <h2 className="text-4xl font-bold mb-4">
            Clients
          </h2>

          <p className="text-gray-400">
            Search, edit, manage templates
            and control client portfolios.
          </p>

        </div>

        {/* CREATE CLIENT */}
        <div
          onClick={() =>
            setShowCreateUser(true)
          }
          className="bg-gray-900 border border-gray-800 p-8 rounded-3xl cursor-pointer hover:border-orange-500 transition"
        >

          <p className="text-orange-500 mb-3">
            CREATE USER
          </p>

          <h2 className="text-4xl font-bold mb-4">
            New Client
          </h2>

          <p className="text-gray-400">
            Create portfolio users and
            assign templates instantly.
          </p>

        </div>

      </div>

      {/* CLIENT MODAL */}
      {showClients && (

        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-5">

          <div className="bg-black border border-gray-800 rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-hidden">

            <div className="flex items-center justify-between p-6 border-b border-gray-800">

              <div>

                <p className="text-orange-500 mb-2">
                  CLIENT DATABASE
                </p>

                <h2 className="text-4xl font-bold">
                  Clients & Templates
                </h2>

              </div>

              <button
                onClick={() =>
                  setShowClients(false)
                }
                className="text-3xl"
              >
                ✕
              </button>

            </div>

            <div className="p-6 overflow-y-auto max-h-[80vh]">

              <ClientList />

            </div>

          </div>

        </div>

      )}

      {/* CREATE USER MODAL */}
      {showCreateUser && (

        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-5">

          <div className="bg-black border border-gray-800 rounded-3xl w-full max-w-2xl">

            <div className="flex items-center justify-between p-6 border-b border-gray-800">

              <div>

                <p className="text-orange-500 mb-2">
                  CREATE CLIENT
                </p>

                <h2 className="text-4xl font-bold">
                  New Portfolio User
                </h2>

              </div>

              <button
                onClick={() =>
                  setShowCreateUser(false)
                }
                className="text-3xl"
              >
                ✕
              </button>

            </div>

            <div className="p-6">

              <CreateUserForm />

            </div>

          </div>

        </div>

      )}

    </main>
  );
}