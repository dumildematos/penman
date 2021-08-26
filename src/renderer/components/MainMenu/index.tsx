/* eslint-disable import/prefer-default-export */

import { Button } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import Menu from 'antd/lib/menu';
import React from 'react';

import { DownloadOutlined, EditOutlined } from '@ant-design/icons';
export function NavMenu() {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <div>
        <Button type="primary" shape="round" icon={<DownloadOutlined />}>
          Download
        </Button>
        <Button type="primary" shape="round" icon={<EditOutlined />}>
          New
        </Button>
      </div>
    </Header>
  );
}
