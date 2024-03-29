import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages";
import { Login } from "./pages/login";
import { Singup } from "./pages/singup";

export const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    {path: '/login', element: <Login />},
    {path: '/signup', element: <Singup />},
    { path: '*', element: <div>Error</div> },

]);