"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "../button";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";

export type Timer = {
  hidden?: ValueOrFunction;
};

export function Timer({ hidden }: Timer) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const ref = useRef<NodeJS.Timeout | null>(null);

  const isHidden = getValue(hidden);

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

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  console.log(isHidden);

  return (
    <div
      className={classNames(
        "flex w-full flex-col items-center justify-center gap-3",
        isHidden && "hidden",
      )}
    >
      <p className="w-full max-w-[300px] text-center text-2xl font-semibold">
        {formatTime(time)}
      </p>
      {isRunning ? (
        <Button
          size="sm"
          colorScheme="primary"
          variant="outline"
          onClick={handleStop}
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
          >
            Resume
          </Button>
          <Button
            size="sm"
            colorScheme="primary"
            variant="outline"
            onClick={handleReset}
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
        >
          Start
        </Button>
      )}
    </div>
  );
}
