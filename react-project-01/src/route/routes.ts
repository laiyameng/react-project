import Home from "../pages/Home";
import Customer from "../pages/Customer";
import Error404Page from '../pages/errorPages/404_page';

const routes: object = [
    {
        path: '/home',
        element: Home
    },
    {
        path: '/customer',
        element: Customer
    },
    {
        path: '*',
        element: Error404Page
    }
]

export default routes;