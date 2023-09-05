import { Button } from "@rafty/ui";

export default function ButtonOpen() {
  return (
    <div className="flex gap-4 justify-center">
      <Button colorScheme="primary">Button</Button>
      <Button variant="outline">Outline</Button>
    </div>
  );
}
