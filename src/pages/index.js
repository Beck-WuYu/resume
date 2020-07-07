import React from 'react';
import { connect } from 'react-redux'
import { Layout, Menu, Breadcrumb, Avatar } from 'antd';
import { ReactReduxContext } from 'react-redux'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import userLogo from '@css/beckwu.png'
import { withRouter} from 'react-router-dom'
import Self from '../pages/self'
import Project from '../pages/project'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Main extends React.Component {
    menuChange = (item, key, keyPath, domEvent) => {
        let url;
        switch (key) {
            case "project":
                url = "/project"
                break;
            default:
                url = "/"
                break;
        }
        debugger;
        this.props.history.push(url);
    }
    getOpenKey = (pathname) => {
        let key;
        switch (pathname) {
            case "/project":
                key = 'project'
                break;
            default:
                key = 'self'
                break;
        }
        return key;
    }
    getContent = (key) => {
        switch (key) {
            case "project":
                return <Project/>
            default:
                return <Self/>
        }
    }
    render() {
        const {curMenu, location} = this.props;
        const {pathname}  = location;
        const key = this.getOpenKey(pathname);
        return (
            <Layout className="layout" style={{ height: "100%" }}>
                <Header>
                    <Avatar size="large" src={userLogo} />
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={[key]}
                            defaultOpenKeys={['sub']}
                            style={{ height: '100%', borderRight: 0 }}
                            onClick={({item, key, keyPath, domEvent}) => { this.menuChange(item, key, keyPath, domEvent) }}
                        >
                            <SubMenu key="sub" icon={<UserOutlined />} title={curMenu}>
                                <Menu.Item key="self">个人介绍</Menu.Item>
                                <Menu.Item key="project">项目经历</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px' }} >
                        <Content style={{ padding: '0 0px' }} className="site-layout-background">
                           {this.getContent(key)}
                        </Content>
                    </Layout>

                </Layout>
            </Layout>
        )
    }
}
export default connect((state) => {
    return {
        curMenu: state.app.curMenu,
    }
})(withRouter(Main))

