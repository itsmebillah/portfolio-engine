"use client";

import { useState } from "react";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (data.success) {

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      if (
  data.user.role ===
  "super_admin"
) {

  window.location.href =
    "/super-admin";

} else {

  window.location.href =
    "/admin";

}

    } else {

      alert("Invalid credentials");

    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-10">

      <div className="bg-gray-900 p-10 rounded-3xl w-full max-w-md">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Login
        </h1>

        <div className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full p-4 bg-gray-800 rounded-xl"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full p-4 bg-gray-800 rounded-xl"
          />

          <button
            onClick={login}
            className="w-full bg-orange-500 p-4 rounded-xl"
          >
            Login
          </button>

        </div>

      </div>

    </main>
  );
}