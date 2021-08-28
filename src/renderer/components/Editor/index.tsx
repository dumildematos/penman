/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from '@xstyled/styled-components';
import Yamde from "yamde";
import { exampleContent } from './exampleContent';
import { MainContext } from '../../context/AppContext';

const Box = styled.divBox`
  width:100%;
  height: 100%;
  .yamde-0-2-1{
    height: 100%
  }
  .contentArea-0-2-8 {
  height: 100%!important;
}

  textarea, .preview-0-2-9 {
    width:100%!important;
    overflow: scroll!important;
  }



`;
export default function Editor() {

  const { createNew, saveEditorContent , editorContent }  = useContext(MainContext)

  const [isLightMode, setIsLightMode] = useState(true);
  const [text, setText] = useState(exampleContent);

 const anchorRef = useRef<HTMLAnchorElement>(null);

 const clickPreview = (callback) => {
  document.getElementsByClassName('viewSwitch-0-2-5')[0].children[1].addEventListener('click', (e)=>{
    if(callback){
      callback();
    }
  })
 }

 // eslint-disable-next-line no-restricted-globals



  useEffect(() => {

    clickPreview(() => {
      clickPreview(()=>{
        console.log('clicou no link')
        const anchour: any = document.getElementsByTagName('a')
        let links = anchour;

        links.forEach(function(link){
          anchorRef.current = link;
          link.onclick = ()=> {
            let url = link.href;
            link.href = "#!";
            if(link.href !== '#!' || url === '#!'){
              document.getElementsByClassName('viewSwitch-0-2-5')[0].children[1].click()
            }
            else {
              window.electron.ipcRenderer.goToURL(url)
            }
          };

        })
      })
    })

  })



  setTimeout(() => {
    if(!anchorRef.current)
      document.getElementsByClassName('viewSwitch-0-2-5')[0].children[1].click()
      document.getElementsByClassName('viewSwitch-0-2-5')[0].children[1].click()
  }, 2000)

  return (

    <Box>
      <Yamde
          value={editorContent}
          handler={saveEditorContent}
          theme={isLightMode ? "light" : "dark"}
        />

    </Box>
  );

}
