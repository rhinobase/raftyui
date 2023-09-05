import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@rafty/ui";

export function AlertExample() {
  return (
    <Alert>
      <AlertIcon />
      <AlertTitle>Title</AlertTitle>
      <AlertDescription>Description</AlertDescription>
    </Alert>
  );
}
