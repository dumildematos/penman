/* eslint-disable prettier/prettier */
import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.global.css';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Header, Content, Footer } from 'antd/lib/layout/layout';
import Editor from './components/Editor';
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

export default function App() {
  return (
    <>
      <NavMenu />
      <Router>
        <Switch>
          <Route path="/" component={TextEditor} />
        </Switch>
      </Router>
    </>
  );
}
