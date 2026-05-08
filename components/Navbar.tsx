"use client";

import { useEffect, useState } from "react";

export default function Navbar() {

  const [visible, setVisible] =
    useState(true);

  useEffect(() => {

    let timeout: any;

    const handleScroll = () => {

      setVisible(true);

      clearTimeout(timeout);

      timeout = setTimeout(() => {

        setVisible(false);

      }, 1200);

    };

    const handleMouseMove = (
      e: MouseEvent
    ) => {

      if (e.clientY < 100) {

        setVisible(true);

      }

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

    };

  }, []);

  return (

    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-24 opacity-0"
      }`}
    >

      <div className="flex justify-center pt-5">

        <nav className="flex items-center gap-7 md:gap-10 px-6 py-3 rounded-full border border-white/10 bg-black/10 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.3)]">

          <a
            href="#projects"
            className="text-sm tracking-wide text-gray-300 hover:text-orange-400 transition"
          >
            Projects
          </a>

          <a
            href="#skills"
            className="text-sm tracking-wide text-gray-300 hover:text-orange-400 transition"
          >
            Skills
          </a>

          <a
            href="#certificates"
            className="text-sm tracking-wide text-gray-300 hover:text-orange-400 transition"
          >
            Certificates
          </a>

          <a
            href="#contact"
            className="text-sm tracking-wide text-gray-300 hover:text-orange-400 transition"
          >
            Contact
          </a>

        </nav>

      </div>

    </header>

  );

}