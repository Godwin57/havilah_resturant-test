"use client";
import { IoMenuOutline } from "react-icons/io5";
import { useModal } from "@/context/ModalContext";

const Navbar = () => {
  const { toggleModal } = useModal();
  return (
    <nav className="flex-between py-3 fixed top-0 w-[100%] bg-[#FBFEFD] dark:bg-[#1D2521]">
      <h3>Tasty</h3>
      <IoMenuOutline
        className="text-[20px] md:hidden"
        onClick={() => toggleModal()}
      />
    </nav>
  );
};

export default Navbar;
