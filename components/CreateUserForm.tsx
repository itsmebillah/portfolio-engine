"use client";

import { useState } from "react";

export default function CreateUserForm() {

    const [template, setTemplate] =
  useState("default");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [username, setUsername] =
    useState("");

  async function createUser() {

    const res = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
        username,
        template,
      }),
    });

    const data = await res.json();

    if (data.success) {

      alert("User created");

      setName("");
      setEmail("");
      setPassword("");
      setUsername("");

    }
  }

  return (
    <div className="space-y-4">

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        className="w-full p-4 bg-gray-800 rounded-xl"
      />

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
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
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
      <select
  value={template}
  onChange={(e) =>
    setTemplate(e.target.value)
  }
  className="w-full p-4 bg-gray-800 rounded-xl"
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
        onClick={createUser}
        className="w-full bg-orange-500 p-4 rounded-xl"
      >
        Create User
      </button>

    </div>
  );
}