import React from 'react';
import { connect } from 'react-redux'
import { Layout, Menu, Breadcrumb, Avatar } from 'antd';
import { ReactReduxContext } from 'react-redux'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import userLogo from '@css/beckwu.png'
import { withRouter} from 'react-router-dom'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class MainLayout extends React.Component {
    static contextType = ReactReduxContext;
    componentDidMount = () => {
        console.log(this.context);
    }
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
    render() {
        const {curMenu} = this.props;
        return (
            <Layout className="layout" style={{ height: "100%" }}>
                <Header>
                    <Avatar size="large" src={userLogo} />
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['self']}
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
                           {this.props.children}
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
})(withRouter(MainLayout))