"use client";
import { Fragment } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { classNames } from "@rafty/utils";

export function Fence({
  children,
  language,
  className: _className,
}: {
  children: string;
  language: string;
  className?: string;
}) {
  return (
    <Highlight
      code={children.trimEnd()}
      language={language}
      theme={themes.dracula}
    >
      {({ className, style, tokens, getTokenProps }) => (
        <pre className={classNames(className, _className)} style={style}>
          <code>
            {tokens.map((line, lineIndex) => (
              <Fragment key={lineIndex}>
                {line
                  .filter((token) => !token.empty)
                  .map((token, tokenIndex) => (
                    <span key={tokenIndex} {...getTokenProps({ token })} />
                  ))}
                {"\n"}
              </Fragment>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  );
}
