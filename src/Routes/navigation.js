//para que solo se compile la pagina en la que el usuario se encuentra
import { lazy } from "react";
import Login from "../Pages/Login.jsx"
/*const DynamicImport = (param) => {
    lazy(() => import(`./../Components/${param}`));
}*/

const Home = lazy(() => import("../Pages/Home"));
const DentistDetails = lazy(() => import("../Pages/DentistDetails"));
const Favs = lazy(() => import("../Pages/Favs"));
const Contact = lazy(() => import("../Pages/Contact"));
const Error = lazy(() => import("../Pages/Error"));

export const navigation = [
    {
        id: 1,
        path: "/home",
        Element: Home,
    },
    {
        id: 2,
        path: "/home/dentist/:id",
        Element: DentistDetails,
    },
    {
        id: 3,
        path: "/favs",
        Element: Favs,
    },
    {
        id: 4,
        path: "/contact",
        Element: Contact,
    },
    {
        id: 5,
        path: "*",
        Element: Error,
    }
];

export {Login};

//login no va aca