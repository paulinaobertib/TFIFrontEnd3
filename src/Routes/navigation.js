//para que solo se compile la pagina en la que el usuario se encuentra
import { lazy } from "react";

/*const DynamicImport = (param) => {
    lazy(() => import(`./../Components/${param}`));
}*/

const Home = lazy(() => import("./../Components/Home"));
const DentistDetails = lazy(() => import("./../Components/DentistDetails"));
const Favs = lazy(() => import("./../Components/Favs"));
const Contact = lazy(() => import("./../Components/Contact"));
const Error = lazy(() => import("./../Components/Error"));

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

//login no va aca