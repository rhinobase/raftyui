import { Button, Card, CardContent, CardFooter, CardHeader } from "@rafty/ui";
import { useThemeEditorContext } from "../Context";

export function CardExample() {
  const { isDisabled } = useThemeEditorContext();

  return (
    <Card>
      <CardHeader>Customer dashboard</CardHeader>
      <CardContent>
        View a summary of all your customers over the last month. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Nesciunt, nam? Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Officia, eveniet culpa
        minima ipsa rem in mollitia inventore laboriosam necessitatibus itaque.
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button isDisabled={isDisabled} variant="outline" colorScheme="error">
          Delete
        </Button>
        <Button variant="outline" isDisabled={isDisabled}>
          View here
        </Button>
      </CardFooter>
    </Card>
  );
}
