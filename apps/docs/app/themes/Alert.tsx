import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@rafty/ui";

export default function AlertOpen() {
  return (
    <Alert>
      <AlertIcon />
      <AlertTitle>Title</AlertTitle>
      <AlertDescription>Description</AlertDescription>
    </Alert>
  );
}
