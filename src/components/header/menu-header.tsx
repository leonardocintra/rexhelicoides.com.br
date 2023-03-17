import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-800 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <Link href="/" className="text-white text-xl font-bold leading-none">
            Rex - Helicoides
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
        <Link
          href="/"
          className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700"
        >
          Início
        </Link>
        <Link
          href="/equipe"
          className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2"
        >
          Equipe
        </Link>
        <Link
          href="/contato"
          className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2"
        >
          Contato
        </Link>
      </nav>
    </header>
  );
};

export default Header;
