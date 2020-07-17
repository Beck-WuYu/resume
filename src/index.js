import React from 'react';
import 'antd/dist/antd.css';
import "@css/main.css";
import {createApp} from './framework/core';
import Route from './app/route';
import AppModel from './model/app';
import ProjectModel from './model/project';
import ResumeModel from './model/resume';
const app = createApp({
    models: [AppModel, ProjectModel, ResumeModel]
});

app.start(<Route/>, "#root");