import Link from "next/link";

export default function HomePage() {

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10 text-center">

      <h1 className="text-7xl font-bold mb-6">
        Portfolio Engine
      </h1>

      <p className="text-gray-400 text-xl max-w-2xl mb-10">
        Create dynamic portfolio websites with
        multiple templates, admin dashboard,
        reusable sections, and full control.
      </p>

      <div className="flex gap-4">

        <Link
          href="/login"
          className="bg-orange-500 px-8 py-4 rounded-2xl"
        >
          Login
        </Link>

        <Link
          href="/masum"
          className="bg-gray-800 px-8 py-4 rounded-2xl"
        >
          View Demo Portfolio
        </Link>

      </div>

    </main>
  );
}