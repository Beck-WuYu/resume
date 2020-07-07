import React from 'react';
import { Row, Col, Card, Avatar } from 'antd';
import userLogo from '@css/beckwu.png'
//import MainLayout from  '@component/MainLayout'
import { GithubOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
const { Meta } = Card;

export default class Self extends React.Component {
    render() {
        return (
            <div className="self-main">
                <Card
                    style={{ width: 800 }}
                    actions={[
                        <GithubOutlined key="github" onClick={() => { window.open("https://github.com/Beck-WuYu") }} />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        avatar={<Avatar src={userLogo} />}
                        title="吴宇"
                        style={{ fontSize: "16px" }}
                        description={<>
                            <Row align={"middle"} gutter={[24, 10]}>
                                <Col span={12} >学校 : 成都信息工程大学</Col>
                                <Col span={12} >专业 : 2011级地理信息系统/本科</Col>
                            </Row>
                            <Row align={"middle"} gutter={[24, 10]}>

                                <Col span={12} >公司 : 腾讯 </Col>
                                <Col span={12} >岗位 : Web前端高级工程师</Col>
                            </Row>
                            <Row align={"middle"} gutter={[24, 10]}>
                                <Col span={12} >联系方式 : 18615722457</Col>
                                <Col span={12} >电子邮箱 : 574196906@qq.com</Col>
                            </Row>
                            <Row align={"middle"} gutter={[24, 0]}>
                                <Col span={24} >
                                    <Card title="技能" bordered={false} style={{ width: "100%", fontSize: "16px" }} headStyle={{ padding: 0 }} bodyStyle={{ padding: 0 }}>
                                        <p>1. HTML： 基本规范和常⻅标签,熟悉HTML5新标签特性和语义化规范以及 CSS3样式使⽤。</p>
                                        <p>2. JavaScript: ES5、ES6、ES7</p>
                                        <p>3. 浏览器：浏览器缓存机制、跨域原理、以及常见安全漏洞。</p>
                                        <p>4. 前端工程化： 打包构建化工具webpack 、gulp等。</p>
                                        <p>5. 常用框架及其原理： jQuery、Zepto、React、 Redux、React-Router、Redux-Saga、Redux-Thunk、Redux-Form。</p>
                                        <p>6. 语言： JavaScript、Java、Node、PhP、TypeScript。</p>
                                        <p>7. 自研轻量级node框架TBN</p>
                                        <p>8. 其他： Liunx、Nginx、 Filddler。</p>
                                    </Card>
                                </Col>

                            </Row>
                            <Row align={"middle"} gutter={[24, 0]}>
                                <Col span={24} >
                                    <Card title="工作经历" bordered={false} style={{ width: "100%", fontSize: "16px" }} headStyle={{ padding: 0 }} bodyStyle={{ padding: 0 }}>
                                        <p style={{ fontWeight: 500 }}>2015.12 - 至今</p>
                                        <p>承担QQ互联官网、QQ内嵌web、腾讯文档、腾讯云大数据官网控制台、腾讯云大数据运管系统等产品研发。</p>
                                    </Card>
                                </Col>
                            </Row>
                        </>}
                    />
                </Card>
            </div>
        )
    }
}


