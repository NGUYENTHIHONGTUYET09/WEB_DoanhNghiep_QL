import DefaultLayout from "../Layout/default"
import Home from "../Page/Home"
import NoPage from "../Page/NoPage"
import Login from "../Page/Login/Login"
import Notification from "../Page/Notification/Notification"
import paths from "./path"
import Meeting from "../Page/Metting/Meeting"
import { Form } from "../Page/Form/Form"
import User from "../Page/Users/User"


export const routes = [
    {
        name: "login",
        page: <Login />,
        path: paths.login,
        exact: true,
    },
    {
        name: "home",
        page: <DefaultLayout><Home /></DefaultLayout>,
        path: paths.home,
        exact: true,
    },
    {
        name: "notification",
        page: <DefaultLayout><Notification /></DefaultLayout>,
        path: paths.notification,
        exact: true,
    },
    {
        name: "meeting",
        page: <DefaultLayout><Meeting /></DefaultLayout>,
        path: paths.meeting,
        exact: true,
    },
    {
        name: "form",
        page: <DefaultLayout><Form /></DefaultLayout>,
        path: paths.Form,
        exact: true,
    },
    {
        name: "user",
        page: <DefaultLayout><User /></DefaultLayout>,
        path: paths.users,
        exact: true,
    },
    {
        name: "noPage",
        page: <DefaultLayout><NoPage /></DefaultLayout>,
        path: paths.noPage,
        exact: true,
    }
]