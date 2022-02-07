import Home from "../pages/Home";
import Customer from "../pages/Customer";
import Error404Page from '../pages/errorPages/404_page';
import StatisOne from "../pages/Statis/StatisOne";
import StatisTwo from "../pages/Statis/StatisTwo";

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
        path: '/statis/one',
        component: StatisOne
    },
    {
        path: '/statis/two',
        component: StatisTwo
    },
    {
        path: '/404',
        component: Error404Page
    }
]

export default routes;