"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "../button";

export const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(
        () => setTime((prev) => prev + 1),
        1000,
      );
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleResume = () => {
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);

    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <p className="w-full max-w-[300px] text-center text-2xl font-semibold">
        {formatTime(time)}
      </p>
      {isRunning ? (
        <Button size="sm" variant="outline" onClick={handleStop}>
          Stop
        </Button>
      ) : (
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" onClick={handleStart}>
            Start
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={handleResume}
            disabled={isRunning}
          >
            Resume
          </Button>
          <Button size="sm" variant="outline" onClick={handleReset}>
            Reset
          </Button>
        </div>
      )}
    </div>
  );
};
