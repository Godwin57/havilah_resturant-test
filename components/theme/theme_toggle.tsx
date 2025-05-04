"use client";

import { useTheme } from "next-themes";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme === "dark" && (
        <MdOutlineWbSunny onClick={() => setTheme("light")} />
      )}
      {theme === "light" && <IoMoonOutline onClick={() => setTheme("dark")} />}
    </div>
  );
}
