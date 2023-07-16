import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import UserDashBoard from "../UserDashBoard/UserDashBoard";
import NewPost from "../UserDashBoard/NewPost/NewPost";
import WebsiteList from "../UserDashBoard/WebsiteList/WebsiteList";
import AddNewWebsite from "../UserDashBoard/AddNewWebsite/AddNewWebsite";
import EditWebsiteSetting from "../UserDashBoard/EditWebsiteSettings/EditWebsiteSetting";
import ManualPublish from "../UserDashBoard/ManualPublish/ManualPublish";

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
            element: <WebsiteList />
        }, {
            path: '/user/dashboard/new-post',
            element: <NewPost />
        },
        {
            path: '/user/dashboard/manual-publish',
            element: <ManualPublish />
        },
        {
            path: '/user/dashboard/add-new-website',
            element: <AddNewWebsite />
        }, {
            path: '/user/dashboard/edit-website-setting',
            element: <EditWebsiteSetting />
        }
        ]
    }
])

export default router;