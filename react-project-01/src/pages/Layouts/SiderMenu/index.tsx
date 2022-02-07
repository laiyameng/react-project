import { useState, useEffect } from 'react';
import {  useHistory,useLocation } from "react-router-dom";
import {
    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Logo from '../../../assets/img/logo.png';
import LogoSmall from '../../../assets/img/logo-small.png';

import styles from './index.module.less';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default () => {
    const rootSubmenuKeys = ['/home', '/'];
    interface menuListParam {
        title: string;
        path?: string;
        key: string;
        icon?: any;
        // 是否存在子菜单
        isSubmenu?: boolean;
        children?: menuListParam[];
    }
    // 菜单列表
    const menuList: menuListParam[] = [
        {
            title: '首页',
            path: '/home',
            key: '/home',
            icon: DesktopOutlined,
            // 是否存在子菜单
            isSubmenu: false,
        },
        {
            title: '客户管理',
            path: '/customer',
            key: '/customer',
            icon: UserOutlined,
            // 是否存在子菜单
            isSubmenu: false,
        },
        {
            title: '统计',
            path: '/statis',
            key: '/statis',
            icon: PieChartOutlined,
            // 是否存在子菜单
            isSubmenu: true,
            children: [
                {
                    title: '统计一',
                    path: '/statis/one',
                    key: '/statis/one',
                    children: [],
                },
                {
                    title: '统计二',
                    path: '/statis/two',
                    key: '/statis/two',
                    children: [],
                }
            ]
        },
    ]

    const [collapsed, setCollapsed] = useState(false);
    // const [selectedName, setSelectedName] = useState("");
    // const [openKeys, setOpenKeys] = useState([]);
    // const onOpenChange = (keys:any) => {
    //     const latestOpenKey = keys.find((key:any) => openKeys.indexOf(key as never) === -1);
    //     if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    //         setOpenKeys(keys);
    //     } else {
    //         setOpenKeys(latestOpenKey as never ? [latestOpenKey] as never : []);
    //     }
    // };

    const history = useHistory();
    // 刷新页面，选中导航菜单项
    // const location = useLocation();
    // useEffect(() => {
    //     menuList.forEach((item) => {
    //         if (location.pathname.match(item.key)) {
    //             // SubMenu 菜单项情况
    //             if (item.children) {
    //                 setOpenKeys([item.key] as never);
    //             }
    //             setSelectedName(location.pathname);
    //         }
    //     });
    // }, [location.pathname]);

    const clickMenuItem = (value: any) => {
        history.push(value.path)
    }

    const onCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (<div style={{ backgroundColor: "#001529" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            {collapsed ?
                (<div className={styles['logo-small']} >
                    <img src={LogoSmall} alt="LogoSmall" />
                </div>) :
                (<div className={styles.logo} >
                    <img src={Logo} alt="Logo" />
                </div>)
            }
                {/* openKeys={openKeys}
                onOpenChange={onOpenChange}
                selectedKeys={[selectedName]} */}
            <Menu
                theme="dark"
                defaultSelectedKeys={['1']}
                mode="inline" >
                {menuList.map((item) => item.isSubmenu ? (
                    <SubMenu key={item.key} icon={<item.icon />} title={item.title}>
                        {item.children !== undefined && item.children.map((child) =>
                            <Menu.Item key={child.key} onClick={() => clickMenuItem(child)}>
                                {child.title}
                            </Menu.Item>
                        )}
                    </SubMenu>
                ) : (
                    <Menu.Item key={item.key} icon={<item.icon />} onClick={() => clickMenuItem(item)}>
                        {item.title}
                    </Menu.Item>
                ))}
            </Menu>
        </Sider>
    </div >)

}