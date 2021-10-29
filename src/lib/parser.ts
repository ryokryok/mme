import marked from "marked";
import sanitizeHtml from "sanitize-html";
import { hljs } from "../lib/hljs";

function sanitizer(dirtyText: string): string {
  // remove XSS risk
  return sanitizeHtml(dirtyText);
}

export function markdownToHtml(markdownText: string): string {
  marked.setOptions({
    langPrefix: "hljs language-",
    highlight: function (code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    }
  });
  const htmlText = marked(markdownText);
  // Do not sanitize before parsing to html
  return sanitizer(htmlText);
}
