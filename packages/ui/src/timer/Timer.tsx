"use client";
import { cva } from "class-variance-authority";
import { type HTMLAttributes, useEffect, useRef, useState } from "react";
import { Button } from "../button";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";

const timerClasses = cva(
  "flex w-full flex-col items-center justify-center gap-3 select-none",
  {
    variants: {
      disabled: {
        true: "cursor-not-allowed opacity-60",
        false: "",
      },
      hidden: {
        true: "hidden",
        false: "",
      },
    },
  },
);

export type Timer = {
  isHidden?: ValueOrFunction;
  isDisabled?: ValueOrFunction;
  isReadOnly?: ValueOrFunction;
  className?: HTMLAttributes<HTMLDivElement>["className"];
};

export function Timer({
  isHidden = false,
  isDisabled = false,
  isReadOnly = false,
  className,
}: Timer) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const ref = useRef<NodeJS.Timeout | null>(null);
  const disabled = getValue(isDisabled);
  const hidden = getValue(isHidden);
  const readOnly = getValue(isReadOnly);

  useEffect(() => {
    if (isRunning) {
      ref.current = setInterval(() => setTime((prev) => prev + 1), 1000);
    }

    return () => {
      if (ref.current) {
        clearInterval(ref.current);
      }
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
    setIsStopped(false);
  };

  const handleStop = () => {
    setIsRunning(false);
    setIsStopped(true);
  };

  const handleResume = () => {
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setIsStopped(false);
  };

  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className={classNames(timerClasses({ disabled, hidden }), className)}>
      <p className="w-full max-w-[300px] text-center text-2xl font-semibold">
        {formatTime()}
      </p>
      {isRunning ? (
        <Button
          size="sm"
          colorScheme="primary"
          variant="outline"
          onClick={handleStop}
          isDisabled={disabled || readOnly}
        >
          Stop
        </Button>
      ) : isStopped ? (
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            colorScheme="primary"
            variant="outline"
            onClick={handleResume}
            isDisabled={disabled || readOnly}
          >
            Resume
          </Button>
          <Button
            size="sm"
            colorScheme="primary"
            variant="outline"
            onClick={handleReset}
            isDisabled={disabled || readOnly}
          >
            Reset
          </Button>
        </div>
      ) : (
        <Button
          size="sm"
          colorScheme="primary"
          variant="outline"
          onClick={handleStart}
          isDisabled={disabled || readOnly}
        >
          Start
        </Button>
      )}
    </div>
  );
}
