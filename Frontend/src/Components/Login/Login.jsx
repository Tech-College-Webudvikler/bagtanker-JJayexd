import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Context/AuthProvider";

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { loginData, setLoginData } = useAuth();
    const [ loading, setLoading ] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        const url = 'http://localhost:3000/api/auth/login';
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            // console.log(response);

            if (!response.ok) {
                toastr.error(Error, 'Login fejlet');
                throw new Error(`Login fejlet: ${response.status}`);
            }

            const result = await response.json();
            setLoginData(result);
            sessionStorage.setItem('accessToken', JSON.stringify(result.data));
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem('access_token');
        setLoginData('');
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="p-8 bg-gray-100 w-[300px] rounded">
            <h2 className="text-2xl font-bold mb-4 text-center">SIDE</h2>
                {!loginData ? (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="text-black-400 font-semibold">Email</label>
                            <input
                                type="email"
                                {...register("username", { required: "Email er påkrævet" })}
                                className="shadow-[0px_4px_4px_-2px_rgba(0,0,0,0.1)] w-full p-2 rounded"
                            />
                            {errors.username && <p className="text-red-500">{errors.username.message}</p>}
                        </div>

                        <div>
                            <label className="text-black-400 font-semibold">Password</label>
                            <input
                                type="password"
                                {...register("password", { required: "Password er påkrævet" })}
                                className="shadow-[0px_4px_4px_-2px_rgba(0,0,0,0.1)] w-full p-2 rounded"
                            />
                            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                        >
                            {loading ? "Logger ind..." : "Login"}
                        </button>
                    </form>
                ) : (
                    <div className="text-center">
                        <p>Logged in.</p>
                        <button
                            onClick={handleLogout}
                            className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
