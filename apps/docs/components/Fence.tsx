"use client";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { Button, classNames } from "@rafty/ui";
import { Highlight, themes } from "prism-react-renderer";
import { Fragment, useState } from "react";

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
              aria-label="Copy"
            >
              {isCopied ? (
                <CheckIcon height={16} width={16} className="text-green-300" />
              ) : (
                <DocumentDuplicateIcon
                  height={16}
                  width={16}
                  className="text-slate-200"
                />
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
