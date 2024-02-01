import MarkdownToJsx from "markdown-to-jsx";

export type Markdown = {
  content: string;
};

export function Markdown({ content }: Markdown) {
  return (
    <div className="markdown">
      <MarkdownToJsx>{content}</MarkdownToJsx>
    </div>
  );
}
