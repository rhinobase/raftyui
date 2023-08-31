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
    <Alert status="info">
      <AlertIcon />
      <AlertTitle>Title</AlertTitle>
      <AlertDescription>Description</AlertDescription>
    </Alert>
  ),
  "alert:variant": (
    <Alert variant="simple">
      <AlertIcon />
      <AlertTitle>Title</AlertTitle>
      <AlertDescription>Description</AlertDescription>
    </Alert>
  ),
  "alert:barebone": (
    <Alert isBarebone>
      <AlertIcon />
      <AlertTitle>Title</AlertTitle>
      <AlertDescription>Description</AlertDescription>
    </Alert>
  ),
  "alert:unstyled": (
    <Alert isUnstyled>
      <AlertIcon />
      <AlertTitle>Title</AlertTitle>
      <AlertDescription>Description</AlertDescription>
    </Alert>
  ),
};
