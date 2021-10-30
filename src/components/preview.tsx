import styled from "styled-components";
import { markdownToHtml } from "../lib/parser";
import "highlight.js/styles/github-dark.css";
import { useEffect } from "react";
import { hljs } from "../lib/hljs";
import "github-markdown-css";

export const Preview = styled.div`
  padding: 1em;
  max-width: 100%;
  height: auto;
  flex: 1;
  overflow: scroll;
  @media screen and (max-width: 40em) {
    flex: 2;
  }
`;

type PreviewAreaProps = {
  markdownText: string;
};

export function PreviewArea({ markdownText }: PreviewAreaProps) {
  const htmlText = markdownToHtml(markdownText);
  useEffect(() => {
    hljs.highlightAll();
  }, [markdownText]);
  return (
    <Preview
      className={"markdown-body"}
      dangerouslySetInnerHTML={{ __html: htmlText }}
    />
  );
}
