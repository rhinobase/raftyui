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
              <Fragment key={index}>
                {line
                  .filter((token) => !token.empty)
                  .map((token, tokenIndex) => (
                    <span key={tokenIndex} {...getTokenProps({ token })} />
                  ))}
                {index != tokens.length - 1 ? "\n" : ""}
              </Fragment>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  );
}
