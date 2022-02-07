import React from 'react';
import { Layout } from 'antd';
import {
    Switch,
} from "react-router-dom";
import routes from './routes';
import FrontendAuth from './FrontendAuth';

const { Content } = Layout;
export default function Router() {
    return (
        <Content
            style={{
                margin: 0,
                minHeight: 360,
                backgroundColor: "#fff",
            }}
        >
            <Switch>
                <FrontendAuth routerConfig={routes} />
            </Switch>
        </Content>
    );
}
