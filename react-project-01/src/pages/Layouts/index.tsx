import { Layout } from 'antd';
import Header from './Header';
import SiderMenu from './SiderMenu';
import Router from '../../route';

import styles from './index.module.less';

const { Footer} = Layout;

export default () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiderMenu />
      <Layout className={styles.site}>
        <Header />
        <Layout style={{ padding: 24 }}>
          <Router />
        </Layout>
        <Footer style={{ textAlign: 'center' }}>Web Design ©2022 Created by Timo</Footer>
      </Layout>
    </Layout>
  );
}
