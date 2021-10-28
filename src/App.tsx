import { RootWrapper } from "./components/common";
import { Editor } from "./components/editor";
import { PreviewArea } from "./components/preview";

function App() {
  return (
    <RootWrapper>
      <Editor
        name=""
        defaultValue={"# MME - my markdown editor -"}
        autoFocus={true}
      ></Editor>
      <PreviewArea
        markdownText={"# Marked in Node.js\nRendered by **marked**."}
      />
    </RootWrapper>
  );
}

export default App;
