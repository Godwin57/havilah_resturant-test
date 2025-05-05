"use client";
import Link from "next/link";
import ThemeToggle from "../theme/theme_toggle";
import { useModal } from "@/context/ModalContext";

const Dropdown = () => {
  const { isOpen } = useModal();
  return (
    <div
      className={`${
        !isOpen && "hidden"
      } fixed pt-6 pb-4 top-10 right-0 text-center normal_text font-semibold w-[100%] dark_shadow bg-[#FBFEFD] dark:bg-[#1D2521] z-50 px-4 rounded-b-3xl`}
    >
      <div className="flex justify-center">
        <ul className="space-y-4">
          <li className="">
            <Link href={"/#"}>Home</Link>
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
      </div>
      <div className="absolute top-4 right-1 mt-4 mr-4">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Dropdown;
