import { NavLink } from "react-router-dom";
import { useState } from "react";

export const NavBurger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Forside", path: "/" },
    { name: "Produkter", path: "/produkter" },
    { name: "Nyheder", path: "/nyheder" },
    { name: "Kontakt", path: "/kontakt" },
    { name: "Login", path: "/login" },
  ];

  return (
    <nav className="flex flex-col">
      <div className="flex items-center">
        <h1 className="ml-1 my-1 text-3xl font-bold">BAGTANKER</h1>
        <div className="ml-auto">
          <button
            className="flex h-8 w-8"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <i className="fa-solid fa-xmark text-xl md:absolute" />
            ) : (
              <i className="fa-solid fa-bars text-xl md:absolute" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col md:fixed top-0 right-60 w-1/5">
          <ul>
            {navItems.map((item) => (
              <li 
                className="p-4 mb-2 w-[128px] bg-red-500 ml-auto" 
                key={item.path}
              >
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-center ${
                      isActive ? "" : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
