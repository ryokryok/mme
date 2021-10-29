import styled from "styled-components";
import sanitizeHtml from "sanitize-html";
import marked from "marked";

export const Preview = styled.pre`
  padding: 1em;
  max-width: 100%;
  height: auto;
  flex: 1;
  background-color: #ffffff;
  color: #222222;
  font-size: 1.25em;
`;

type PreviewAreaProps = {
  markdownText: string;
};

export function PreviewArea({ markdownText }: PreviewAreaProps) {
  const sanitizedText = sanitizeHtml(markdownText);
  const htmlText = marked(sanitizedText);
  return <Preview dangerouslySetInnerHTML={{ __html: htmlText }} />;
}
