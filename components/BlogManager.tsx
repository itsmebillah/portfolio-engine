"use client";

import { useEffect, useState } from "react";

import { getCurrentUser } from "@/lib/auth";

export default function BlogManager() {

  /* CREATE STATES */
  const [blogs, setBlogs] =
    useState<any[]>([]);

    const [search, setSearch] =
  useState("");

const [filter, setFilter] =
  useState("all");

  const [title, setTitle] =
    useState("");

  const [slug, setSlug] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [content, setContent] =
    useState("");

  const [thumbnail, setThumbnail] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [published, setPublished] =
    useState(false);

  /* EDIT STATES */
  const [editingBlog, setEditingBlog] =
    useState<any>(null);

  const [editTitle, setEditTitle] =
    useState("");

  const [editSlug, setEditSlug] =
    useState("");

  const [editDescription, setEditDescription] =
    useState("");

  const [editContent, setEditContent] =
    useState("");

  const [editThumbnail, setEditThumbnail] =
    useState("");

  const [editCategory, setEditCategory] =
    useState("");

  const [editPublished, setEditPublished] =
    useState(false);

  /* LOAD BLOGS */
  async function loadBlogs() {

    const user =
      getCurrentUser();

    const res = await fetch(
      `/api/blogs?userId=${user.id}`
    );

    const data = await res.json();

    setBlogs(data);
  }

  useEffect(() => {
    loadBlogs();
  }, []);

  /* CREATE BLOG */
  async function addBlog() {

    const user =
      getCurrentUser();

    await fetch("/api/blogs", {
      method: "POST",

      body: JSON.stringify({
        title,
        slug,
        description,
        content,
        thumbnail,
        category,
        published,
        userId: user.id,
      }),
    });

    setTitle("");
    setSlug("");
    setDescription("");
    setContent("");
    setThumbnail("");
    setCategory("");
    setPublished(false);

    loadBlogs();
  }

  /* DELETE BLOG */
  async function deleteBlog(
    id: number
  ) {

    await fetch(
      `/api/blogs?id=${id}`,
      {
        method: "DELETE",
      }
    );

    loadBlogs();
  }

  /* UPDATE BLOG */
  async function updateBlog() {

    await fetch(
      "/api/blogs/update",
      {
        method: "PUT",

        body: JSON.stringify({
          id: editingBlog.id,

          title: editTitle,
          slug: editSlug,
          description:
            editDescription,
          content:
            editContent,
          thumbnail:
            editThumbnail,
          category:
            editCategory,
          published:
            editPublished,
        }),
      }
    );

    setEditingBlog(null);

    loadBlogs();
  }

  return (
    <div className="space-y-8">

      {/* CREATE BLOG */}
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">

        <div className="mb-8">

          <p className="text-orange-500 mb-2">
            BLOG SYSTEM
          </p>

          <h2 className="text-4xl font-bold">
            Create Blog
          </h2>

        </div>

        <div className="space-y-4">

          {/* TITLE */}
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => {

              const value =
                e.target.value;

              setTitle(value);

              setSlug(
                value
                  .toLowerCase()
                  .replaceAll(" ", "-")
                  .replace(/[^\w-]+/g, "")
              );

            }}
            className="w-full p-4 bg-black border border-gray-800 rounded-2xl"
          />

          {/* SLUG */}
          <input
            type="text"
            placeholder="Slug"
            value={slug}
            disabled
            className="w-full p-4 bg-black border border-gray-800 rounded-2xl opacity-70"
          />

          {/* DESCRIPTION */}
          <textarea
            placeholder="Short Description"
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            className="w-full p-4 bg-black border border-gray-800 rounded-2xl min-h-[120px]"
          />

          {/* CONTENT */}
          <textarea
            placeholder="Full Blog Content"
            value={content}
            onChange={(e) =>
              setContent(
                e.target.value
              )
            }
            className="w-full p-4 bg-black border border-gray-800 rounded-2xl min-h-[250px]"
          />

          {/* THUMBNAIL */}
          <input
            type="text"
            placeholder="Thumbnail URL"
            value={thumbnail}
            onChange={(e) =>
              setThumbnail(
                e.target.value
              )
            }
            className="w-full p-4 bg-black border border-gray-800 rounded-2xl"
          />

          {/* CATEGORY */}
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) =>
              setCategory(
                e.target.value
              )
            }
            className="w-full p-4 bg-black border border-gray-800 rounded-2xl"
          />

          {/* PUBLISH */}
          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              checked={published}
              onChange={(e) =>
                setPublished(
                  e.target.checked
                )
              }
            />

            <span>
              Publish Now
            </span>

          </label>

          <button
            onClick={addBlog}
            className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-2xl"
          >
            Publish Blog
          </button>

        </div>

      </div>

      {/* BLOG LIST */}
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">

        <div className="mb-8">

          <p className="text-orange-500 mb-2">
            ALL BLOGS
          </p>

          <h2 className="text-4xl font-bold">
            Blog List
          </h2>

        </div>

        {/* FILTER BAR */}
