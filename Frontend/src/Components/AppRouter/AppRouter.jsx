import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../../Pages/LoginPage/LoginPage"
export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    )
}