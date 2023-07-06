import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import UserDashBoard from "../UserDashBoard/UserDashBoard";
import NewPost from "../UserDashBoard/NewPost/NewPost";
import WebsiteList from "../UserDashBoard/WebsiteList/WebsiteList";

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
    },
    {
        path: '/user/dashboard',
        element: <UserDashBoard />,
        children: [{
            path: '/user/dashboard',
            element: <NewPost />
        },
        {
            path: '/user/dashboard/website-list',
            element: <WebsiteList />
        }]
    }
])

export default router;