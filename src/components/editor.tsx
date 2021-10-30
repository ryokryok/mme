import { ChangeEvent } from "react";
import styled from "styled-components";

export const Editor = styled.textarea`
  padding: 1em;
  max-width: 100%;
  flex: 1;
  resize: none;
  background-color: #222222;
  color: #ffffff;
  border: none;
  outline: none;
  font-size: 1.25em;
`;

type EditorAreaProps = {
  inputText: string;
  handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

export function EditorArea({ inputText, handleChange }: EditorAreaProps) {
  return (
    <Editor onChange={handleChange} autoFocus={true}>
      {inputText}
    </Editor>
  );
}
