"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid rendering on the server

  return (
    <div>
      {theme === "dark" && (
        <MdOutlineWbSunny onClick={() => setTheme("light")} />
      )}
      {theme === "light" && <IoMoonOutline onClick={() => setTheme("dark")} />}
    </div>
  );
}
