import { Route, Redirect } from 'react-router-dom';
import Home from "../pages/Home";

export default (props: any) => {
    const { routerConfig, location } = props;
    const { pathname } = location;
    const targetRouter = routerConfig.find(
        (item: any) => pathname.indexOf(item.path) !== -1,
    );
    if (pathname === '/') {
        return (
            <Route path="/" component={Home} />
        )
    }
    if (targetRouter) {
        return (
            <Route path={targetRouter.path} component={targetRouter.component} />
        );
    }
    return <Redirect to="/404" />;
};
