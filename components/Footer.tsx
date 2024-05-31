import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const menus = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Articles", path: "/articles" },
  { name: "Forms", path: "/forms" },
  { name: "Contact Us", path: "/contacts" },
];

const Footer: React.FC = () => {
  const [active, setActive] = React.useState(0);

  const handleSetActive = (index: number) => {
    setActive(index);
  };

  return (
    <div className="fixed bottom-0 w-full flex flex-wrap items-center justify-between gap-2 px-3 py-2 text-xs font-medium uppercase opacity-90 bg-black text-white md:px-10">
      <ul className="flex flex-wrap items-center justify-center gap-2 text-[10px] md:gap-5">
        {menus.map((menu, index) => (
          <motion.li
            layout
            key={index}
            className={`${
              active === index ? "border-b-2 border-b-yellow-500" : ""
            } inline-block cursor-pointer transition duration-300 ease-in-out hover:border-b-2 hover:text-yellow-500`}
            onClick={() => handleSetActive(index)}
          >
            <Link href={menu.path}>
              {menu.name}
            </Link>
          </motion.li>
        ))}
      </ul>
      <div className="text-[10px] text-center md:text-right w-full md:w-auto mt-2 md:mt-0">
        <a href="https://www.instagram.com/jalaj_p_patel_42lp/" target="_blank" rel="noopener noreferrer">
          Created by Jalaj P Patel Dabhadi
        </a>
      </div>
    </div>
  );
};

export default Footer;
