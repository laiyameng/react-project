import { AnyARecord } from 'dns';
import { Route } from 'react-router-dom';

export default (props: any) => {
    const { routerConfig, location } = props;
    const { pathname } = location;
    const targetRouter = routerConfig.find(
        (item: any) => pathname.indexOf(item.path) !== -1,
    );
    const element: string = targetRouter.element
    const path: string = targetRouter.path

    if (targetRouter) {
        return (
            <Route path={path} element={element} />
        );
    }
  return <Route path="/login" />;

};
