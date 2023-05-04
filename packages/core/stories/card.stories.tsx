import { Button, Card } from "../src";

const config = {
  title: "Components / Card",
  component: Card,
};
export default config;

export function Default() {
  return (
    <Grid>
      <div className="mb-5 max-w-lg">
        <Card.Root className="dark:border-secondary-700 rounded-md border">
          <Card.Header>Customer dashboard</Card.Header>
          <Card.Body>
            View a summary of all your customers over the last month. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nam?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
            eveniet culpa minima ipsa rem in mollitia inventore laboriosam
            necessitatibus itaque.
          </Card.Body>
          <Card.Footer className="flex">
            <Button variant="outline" colorScheme="error">
              Delete
            </Button>
            <div className="flex-1" />
            <Button variant="outline">View here</Button>
          </Card.Footer>
        </Card.Root>
      </div>
      <div className="max-w-lg">
        <Card.Root className="dark:border-secondary-700 rounded-md border">
          <Card.Header className="border-b">Customer dashboard</Card.Header>
          <Card.Body>
            View a summary of all your customers over the last month. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nam?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
            eveniet culpa minima ipsa rem in mollitia inventore laboriosam
            necessitatibus itaque.
          </Card.Body>
          <Card.Footer className="flex border-t">
            <Button variant="outline" colorScheme="error">
              Delete
            </Button>
            <div className="flex-1" />
            <Button variant="outline">View here</Button>
          </Card.Footer>
        </Card.Root>
      </div>
    </Grid>
  );
}
