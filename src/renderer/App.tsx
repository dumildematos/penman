/* eslint-disable prettier/prettier */
import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.global.css';
import {  Layout,  } from 'antd';
import { Content,  } from 'antd/lib/layout/layout';
import Editor from './components/Editor';
import { MainContextProvider } from './context/AppContext';
import { NavMenu } from './components/MainMenu';

const TextEditor = () => {
  return (
    <>
    <Layout className="layout">
      <Content className="mainContent">
        <Editor/>
      </Content>
    </Layout>
    </>
  );
};
// https://codesandbox.io/s/modest-framework-6zmgb?file=/src/App.js
export default function App() {
  return (
    <>
     <MainContextProvider>
      <NavMenu/>
      <Router>
        <Switch>
          <Route path="/" component={TextEditor} />
        </Switch>
      </Router>
     </MainContextProvider>
    </>
  );
}
