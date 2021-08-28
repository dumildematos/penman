/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';
import MDEditor from "@uiw/react-md-editor";
import styled from '@xstyled/styled-components';
import Yamde from "yamde";
import { exampleContent } from './exampleContent';
const mkdStr = `# Markdown Editor for [React](https://facebook.github.io/react/)

**Hello world!!!**

[![](https://avatars.githubusercontent.com/u/1680273?s=80&v=4)](https://avatars.githubusercontent.com/u/1680273?v=4)

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

export default function App() {
  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <div className="container">
      <MEDitor
        value={value}
        onChange={setValue}
      />
      <MDEditor.Markdown source={value} />
    </div>
  );
}
\`\`\`
`;
import MarkdownPreview from '@uiw/react-markdown-preview';
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


  return (
    // <Box>
    //   <div className="container">
    //     <MDEditor height={200} value={value} onChange={setValue} />
    //   </div>
    // </Box>
    <Box>
      <Yamde
          value={editorContent}
          handler={saveEditorContent}
          theme={isLightMode ? "light" : "dark"}
        />

    </Box>
  );

}
