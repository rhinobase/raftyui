import { Button, Card, CardContent, CardFooter, CardHeader } from "@rafty/ui";

export const card_examples = {
  "card:usage": (
    <Card>
      <CardHeader>Customer dashboard</CardHeader>
      <CardContent>
        View a summary of all your customers over the last month. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Nesciunt, nam? Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Officia, eveniet culpa
        minima ipsa rem in mollitia inventore laboriosam necessitatibus itaque.
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" colorScheme="error">
          Delete
        </Button>
        <Button variant="outline">View here</Button>
      </CardFooter>
    </Card>
  ),
  "card:size": (
    <Card size="sm">
      <CardHeader>Customer dashboard</CardHeader>
      <CardContent className="text-sm">
        View a summary of all your customers over the last month. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Nesciunt, nam? Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Officia, eveniet culpa
        minima ipsa rem in mollitia inventore laboriosam necessitatibus itaque.
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button size="sm" variant="outline" colorScheme="error">
          Delete
        </Button>
        <Button size="sm" variant="outline">
          View here
        </Button>
      </CardFooter>
    </Card>
  ),
  "card:variant": (
    <Card variant="elevated">
      <CardHeader>Customer dashboard</CardHeader>
      <CardContent>
        View a summary of all your customers over the last month. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Nesciunt, nam? Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Officia, eveniet culpa
        minima ipsa rem in mollitia inventore laboriosam necessitatibus itaque.
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" colorScheme="error">
          Delete
        </Button>
        <Button variant="outline">View here</Button>
      </CardFooter>
    </Card>
  ),
  "card:barebone": (
    <Card
      isBarebone
      className="dark:bg-secondary-800 space-y-4 rounded-lg bg-white p-4 shadow-md dark:text-white"
    >
      <CardHeader className="text-xl font-semibold">
        Customer dashboard
      </CardHeader>
      <CardContent>
        View a summary of all your customers over the last month. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Nesciunt, nam? Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Officia, eveniet culpa
        minima ipsa rem in mollitia inventore laboriosam necessitatibus itaque.
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" colorScheme="error">
          Delete
        </Button>
        <Button variant="outline">View here</Button>
      </CardFooter>
    </Card>
  ),
};
