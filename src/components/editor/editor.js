import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./editor.css";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: props.defaultValue };
    this.handleChange = this.handleChange.bind(this);
    // console.log(props)
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
    // console.log(html)
    this.props.handleEditor(html);
  }

  render() {
    return (
      <div className="editor-container">
        <ReactQuill
          id="ArticleContent"
          onChange={this.handleChange}
          modules={Editor.modules}
          formats={Editor.formats}
          bounds={".app"}
          placeholder="Let's Write"
          value={this.state.editorHtml || ""}
        />
      </div>
    );
  }
}

Editor.modules = {
  toolbar: [
    [{ header: ["1", "2", "3", "4", "5", "6", false] }, { font: [] }],
    [{ size: [] }],
    [{ align: [] }],
    ["code-block"],
    [{ color: [] }, { background: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    [{ direction: "rtl" }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

Editor.formats = [
  "header",
  "font",
  "size",
  "align",
  "code-block",
  "color",
  "background",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "direction",
  "link",
  "image",
  "video",
];

export default Editor;
