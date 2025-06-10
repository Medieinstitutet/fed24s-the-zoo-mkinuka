import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Animals } from "./pages/Animals";
import { Animal } from "./pages/Animal";
import { Home } from "./pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "Animals",
                element: <Animals/>
            },
            {
                path: "Animal/:id",
                element: <Animal/>
            }

        ]

    }
]) 