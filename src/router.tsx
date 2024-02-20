import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages";

export const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '*', element: <div>Error</div> },
]);