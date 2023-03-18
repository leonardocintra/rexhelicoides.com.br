import Link from "next/link";
import { useState } from "react";
import { GiLightningHelix } from "react-icons/gi";
import Logo from "../home/Logo";
import MenuHeaderLink from "./MenuHeaderLink";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#14213b] sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <Link href="/" className="">
            <Logo />
          </Link>
        </div>
        <div className="sm:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule={"evenodd"}
                  d="M19.293 4.293a1 1 0 0 0-1.414 0L12 10.586 5.707 4.293a1 1 0 1 0-1.414 1.414L10.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414L12 13.414l6.293 6.293a1 1 0 0 0 1.414-1.414L13.414 12l6.293-6.293a1 1 0 0 0 0-1.414z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule={"evenodd"}
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={`px-2 pb-4 sm:flex sm:p-0 ${isOpen ? "block" : "hidden"}`}
      >
        <MenuHeaderLink href="/" descricao="Início" />
        <MenuHeaderLink href="/equipe" descricao="Equipe" />
        <MenuHeaderLink href="/contato" descricao="Contato" />
      </nav>
    </header>
  );
};

export default Header;
