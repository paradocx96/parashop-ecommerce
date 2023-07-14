import {createBrowserRouter,} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Cart from "../pages/Cart";
import Home from "../pages/Home";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/cart",
        element: <Cart/>,
        errorElement: <ErrorPage/>,
    }
]);

export default Routes;
