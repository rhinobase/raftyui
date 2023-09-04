import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@rafty/ui";
import React from "react";

export default function AlertOpen() {
  return (
    <>
      <Alert>
        <AlertIcon />
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </Alert>
    </>
  );
}
