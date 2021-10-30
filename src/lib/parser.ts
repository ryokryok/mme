import marked from "marked";
import sanitizeHtml from "sanitize-html";

function sanitizer(dirtyText: string): string {
  // remove XSS risk
  return sanitizeHtml(dirtyText);
}

export function markdownToHtml(markdownText: string): string {
  const htmlText = marked(markdownText);
  // Do not sanitize before parsing to html
  return sanitizer(htmlText);
}
