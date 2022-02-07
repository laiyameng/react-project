import Home from "../pages/Home";
import Customer from "../pages/Customer";
import Error404Page from '../pages/errorPages/404_page';

const routes: object = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/customer',
        component: Customer
    },
    {
        path: '/404',
        component: Error404Page
    }
]

export default routes;