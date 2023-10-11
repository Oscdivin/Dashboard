import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/Common/Layout"
import HomeSceen from "../page/HomeSceen"
import REPORTS from "../page/SETTING"

import SETTING from "../page/SETTING"
import Statistics from "../page/Statistics"
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
        path:"/statistics",
        element:<Statistics/>,
        index: true,
    },
    {
        path:"/reports",
        element:<REPORTS/>,
        index: true,
    },
]
}])