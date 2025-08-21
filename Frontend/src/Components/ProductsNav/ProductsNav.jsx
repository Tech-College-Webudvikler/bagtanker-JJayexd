import { NavLink } from "react-router-dom";
import { useCategories } from "../../Context/CategoriesContext.jsx";

export const ProductsNav = () => {
    console.log("HEJ");
    const { categories } = useCategories();
    console.log("Categories:", categories);

  return (
    <nav className="bg-gray-800 text-white">
      <ul className="flex justify-center space-x-8 py-4">
        {categories
          .map((cat) => (
            <li key={cat.id}>
              <NavLink
                to={`/${cat.slug}`}
                className={({ isActive }) =>
                  `uppercase hover:text-yellow-500 ${
                    isActive ? "text-yellow-500 font-bold" : ""
                  }`
                }
              >
                {cat.title}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
}
