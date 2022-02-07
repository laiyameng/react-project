import React from 'react';
import { useHistory } from "react-router-dom";
import { Layout, Popover, Button } from 'antd';
import styles from './index.module.less';

const { Header } = Layout;

export default () => {
    const history = useHistory();
    const logout = () => {
        history.push('/login')
    }
    const content = (
        <ul className={styles['header-user']} style={{ margin: 0 }}>
            <li >个人中心</li>
            <li onClick={logout}>退出登录</li>
        </ul>
    )
    return (
        <Header className={styles.background}>
            <div className={styles.header}>
                <div className={styles['header-name']}>
                    CSMS
                    {/* <span className={styles.line}></span>
                    {"11"} */}
                </div>
                <div>
                    <Popover content={content}>
                        admin
                    </Popover>
                </div>
            </div>
        </Header>);
}
