import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Layout } from 'antd';
import {
    Routes,
    Route,
} from "react-router-dom";
import Home from "../pages/Home";
import Customer from "../pages/Customer";
import Error404Page from '../pages/errorPages/404_page';
// import routes from './routes';
// import FrontendAuth from './FrontendAuth';

const { Content } = Layout;
export default function Router() {
    const GetRoutes = () => {
        const routes = useRoutes([
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/customer',
                element: <Customer />
            },
            {
                path: '*',
                element: <Error404Page />
            }
        ])
        return routes
    }

    return (
        <Content
            style={{
                margin: 0,
                minHeight: 360,
                backgroundColor: "#fff",
            }}
        >
            {
                
            }
            <GetRoutes />
            {/* <FrontendAuth routerConfig={routes} /> */}
        </Content>
    );
}
