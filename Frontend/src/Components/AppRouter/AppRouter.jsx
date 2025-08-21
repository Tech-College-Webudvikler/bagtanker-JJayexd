import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../../Pages/LoginPage/LoginPage"
import { FrontPage } from "../../Pages/FrontPage/FrontPage"
import { Products } from "../Products/Products"
export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<FrontPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/produkter" element={<Products />} />
        </Routes>
    )
}