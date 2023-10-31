import "./App.css";
import { marked } from "marked";
import { useState } from "react";

function App() {
  const [content, setContent] = useState(defaultContent);
  const [editorWindow, setEditorWindow] = useState(false);
  const [previewWindow, setPreviewWindow] = useState(false);

  return (
    <div className="App">
      <div
        className={
          "editorWrap" +
          (previewWindow ? " hide" : "") +
          (editorWindow ? " maximized" : "")
        }
      >
        <div className="toolbar">
          <i className="fa fa-free-code-camp" />
          <text>Editor</text>
          <i
            className={editorWindow ? "fa fa-compress" : "fa fa-arrows-alt"}
            onClick={() => setEditorWindow(!editorWindow)}
          />
        </div>
        <textarea
          id="editor"
          onChange={(event) => {
            setContent(event.target.value);
          }}
          value={content}
        >
        </textarea>
      </div>

      <div
        className={
          "previewWrap" +
          (editorWindow ? " hide" : "") +
          (previewWindow ? " maximized" : "")
        }
      >
        <div className="toolbar">
          <i className="fa fa-free-code-camp" />
          <text>Preview</text>
          <i
            className={previewWindow ? "fa fa-compress" : "fa fa-arrows-alt"}
            onClick={() => setPreviewWindow(!previewWindow)}
          />
        </div>
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked.setOptions({
              breaks: true,
            })(content),
          }}
        ></div>
      </div>
    </div>
  );
}

const defaultContent = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

export default App;
