//para que solo se compile la pagina en la que el usuario se encuentra
import { lazy } from "react";

const DynamicImport = (param) => {
    lazy(() => 
        import(`./${param.toLowerCase()}/${param}.jsx`),
    );
};


export const navigation = [
    {
        id: 1,
        path: "/home",
        Element: DynamicImport("Home"),
    },
    {
        id: 2,
        path: "home/dentist/:id",
        Element: DynamicImport("Dentist"),
    },
    {
        id: 3,
        path: "favs",
        Element: DynamicImport("Favs"),
    },
    {
        id: 2,
        path: "contact",
        Element: DynamicImport("Contact"),
    },
];

//login y error no van aca