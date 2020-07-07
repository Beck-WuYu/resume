import React from 'react';
import ReactDom from 'react-dom';
import 'antd/dist/antd.css'
import APP from './app';

console.log(APP);

ReactDom.render(<APP/>, document.getElementById('root'))