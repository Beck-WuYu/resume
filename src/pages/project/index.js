import React from 'react';
import { connect } from 'react-redux'
import { Button } from 'antd';
import MainLayout from '@component/MainLayout'
import { Row, Col, Card, Avatar } from 'antd';

class Project extends React.Component {
    render() {
        const { name, dispatch, age } = this.props;
        return (
            <div className="site-card-wrapper">
                <Row gutter={[16, 20]}>
                    <Col span={24}>
                        <Card title="QQ互联官网改版(2015.12 - 2016.9)" bordered={false}>
                            <p>前端技术栈： React + Redux + React-Router + redux-thunk + webpack</p>
                            <p>处于日常运营需求，QQ互联官网在在老版页面上做全新交互视觉改版与模块升级, 技术栈由原有
                            Jquery升级到 React + Redux + React Router + + webpack。模块动画采用CSS3
                            animation。重写应用管理，增加个人资质、公司资质审核、QQ-AR等模块。同时维护QQ内
                            嵌web页与QQ分享JSSDK包。</p>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card title="腾讯文档（2016.9 - 2018.6）" bordered={false}>
                            <p>前端技术栈： React + canvas + axios + webpack + sentry</p>
                            <p>后端技术栈： node + tbn（自研基于koa）+ tbncli</p>
                            <p>主要负责腾讯文档PC端文档功能与移动端表格性能模块开发工作、定制协同解决方案与冲突处理规则。</p>
                            <p>1.通信模块采用socket技术建立数据通道长连接，接收来自服务器端push数据与本地pull数据。</p>
                            <p>2.首屏耗时优化：数据直出，webpack分模块打包，静态资源文件放到CDN、动态脚本按需加载以及利用浏览器缓存，优化首屏页面显示时间。</p>
                            <p>3.离线工作：利用浏览器的Service_Worker,indexDB等技术实现文档表格离线编辑。</p>
                            <p>4.成本优化：利用changeset算法（z:x|y+1*1|内容）描述一次change变化，达到最大化压缩文档属性与内容数据，同时在100次change时生成一次快照，减少后台存储成本。</p>
                            <p>5.性能优化：解决移动端项目的性能痛点，在小程序与移动端内嵌webview中，大数据量表格性能存在瓶颈，主要表现在以下几点，dom结构复杂层次过深，要渲染tr，td节点多，携带属性数量大。采用canvas重构表格的绘制，减少渲染dom节点。屏幕外预渲染10-20行表格数据，提前计算表格每行行高等数据。去掉原生滚动，采用css3 transaltion，手动控制滚动位置。</p>
                            <p>6.全方位的监控： js异常监控（sentry上报）、CGI错误率、CGI耗时、页面耗时、功能埋点等</p>
                            <p>7.强大数据转换： 对微软word excel，谷歌在线docs的word excel做数据解析与转换，让其他产品可以与腾讯文档无缝的做导入与导出</p>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card title="腾讯云大数据官网（2018.6 - 至今）" bordered={false}>
                            <p>前端技术栈： React + Redux +React-Router + TCFF（自研框架） + webpack + eCharts</p>
                            <p>后端技术栈： php + php-fpm + CodeIgniter</p>
                            <p>大数据组件产品模块UI同质化严重，封装一个常用React组件库包括基本组件和一些高阶组件，便于团队可以快速迭代开发，
                                提升开发效率。使用redux中间件redux-saga去处理副作用（服务器请求和一些异步任务）,redux-form进行本地表单和服务器端异步验证。
                                编写原生的fetch与服务器进行数据交互，为了保证浏览器兼容性使用babel转译一些高级API。为了统一团队编码规范使用eslint强制做语法检验。
                                因为是大数据产品使用echart、canvas等去做数据可视化。对开发者服务这块我们在微软的开源编辑器monaco基础上做二次定制化开发一套sql编辑器
                                。php这块主要做sso登录服务，入参合法性检验，安全性验证（crsf攻击，xss漏洞过滤。接口服务的转发。</p>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card title="微服务node框架TBN" bordered={false}>
                            <p>技术栈： node + koa2</p>
                            <p>TBN 是一款基于koa2搭建的node框架。它诞生的原因是由于大数据团队项目多，项目中大多使用node做中间层，去做一些身份验证与请求转发等模版化的需求。团队却没有一个统一的框架去做这套模版的事情，简化我们人工做的事情，提升开发效率。
                                所以19年初TBN诞生了。TBN的设计理念是灵活可配置化的架构，TBN采用MVC设计模式，有2个核心包。TBN-Core包在原有koa2的IO能力上扩展了application与context类，使用log4js做日志系统，封装http/https请求，支持跨域，功能动态可配置化。使用pm2做node进程管理。
                                另外一个包TBN-Cli，是一个TBN命令行工具。使用commander编写。可以全局安装（tnpm install -g tbn），一行命令（tbn init [name]）可以生成TBN样板代码,帮助新人可以快速上手搭建一个基于tbn的样板工程。</p>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card title="TCFF" bordered={false}>
                            <p>技术栈： node + koa2</p>
                            <p>TCFF是一个前端应用型框架，使用Plugin + ReduxSaga + Flow（一组generator函数）结合React方式
                            式来简化工程项目开发。ReduxSaga负责监听异步数据流，然后交给对应的Flow函数处理。
                            Flow函数可以以同步的方式编写处理异步数据，然后组织数据修改state树。state树的改变触
                            发对应的组件更新。TCFF为了简化我们开发流程提升研发效率还设计一套Plugin。不同的Plugin具有不同的能力，且Plugin是非常灵活的，采
                            用可拔插的方式，可以随时load和unload。</p>
                            <p>reduerPlugin：传统的redux开发会编写各种reducer函数，reduerPlugin可以让我解放出来，reducerPlugin采用babel预设的理念，预设几种常用的reducer方法，change（数据变更）、replace（数据替换）、reset（数据重置）等。</p>
                            <p>servicePlugin: 对axios做了一层封装用于项目发送xhr请求给后台。</p>
                            <p>sagaPlugin: 处理程序中的副作用</p>
                            <p>routerPlugin: 处理URI与Component组件之间的映射</p>
                            <p>messagePlugin(消息插件)、notificationPlugin（通知插件）当然还有很多其他Plugin为我们web程序提供各种不同的能力</p>
                            
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default connect((state) => ({
    name: state.project.name,
    age: state.project.age
}))(Project)