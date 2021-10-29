import { useState } from "react";
import { RootWrapper } from "./components/common";
import { Editor } from "./components/editor";
import { PreviewArea } from "./components/preview";

function App() {
  const [markdownText, setMarkdownText] = useState(
    "# Marked in Node.js\n\nRendered by **marked**."
  );
  return (
    <RootWrapper>
      <Editor
        name=""
        defaultValue={markdownText}
        onChange={(event) => setMarkdownText(event.target.value)}
        autoFocus={true}
      ></Editor>
      <PreviewArea markdownText={markdownText} />
    </RootWrapper>
  );
}

export default App;