<div className="flex flex-col md:flex-row gap-4 mb-8">

  <input
    type="text"
    placeholder="Search blogs..."
    value={search}
    onChange={(e) =>
      setSearch(e.target.value)
    }
    className="flex-1 p-4 bg-black border border-gray-800 rounded-2xl"
  />

  <select
    value={filter}
    onChange={(e) =>
      setFilter(e.target.value)
    }
    className="p-4 bg-black border border-gray-800 rounded-2xl"
  >

    <option value="all">
      All
    </option>

    <option value="published">
      Published
    </option>

    <option value="draft">
      Draft
    </option>

  </select>

</div>

<div className="grid md:grid-cols-2 gap-6">

          {blogs
  .filter((blog) => {

    const matchesSearch =
      blog.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        );

    const matchesFilter =
      filter === "all"
        ? true
        : filter === "published"
        ? blog.published
        : !blog.published;

    return (
      matchesSearch &&
      matchesFilter
    );
  })
  .map((blog) => (

            <div
              key={blog.id}
              className="bg-black border border-gray-800 rounded-3xl overflow-hidden"
            >

              {/* IMAGE */}
              {blog.thumbnail && (

                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-[220px] object-cover"
                />

              )}

              <div className="p-6">

                <div className="flex items-center justify-between mb-4">

                  <div className="bg-orange-500/10 text-orange-400 px-4 py-2 rounded-xl text-sm">
                    {blog.category}
                  </div>

                  <div
                    className={`px-4 py-2 rounded-xl text-sm ${
                      blog.published
                        ? "bg-green-500/10 text-green-400"
                        : "bg-yellow-500/10 text-yellow-400"
                    }`}
                  >
                    {blog.published
                      ? "Published"
                      : "Draft"}
                  </div>

                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {blog.title}
                </h3>

                <p className="text-gray-400 mb-5 line-clamp-3">
                  {blog.description}
                </p>

                <div className="flex items-center gap-3">

                  <a
                    href={`/blog/${blog.slug}`}
                    target="_blank"
                    className="bg-orange-500 hover:bg-orange-600 transition px-4 py-2 rounded-xl"
                  >
                    View
                  </a>

                  <button
                    onClick={() => {

                      setEditingBlog(blog);

                      setEditTitle(blog.title);

                      setEditSlug(blog.slug);

                      setEditDescription(
                        blog.description
                      );

                      setEditContent(
                        blog.content
                      );

                      setEditThumbnail(
                        blog.thumbnail
                      );

                      setEditCategory(
                        blog.category
                      );

                      setEditPublished(
                        blog.published
                      );

                    }}
                    className="bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-xl"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteBlog(blog.id)
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

      {/* EDIT MODAL */}
      {editingBlog && (

        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-5">

          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto">

            {/* TOP */}
            <div className="flex items-center justify-between mb-8">

              <div>

                <p className="text-orange-500 mb-2">
                  BLOG EDITOR
                </p>

                <h2 className="text-4xl font-bold">
                  Edit Blog
                </h2>

              </div>

              <button
                onClick={() =>
                  setEditingBlog(null)
                }
                className="text-3xl"
              >
                ✕
              </button>

            </div>

            <div className="space-y-4">

              {/* TITLE */}
              <input
                type="text"
                value={editTitle}
                onChange={(e) => {

                  const value =
                    e.target.value;

                  setEditTitle(value);

                  setEditSlug(
                    value
                      .toLowerCase()
                      .replaceAll(" ", "-")
                      .replace(/[^\w-]+/g, "")
                  );

                }}
                className="w-full p-4 bg-black border border-gray-800 rounded-2xl"
              />

              {/* SLUG */}
              <input
                type="text"
                value={editSlug}
                disabled
                className="w-full p-4 bg-black border border-gray-800 rounded-2xl opacity-70"
              />

              {/* DESCRIPTION */}
              <textarea
                value={editDescription}
                onChange={(e) =>
                  setEditDescription(
                    e.target.value
                  )
                }
                className="w-full p-4 bg-black border border-gray-800 rounded-2xl min-h-[120px]"
              />

              {/* CONTENT */}
              <textarea
                value={editContent}
                onChange={(e) =>
                  setEditContent(
                    e.target.value
                  )
                }
                className="w-full p-4 bg-black border border-gray-800 rounded-2xl min-h-[250px]"
              />

              {/* THUMBNAIL */}
              <input
                type="text"
                value={editThumbnail}
                onChange={(e) =>
                  setEditThumbnail(
                    e.target.value
                  )
                }
                className="w-full p-4 bg-black border border-gray-800 rounded-2xl"
              />

              {/* CATEGORY */}
              <input
                type="text"
                value={editCategory}
                onChange={(e) =>
                  setEditCategory(
                    e.target.value
                  )
                }
                className="w-full p-4 bg-black border border-gray-800 rounded-2xl"
              />

              {/* PUBLISHED */}
              <label className="flex items-center gap-3">

                <input
                  type="checkbox"
                  checked={editPublished}
                  onChange={(e) =>
                    setEditPublished(
                      e.target.checked
                    )
                  }
                />

                <span>
                  Published
                </span>

              </label>

              <button
                onClick={updateBlog}
                className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-2xl"
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