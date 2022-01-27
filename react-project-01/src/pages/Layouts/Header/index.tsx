import React from 'react';
import { Layout ,Breadcrumb} from 'antd';
import styles from './index.module.less';

const { Header } = Layout;

export default () => {
    return (<Header className={styles.background}>
        <div>
        <Breadcrumb style={{ margin: '16px 10px' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </div>
    </Header>);
}
