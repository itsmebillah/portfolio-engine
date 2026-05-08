"use client";

type Props = {
  active: string;
  setActive: (value: string) => void;
};

export default function AdminSidebar({
  active,
  setActive,
}: Props) {

  const menus = [
    "dashboard",
    "profile",
    "projects",
    "skills",
    "certificates",
    "blogs",
    "appearance",
  ];

  return (
    <div className="w-full md:w-[280px] bg-gray-900 border-r border-gray-800 min-h-screen p-6">

      <div className="mb-10">

        <p className="text-orange-500 mb-2">
          CLIENT PANEL
        </p>

        <h2 className="text-4xl font-bold">
          Dashboard
        </h2>

      </div>

      <div className="space-y-3">

        {menus.map((menu) => (

          <button
            key={menu}
            onClick={() =>
              setActive(menu)
            }
            className={`w-full text-left px-5 py-4 rounded-2xl capitalize transition ${
              active === menu
                ? "bg-orange-500 text-white"
                : "bg-black hover:bg-gray-800"
            }`}
          >
            {menu}
          </button>

        ))}

      </div>

    </div>
  );
}