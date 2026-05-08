"use client";

import { useEffect, useState } from "react";
import ImageUploader from "@/components/ImageUploader";

import { getCurrentUser } from "@/lib/auth";

export default function ProfileForm() {

const [profileImage, setProfileImage] =
  useState("");
    const [github, setGithub] =
  useState("");

const [linkedin, setLinkedin] =
  useState("");

const [facebook, setFacebook] =
  useState("");

  const [profile, setProfile] =
    useState<any>(null);

  const [name, setName] =
    useState("");

  const [title, setTitle] =
    useState("");

  const [location, setLocation] =
    useState("");

  const [bio, setBio] =
    useState("");

  async function loadProfile() {

    const user = getCurrentUser();

    const res = await fetch(
      `/api/profile?userId=${user.id}`
    );

    const data = await res.json();

    setProfile(data);
setProfileImage(
  data.profile_image || ""
);
    setName(data.name || "");
    setTitle(data.title || "");
    setLocation(data.location || "");
    setBio(data.bio || "");
    setGithub(data.github || "");
setLinkedin(data.linkedin || "");
setFacebook(data.facebook || "");
  }

  async function updateProfile() {

    await fetch("/api/profile", {
      method: "PUT",
      body: JSON.stringify({
        id: profile.id,
        name,
        title,
        location,
        bio,
        github,
linkedin,
facebook,
profile_image: profileImage,
      }),
    });

    alert("Profile updated");

    window.location.reload();
  }

  useEffect(() => {
    loadProfile();
  }, []);

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
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="w-full p-4 bg-gray-800 rounded-xl"
      />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) =>
          setLocation(e.target.value)
        }
        className="w-full p-4 bg-gray-800 rounded-xl"
      />

      <textarea
        placeholder="Bio"
        value={bio}
        onChange={(e) =>
          setBio(e.target.value)
        }
        className="w-full p-4 bg-gray-800 rounded-xl min-h-[150px]"
      />
      <ImageUploader
  onUpload={(url) =>
    setProfileImage(url)
  }
/>

{profileImage && (

  <img
    src={profileImage}
    alt="profile"
    className="w-40 h-40 rounded-full object-cover"
  />

)}

<input
  type="text"
  placeholder="GitHub Link"
  value={github}
  onChange={(e) =>
    setGithub(e.target.value)
  }
  className="w-full p-4 bg-gray-800 rounded-xl"
/>

<input
  type="text"
  placeholder="LinkedIn Link"
  value={linkedin}
  onChange={(e) =>
    setLinkedin(e.target.value)
  }
  className="w-full p-4 bg-gray-800 rounded-xl"
/>

<input
  type="text"
  placeholder="Facebook Link"
  value={facebook}
  onChange={(e) =>
    setFacebook(e.target.value)
  }
  className="w-full p-4 bg-gray-800 rounded-xl"
/>
      <button
        onClick={updateProfile}
        className="bg-orange-500 px-6 py-3 rounded-xl"
      >
        Save Profile
      </button>

    </div>
  );
}