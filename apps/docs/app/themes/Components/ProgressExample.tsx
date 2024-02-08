import { Progress } from "@rafty/ui";

export function ProgressExample() {
  return (
    <div className="w-full space-y-5">
      <Progress value={70} colorScheme="primary" />
      <Progress value={40} colorScheme="error" />
      <Progress value={60} colorScheme="success" />
      <Progress value={50} colorScheme="warning" />
    </div>
  );
}
