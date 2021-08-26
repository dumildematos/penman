/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import MDEditor from "@uiw/react-md-editor";
import styled from '@xstyled/styled-components';

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

const Box = styled.divBox`
  width:100%;
  height: 100%;
  .container{
    width:100%;
    height: 100%;

  }
`;

export default function Editor() {

  const [value, setValue] = useState(mkdStr);
  return (
    <Box>
      <div className="container">
        <MDEditor height={200} value={value} onChange={setValue} />
      </div>
    </Box>
  );

}
