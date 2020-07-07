import React from 'react';
import { connect } from 'react-redux'
import { Button } from 'antd';

class Project extends React.Component {
    render() {
        const { name, dispatch, age} = this.props;
        return (
            <div>
                <div>个人项目经历: {name}</div>
                <div>个人年龄: {age}</div>
                <Button onClick = {(e) => {dispatch({type: "project/add",payload: {name: "吴宇"}})}}>changename</Button>
                <Button onClick = {(e) => {dispatch({type: "project/reset"})}}>reset</Button>
            </div>
        )
    }
}
export default connect((state) => ({
    name: state.project.name,
    age: state.project.age
}))(Project)