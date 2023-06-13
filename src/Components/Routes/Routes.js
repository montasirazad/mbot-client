import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [{
            path: '/login',
            element: <LogIn />
        },
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/signup',
            element: <SignUp />
        }]
    }
])

export default router;