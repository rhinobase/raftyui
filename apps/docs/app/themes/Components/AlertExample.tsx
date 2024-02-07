import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@rafty/ui";

export function AlertExample() {
  return (
    <div className="w-full space-y-4">
      <Alert>
        <AlertIcon />
        <AlertTitle>Alert</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </Alert>
      <Alert status="success" variant="solid">
        <AlertIcon />
        <AlertTitle>Alert</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </Alert>
      <Alert status="warning" variant="left-accent">
        <AlertIcon />
        <AlertTitle>Alert</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </Alert>
      <Alert status="error" variant="top-accent">
        <AlertIcon />
        <AlertTitle>Alert</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </Alert>
    </div>
  );
}
