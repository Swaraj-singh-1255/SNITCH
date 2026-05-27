import { createBrowserRouter } from "react-router";
import Register from "../features//auth/page/register";
import Login from "../features/auth/page/login";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <h1>Hello world</h1>,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    }
])