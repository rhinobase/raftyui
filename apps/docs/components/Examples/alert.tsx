import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@rafty/ui";

export const alert_examples = {
  "alert:usage": (
    <Alert>
      <AlertIcon />
      <AlertTitle>Title</AlertTitle>
      <AlertDescription>Description</AlertDescription>
    </Alert>
  ),
  "alert:size": (
    <Alert size="sm">
      <AlertIcon />
      <AlertTitle>Title</AlertTitle>
      <AlertDescription>Description</AlertDescription>
    </Alert>
  ),
  "alert:status": (
    <div className="w-full space-y-4">
      <Alert>
        <AlertIcon />
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </Alert>
      <Alert status="success">
        <AlertIcon />
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </Alert>
      <Alert status="warning">
        <AlertIcon />
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </Alert>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </Alert>
    </div>
  ),
  "alert:variant": (
    <div className="w-full space-y-4">
      <Alert>
        <AlertIcon />
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </Alert>
      <Alert variant="solid">
        <AlertIcon />
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </Alert>
      <Alert variant="left-accent">
        <AlertIcon />
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </Alert>
      <Alert variant="top-accent">
        <AlertIcon />
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </Alert>
    </div>
  ),
  "alert:barebone": (
    <Alert
      isBarebone
      className="flex h-16 w-full items-center gap-1 rounded-md border border-green-500 bg-green-300/40 p-4 dark:text-white"
    >
      <AlertIcon className="h-7 w-7" />
      <AlertTitle>Title</AlertTitle>
      <AlertDescription>Description</AlertDescription>
    </Alert>
  ),
  "alert:unstyled": (
    <Alert
      isUnstyled
      className="flex h-14 w-full items-center gap-1 rounded-md border border-red-500 bg-red-400/50 p-4 text-white"
    >
      <AlertIcon />
      <AlertTitle>Title</AlertTitle>
      <AlertDescription>Description</AlertDescription>
    </Alert>
  ),
};
