import { ChangeEvent, useState } from "react";
import { RootWrapper } from "./components/common";
import { EditorArea } from "./components/editor";
import { PreviewArea } from "./components/preview";
import initialText from "./SAMPLE.md?raw";

function App() {
  const [markdownText, setMarkdownText] = useState(initialText);
  function handleEditorChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setMarkdownText(event.target.value);
  }
  return (
    <RootWrapper>
      <EditorArea inputText={markdownText} handleChange={handleEditorChange} />
      <PreviewArea markdownText={markdownText} />
    </RootWrapper>
  );
}

export default App;
