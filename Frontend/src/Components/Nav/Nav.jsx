/** Sådan laver du en note */
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Login", path: "/login" }
    ]

    return (
        <nav className="flex">
            <h1 className="text-3xl font-bold">SIDE</h1>
            {/** Burger-menu for Mobil */}
            <div className="sm:hidden ml-auto">
                <button
                className="flex items-center justify-center h-8 w-8 mt-1"
                onClick={() => setIsOpen(!isOpen)}
                >
                {isOpen ? (
                    <i className="fa-solid fa-xmark text-xl" />
                ) : (
                    <i className="fa-solid fa-bars text-xl" />
                )}
                </button>
            </div>
            
            {/** Nav for Desktop */}
            <ul className="hidden md:flex space-x-1 ml-auto">
                {navItems.map((item) => (
                    <li key={item.path}>
                    <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                        `block px-4 py-2 ${
                            isActive ? "bg-gray-100" : ""
                        }`
                        }
                    >
                        {item.name}
                    </NavLink>
                    </li>
                ))}
            </ul>

            {/** Nav for Mobil */}
            {isOpen && (
                <div className="">
                    <ul className="md:hidden">
                    {navItems.map((item) => (
                        <li key={item.path}>
                        <NavLink
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                            `block px-4 py-2 ${
                                isActive ? "bg-gray-100" : ""
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
    )
}