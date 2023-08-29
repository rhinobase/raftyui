import { Progress } from "@rafty/ui";

export const progress_examples = {
  "progress:usage": (
    <div>
      <Progress size="lg" value={80} colorScheme="primary" />

      <Progress value={80} />
    </div>
  ),
  "progress:colorscheme": (
    <div>
      <Progress value={80} colorScheme="primary" />
      <Progress value={80} colorScheme="error" />
      <Progress value={80} colorScheme="success" />
      <Progress value={80} colorScheme="warning" />
    </div>
  ),
  "progress:size": (
    <div>
      <Progress value={80} size="sm" />
      <Progress value={80} size="md" />
      <Progress value={80} size="lg" />
    </div>
  ),
};
