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
      } absolute pt-6 pb-4 text-center font-semibold w-[100%] dark_shadow bg-[#FBFEFD] dark:bg-[#1D2521] z-50`}
    >
      <div className="flex justify-center">
        <ul className="space-y-4">
          <li className="">
            <Link href={"#"}>Home</Link>
          </li>
          <li>
            <Link href={"#"}>About</Link>
          </li>
          <li>
            <Link href={"#"}>Services</Link>
          </li>
          <li>
            <Link href={"#"}>Menu</Link>
          </li>
          <li>
            <Link href={"#"}>Contact us</Link>
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
