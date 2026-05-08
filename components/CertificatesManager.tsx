"use client";

import { useEffect, useState } from "react";

import { getCurrentUser } from "@/lib/auth";

export default function CertificatesManager() {

  const [certificates, setCertificates] =
    useState<any[]>([]);

  const [title, setTitle] =
    useState("");

  const [issuer, setIssuer] =
    useState("");

  const [credentialLink, setCredentialLink] =
    useState("");

  const [image, setImage] =
    useState("");

  const [issueDate, setIssueDate] =
    useState("");

  async function loadCertificates() {

    const user = getCurrentUser();

    const res = await fetch(
      `/api/certificates?userId=${user.id}`
    );

    const data = await res.json();

    setCertificates(data);
  }

  useEffect(() => {
    loadCertificates();
  }, []);

  async function addCertificate() {

    const user = getCurrentUser();

    await fetch(
      "/api/certificates",
      {
        method: "POST",

        body: JSON.stringify({
          title,
          issuer,
          credential_link:
            credentialLink,
          image,
          issue_date:
            issueDate,
          userId: user.id,
        }),
      }
    );

    setTitle("");
    setIssuer("");
    setCredentialLink("");
    setImage("");
    setIssueDate("");

    loadCertificates();
  }

  async function deleteCertificate(
    id: number
  ) {

    await fetch(
      `/api/certificates?id=${id}`,
      {
        method: "DELETE",
      }
    );

    loadCertificates();
  }

  return (
    <div className="space-y-8">

      {/* ADD */}
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">

        <div className="mb-8">

          <p className="text-orange-500 mb-2">
            CERTIFICATES
          </p>

          <h2 className="text-4xl font-bold">
            Add Certificate
          </h2>

        </div>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Certificate Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="w-full p-4 bg-black border border-gray-800 rounded-2xl"
          />

          <input
            type="text"
            placeholder="Issuer"
            value={issuer}
            onChange={(e) =>
              setIssuer(e.target.value)
            }
            className="w-full p-4 bg-black border border-gray-800 rounded-2xl"
          />

          <input
            type="text"
            placeholder="Credential Verification Link"
            value={credentialLink}
            onChange={(e) =>
              setCredentialLink(
                e.target.value
              )
            }
            className="w-full p-4 bg-black border border-gray-800 rounded-2xl"
          />

          <input
            type="text"
            placeholder="Certificate Image URL"
            value={image}
            onChange={(e) =>
              setImage(e.target.value)
            }
            className="w-full p-4 bg-black border border-gray-800 rounded-2xl"
          />

          <input
            type="date"
            value={issueDate}
            onChange={(e) =>
              setIssueDate(e.target.value)
            }
            className="w-full p-4 bg-black border border-gray-800 rounded-2xl"
          />

          <button
            onClick={addCertificate}
            className="bg-orange-500 hover:bg-orange-600 transition px-6 py-4 rounded-2xl"
          >
            Add Certificate
          </button>

        </div>

      </div>

      {/* LIST */}
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">

        <div className="mb-8">

          <p className="text-orange-500 mb-2">
            ALL CERTIFICATES
          </p>

          <h2 className="text-4xl font-bold">
            Certificates List
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {certificates.map((item) => (

            <div
              key={item.id}
              className="bg-black border border-gray-800 rounded-3xl overflow-hidden"
            >

              {/* IMAGE */}
              {item.image && (

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[220px] object-cover"
                />

              )}

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {item.issuer}
                </p>

                {item.issue_date && (

                  <p className="text-sm text-orange-400 mb-5">
                    {item.issue_date}
                  </p>

                )}

                <div className="flex flex-wrap gap-3">

                  {item.credential_link && (

                    <a
                      href={item.credential_link}
                      target="_blank"
                      className="bg-orange-500 hover:bg-orange-600 transition px-4 py-2 rounded-xl"
                    >
                      Verify
                    </a>

                  )}

                  <button
                    onClick={() =>
                      deleteCertificate(item.id)
                    }
                    className="bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-xl"
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}