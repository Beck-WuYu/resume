import React from 'react';
import { DatePicker } from 'antd';
import { ReactReduxContext } from 'react-redux'

export default class Self extends React.Component{
    static contextType = ReactReduxContext;
    componentDidMount = () => {
        console.log(this.context);
    }
    render(){
        return (
            <DatePicker/>
        )
    }
}