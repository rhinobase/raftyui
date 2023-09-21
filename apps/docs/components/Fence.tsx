"use client";
import { Fragment, useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { Button, classNames } from "@rafty/ui";
import { HiCheck, HiDuplicate } from "react-icons/hi";

export function Fence({
  children,
  language,
  className: _className,
}: {
  children: string;
  language: string;
  className?: string;
}) {
  const [isCopied, setIsCopied] = useState(false);

  const content = children.trimEnd();

  const handleCopyClick = () => {
    navigator.clipboard.writeText(content);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };

  return (
    <div className="relative">
      <Highlight code={content} language={language} theme={themes.dracula}>
        {({ className, style, tokens, getTokenProps }) => (
          <pre
            className={classNames(className, _className, "!-mt-2")}
            style={style}
          >
            <Button
              onClick={handleCopyClick}
              className="absolute right-1 top-1 "
              variant="outline"
              size="icon"
            >
              {isCopied ? (
                <HiCheck className="text-green-300" />
              ) : (
                <HiDuplicate className="text-slate-200" />
              )}
            </Button>
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
    </div>
  );
}
