import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css'
import App from './components/FirstPage/App';
import Menu from './components/Menus/Menu';
import SubMenu from './components/Menus/SubMenu';
import Drinks from './components/Menus/Drinks';
import Details from './components/Menus/Details';
import Sourch from './components/Sourch/Sourch';
import Heritage from './components/Heritage/Heritage';
import Contact from './components/Contact/Contact';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/menu", element: <Menu />, children: [{ path: "/menu", element: <Drinks /> },
        { path: "/menu/:cat/:subcat", element: <SubMenu />, }]
    },
    {
        path: "/products/:seoId",
        element: <Details />
    },
    {
        path: "/sourcing",
        element: <Sourch />
    },
    {
        path: "/our-heritage",
        element: <Heritage />
    },
    {
        path: "/contact",
        element: <Contact />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);