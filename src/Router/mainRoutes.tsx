import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/Common/Layout"
import HomeSceen from "../page/HomeSceen"
import REPORTS from "../page/SETTING"

import SETTING from "../page/SETTING"

import Reviews from "../page/Reviews"
import Products from "../page/Products"

export const mainRouter = createBrowserRouter([{
    element:<Layout/>,
    children:[{
     
        path:"/",
        element:<HomeSceen/>,
        index: true,
    },
    {
        path:"/setting",
        element:<SETTING/>,
        index: true,
    },
    {
        path:"/products",
        element:<Products/>,
        index: true,
    },
    {
        path:"/reviews",
        element:<Reviews/>,
        index: true,
    },

    {
        path:"/reports",
        element:<REPORTS/>,
        index: true,
    },
]
}])