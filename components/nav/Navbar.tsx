"use client";
import { IoMenuOutline } from "react-icons/io5";
import { useModal } from "@/context/ModalContext";
import Link from "next/link";
import ThemeToggle from "../theme/theme_toggle";

const Navbar = () => {
  const { toggleModal } = useModal();
  return (
    <nav className="py-3 md:py-6 fixed top-0 w-[100%] normal_text bg-[#FBFEFD] dark:bg-[#1D2521] px-4 dark_shadow flex-center z-50">
      <div className="max-w-[1024px] flex-between bd-container">
        <h3 className="font-semibold">Tasty</h3>
        <IoMenuOutline
          className="text-[20px] md:hidden"
          onClick={() => toggleModal()}
        />
        <div className="md:flex items-center gap-5 hidden">
          <ul className="flex items-center gap-10">
            <li className="">
              <Link href={"#"}>Home</Link>
            </li>
            <li>
              <Link href={"/#about"}>About</Link>
            </li>
            <li>
              <Link href={"/#services"}>Services</Link>
            </li>
            <li>
              <Link href={"/#menu"}>Menu</Link>
            </li>
            <li>
              <Link href={"/#contact"}>Contact us</Link>
            </li>
          </ul>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
