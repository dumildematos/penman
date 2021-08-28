/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
import React, { useContext } from 'react';
import { Button } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { DownloadOutlined, EditOutlined } from '@ant-design/icons';
import styled from '@xstyled/styled-components';
import { MainContext } from '../../context/AppContext';
import { exampleContent } from '../Editor/exampleContent';




const Flexible =  styled.divBox`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  div{
    &.logo{
      height: 64px;
    }
    &.btnBox{
      button{
        margin: 0 5px;
        &.btnDownload{
          background: #74a74d!important;
          border: none;
        }
      }
    }
  }
`;


export function NavMenu() {

  const { createNew, saveEditorContent, editorContent }  = useContext(MainContext)

  return (
    <Header style={{
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      backgroundColor: '#fff'
      }}>
      <Flexible>
        <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg"  width="149" height="58" viewBox="0 0 149 58"><defs><linearGradient id="a" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox"><stop offset="0" stopColor="#e353d8"/><stop offset="1" stopColor="#ff9f8d"/></linearGradient><clipPath id="c"><rect width="149" height="58"/></clipPath></defs><g id="b" clipPath="url(#c)"><rect width="149" height="58" fill="rgba(255,255,255,0)"/><g transform="translate(16.204 6.803)"><g transform="translate(0 0)"><path d="M118.055.87A1.3,1.3,0,0,0,116.737,0c-.134.009-.221.01-.219.01a17.144,17.144,0,0,0-15.171,9.068,36.967,36.967,0,0,0-4.053,12.788,1.3,1.3,0,0,0-.02.161,36.663,36.663,0,0,0-.262,3.981H90.507a1.3,1.3,0,0,0,0,2.6h.972l-2.138,9.4a5.208,5.208,0,0,0,5.069,6.377h7.8a5.209,5.209,0,0,0,5.07-6.373l-2.14-9.408h.972a1.3,1.3,0,1,0,0-2.6h-6.5q.016-1.347.137-2.688a7.854,7.854,0,0,0,3.467-1.416,7.619,7.619,0,0,0,2.848-3.978,29.1,29.1,0,0,1,11.5-15.559,1.3,1.3,0,0,0,.488-1.5Zm-15.58,27.742,2.272,9.989a2.6,2.6,0,0,1-2.534,3.191h-7.8A2.6,2.6,0,0,1,91.875,38.6l2.271-9.984Zm1.1-11.441a5.184,5.184,0,0,1-3.463,3.407,34.324,34.324,0,0,1,3.526-10.273A14.535,14.535,0,0,1,112.36,3.2a31.365,31.365,0,0,0-8.781,13.972Z" transform="translate(-89.204 0)" fill="url(#a)"/></g></g><text transform="translate(38.5 49.399)" fill="#707070" fontSize="30" fontFamily="KhmerMN, Khmer MN"><tspan x="0" y="0">Penman</tspan></text></g></svg>
        </div>
        <div className="btnBox">
          <Button type="primary" className="btnDownload"
            shape="round"
            icon={<DownloadOutlined />}
            onClick={()=> {
              window.electron.ipcRenderer.saveFile(editorContent);
              // window.electron.on('saved-file', (_event, data)=> {
              //   console.log(data)
              // })
            }}
          >
            Download
          </Button>
          <Button type="primary" shape="round" icon={<EditOutlined />}
            onClick={()=>{
              saveEditorContent(exampleContent)
            }}
          >
            New
          </Button>
        </div>
      </Flexible>
    </Header>
  );
}
