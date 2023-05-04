import { Meta } from "@storybook/react";
import { Button, Card, CardBody, CardFooter, CardHeader } from "../src";

const meta: Meta<typeof Card> = {
  title: "Components / Card",
};

export default meta;

export function Default() {
  return (
    <>
      <Card className="dark:border-secondary-700 rounded-md border">
        <CardHeader>Customer dashboard</CardHeader>
        <CardBody>
          View a summary of all your customers over the last month. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Nesciunt, nam? Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Officia, eveniet
          culpa minima ipsa rem in mollitia inventore laboriosam necessitatibus
          itaque.
        </CardBody>
        <CardFooter className="flex">
          <Button variant="outline" colorScheme="error">
            Delete
          </Button>
          <div className="flex-1" />
          <Button variant="outline">View here</Button>
        </CardFooter>
      </Card>
      <Card className="dark:border-secondary-700 rounded-md border">
        <CardHeader className="border-b">Customer dashboard</CardHeader>
        <CardBody>
          View a summary of all your customers over the last month. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Nesciunt, nam? Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Officia, eveniet
          culpa minima ipsa rem in mollitia inventore laboriosam necessitatibus
          itaque.
        </CardBody>
        <CardFooter className="flex border-t">
          <Button variant="outline" colorScheme="error">
            Delete
          </Button>
          <div className="flex-1" />
          <Button variant="outline">View here</Button>
        </CardFooter>
      </Card>
    </>
  );
}
