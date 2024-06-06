"use client";
import { type HTMLAttributes, forwardRef, useEffect, useState } from "react";
import { Button } from "../button";
import { classNames } from "../utils";

type PropType = { text: string; color: string };

export type AnnotatedText = Omit<HTMLAttributes<HTMLDivElement>, "onChange"> & {
  content: string;
  onChange?: (props: PropType[]) => void;
};

const COLORS = {
  red: "border-red-500 text-red-500 ring-red-500",
  orange: "border-orange-500 text-orange-500 ring-orange-500",
  yellow: "border-yellow-500 text-yellow-500 ring-yellow-500",
  green: "border-green-500 text-green-500 ring-green-500",
  blue: "border-blue-500 text-blue-500 ring-blue-500",
  indigo: "border-indigo-500 text-indigo-500 ring-indigo-500",
  purple: "border-purple-500 text-purple-500 ring-purple-500",
  pink: "border-pink-500 text-pink-500 ring-pink-500",
};

export const AnnotatedText = forwardRef<HTMLDivElement, AnnotatedText>(
  ({ content, className, onChange, ...props }, forwardedRef) => {
    const [selectedText, setSelectedText] = useState<string>();
    const [highlightedContent, setHighlightedContent] =
      useState<string>(content);
    const [highlights, setHighlights] = useState<PropType[]>([]);

    const handleMouseUp = () => {
      const selection = window.getSelection();

      if (selection) {
        const selected = selection.toString();

        setSelectedText(selected);
      }
    };

    useEffect(() => {
      let newContent = content;

      for (const { text, color } of highlights) {
        const startIndex = newContent.indexOf(text);
        if (startIndex !== -1) {
          const before = newContent.slice(0, startIndex);
          const after = newContent.slice(startIndex + text.length);

          newContent = `${before}<span style="background-color: ${color}; border: solid; padding: 1px 1px; cursor: pointer" onClick={}>${text}</span>${after}`;
        }
      }

      setHighlightedContent(newContent);
    }, [highlights, content]);

    const addHighlight = (color: string) => {
      if (selectedText) {
        const value = [...highlights, { text: selectedText, color }];
        setHighlights(value);
        onChange?.(value);
        setSelectedText("");
      }
    };

    return (
      <div
        {...props}
        className={classNames("space-y-4", className)}
        ref={forwardedRef}
      >
        <p
          onMouseUp={handleMouseUp}
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{ __html: highlightedContent }}
        />
        {selectedText && (
          <div className="flex flex-wrap items-center gap-2">
            <strong>Selected text: </strong>
            {selectedText}
            {Object.entries(COLORS).map(([color, value]) => (
              <Button
                key={color}
                size="sm"
                variant="outline"
                className={`justify-start capitalize ${value}`}
                onClick={() => addHighlight(color)}
              >
                {color}
              </Button>
            ))}
          </div>
        )}
      </div>
    );
  },
);
AnnotatedText.displayName = "AnnotatedText";
