import { Highlight, themes } from "prism-react-renderer";
import { Fragment } from "react";

export type HighlightBlock = {
  content: string;
  language: string;
};

export function HighlightBlock({ content, language }: HighlightBlock) {
  return (
    <Highlight code={content} language={language} theme={themes.dracula}>
      {({ className, style, tokens, getTokenProps }) => (
        <pre className={className} style={style}>
          <code>
            {tokens.map((line, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: line is an array
              <Fragment key={index}>
                {line
                  .filter((token) => !token.empty)
                  .map((token, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: space string repeat multiple times
                    <span key={index} {...getTokenProps({ token })} />
                  ))}
                {index !== tokens.length - 1 ? "\n" : ""}
              </Fragment>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  );
}
