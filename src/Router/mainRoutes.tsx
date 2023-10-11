import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/Common/Layout"
import HomeSceen from "../page/HomeSceen"
import Form from "../page/Form"
import SAVED from "../page/SAVED"
import REPORTS from "../page/REPORTS"
import FAVORITES from "../page/FAVORITES"

export const mainRouter = createBrowserRouter([{
    element:<Layout/>,
    children:[{
     
        path:"/",
        element:<HomeSceen/>,
        index: true,
    },
    {
        path:"/form",
        element:<Form/>,
        index: true,
    },
    {
        path:"/serices",
        element:<REPORTS/>,
        index: true,
    },
    {
        path:"/Saved",
        element:<SAVED/>,
        index: true,
    },
    {
        path:"/Favorites",
        element:<FAVORITES/>,
        index: true,
    },
    {
        path:"/reports",
        element:<REPORTS/>,
        index: true,
    },
]
}])