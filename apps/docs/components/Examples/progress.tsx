import { Progress } from "@rafty/ui";

export const progress_examples = {
  "progress:usage": (
    <Progress size="lg" value={80} colorScheme="primary" className="w-full" />
  ),
  "progress:colorscheme": (
    <div className="w-full space-y-3">
      <Progress value={70} colorScheme="primary" />
      <Progress value={40} colorScheme="error" />
      <Progress value={60} colorScheme="success" />
      <Progress value={50} colorScheme="warning" />
    </div>
  ),
  "progress:size": (
    <div className="w-full space-y-3">
      <Progress value={70} size="sm" />
      <Progress value={40} size="md" />
      <Progress value={50} size="lg" />
    </div>
  ),
};
