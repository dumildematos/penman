/* eslint-disable prettier/prettier */
import React, { createContext, ReactNode, useState } from "react";
import { exampleContent } from "../components/Editor/exampleContent";

type Controls = {
  editorContent: string;
  saveEditorContent: (text: string) => void;
  newDoc: boolean;
  createNew:  (state: boolean) => void;

}

type Node = {
  children: ReactNode;
}

export const  MainContext = createContext({} as Controls);

export function MainContextProvider ({children} : Node) {

  const [editorContent, setEditorContent] = useState(exampleContent)
  const [newDoc, setNewDoc] = useState(false)

  function saveEditorContent(text: string) {
    setEditorContent(text)
  }

  function createNew(state: boolean){
    setNewDoc(state)
  }

  return(
    <MainContext.Provider
    value={
      {
        editorContent,
        newDoc,
        saveEditorContent,
        createNew
      }
    }
    >
      { children }
    </MainContext.Provider>
  )

}
