import { createBrowserRouter } from "react-router-dom";
import room from "./Components/rooms";
import meals from "./Components/rooms";
import App  from "./App";

const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
    },

    {
        path:'/room',
        element: <room/>,
    },

    {
        path:'/meals',
        element: <meals/>
    }

]);

export default router;