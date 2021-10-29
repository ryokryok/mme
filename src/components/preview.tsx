import styled from "styled-components";
import { markdownToHtml } from "../lib/parser";
import "highlight.js/styles/atom-one-dark.css";
import { useEffect } from "react";
import { hljs } from "../lib/hljs";

export const Preview = styled.div`
  padding: 1em;
  max-width: 100%;
  height: auto;
  flex: 1;
  background-color: #ffffff;
  color: #222222;
  font-size: 1em;
  overflow: scroll;
  & > h1 {
    border-bottom: 4px solid #cccccc;
  }
`;

type PreviewAreaProps = {
  markdownText: string;
};

export function PreviewArea({ markdownText }: PreviewAreaProps) {
  const htmlText = markdownToHtml(markdownText);
  useEffect(() => {
    hljs.initHighlighting();
  }, [markdownText]);
  return <Preview dangerouslySetInnerHTML={{ __html: htmlText }} />;
}
