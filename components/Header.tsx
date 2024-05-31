import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosGlobe, IoMdPerson, IoMdMenu, IoMdClose } from "react-icons/io";
import Head from "next/head";
import Link from "next/link";

const menus = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Articles", path: "/articles" },
  { name: "Forms", path: "/forms" },
  { name: "Contact Us", path: "/contacts" },
];

const Header: React.FC = () => {
  const [active, setActive] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSetActive = (index: number) => {
    setActive(index);
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative flex w-full items-center justify-between px-5 py-4 bg-black text-white md:px-10">
      <Head>
        <title>Jalaj P Patel</title>
      </Head>
      <div className="flex items-center gap-2 font-medium tracking-[4px]">
        <IoIosGlobe className="text-xl" />
        <span>42LP Yuva Mandal Patan</span>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen ? <IoMdClose className="text-2xl" /> : <IoMdMenu className="text-2xl" />}
        </button>
      </div>
      <ul className={`fixed top-0 left-0 z-50 h-full w-full flex flex-col items-center justify-center bg-black text-lg transition-transform transform ${isMenuOpen ? "translate-y-0" : "-translate-y-full"} md:relative md:top-auto md:left-auto md:h-auto md:w-auto md:flex-row md:bg-transparent md:text-xs md:translate-y-0`}>
        <div className="absolute top-4 right-4 md:hidden">
          <button onClick={toggleMenu}>
            <IoMdClose className="text-2xl" />
          </button>
        </div>
        {menus.map((menu, index) => (
          <motion.li
            layout
            key={index}
            className={`${
              active === index ? "border-b-2 border-b-yellow-500" : ""
            } my-2 md:my-0 cursor-pointer transition duration-300 ease-in-out hover:border-b-2 hover:text-yellow-500 md:mx-3`}
            onClick={() => handleSetActive(index)}
          >
            <Link href={menu.path}>
              {menu.name}
            </Link>
          </motion.li>
        ))}
        <div className="mt-5 md:mt-0 md:ml-6">
          <Link href="/login" passHref>
            <IoMdPerson className="text-lg cursor-pointer" />
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Header;
