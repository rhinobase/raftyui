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
    <div className="space-y-4 w-full">
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
    <div className="space-y-4 w-full">
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
      className="flex items-center w-full h-16 gap-1 p-4 border dark:text-white rounded-md bg-green-300/40 border-green-500"
    >
      <AlertIcon className="h-7 w-7" />
      <AlertTitle>Title</AlertTitle>
      <AlertDescription>Description</AlertDescription>
    </Alert>
  ),
  "alert:unstyled": (
    <Alert
      isUnstyled
      className="flex items-center w-full h-14 gap-1 p-4 border text-white rounded-md bg-red-400/50 border-red-500"
    >
      <AlertIcon />
      <AlertTitle>Title</AlertTitle>
      <AlertDescription>Description</AlertDescription>
    </Alert>
  ),
};
