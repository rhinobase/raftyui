import Md from "markdown-to-jsx";

export type Markdown = {
  content: string;
};

export function Markdown({ content }: Markdown) {
  return <Md>{content}</Md>;
}
