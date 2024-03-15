import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { classNames } from "../utils";
import { Card, CardContent, CardFooter, CardHeader } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components / Card",
  args: {
    variant: "outline",
    size: "md",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["outline", "elevated"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: ({ variant, size }) => (
    <Card variant={variant} size={size}>
      <CardHeader>
        <h3
          className={classNames(
            size === "sm" && "text-xl",
            size === "md" && "text-2xl",
            size === "lg" && "text-3xl",
            "font-semibold",
          )}
        >
          Customer dashboard
        </h3>
      </CardHeader>
      <CardContent>
        <p
          className={classNames(
            size === "sm" && "text-sm",
            size === "lg" && "text-lg",
            "font-medium",
          )}
        >
          View a summary of all your customers over the last month. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Nesciunt, nam? Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Officia, eveniet
          culpa minima ipsa rem in mollitia inventore laboriosam necessitatibus
          itaque.
        </p>
      </CardContent>
      <CardFooter className="flex">
        <Button variant="outline" colorScheme="error">
          Delete
        </Button>
        <div className="flex-1" />
        <Button variant="outline">View here</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithDivide: Story = {
  render: ({ variant, size }) => (
    <Card
      variant={variant}
      size={size}
      className="dark:divide-secondary-700 divide-y"
    >
      <CardHeader>
        <h3
          className={classNames(
            size === "sm" && "text-xl",
            size === "md" && "text-2xl",
            size === "lg" && "text-3xl",
            "font-semibold",
          )}
        >
          Customer dashboard
        </h3>
      </CardHeader>
      <CardContent
        className={classNames(
          size === "sm" && "py-3",
          size === "md" && "py-4",
          size === "lg" && "py-5",
        )}
      >
        <p
          className={classNames(
            size === "sm" && "text-sm",
            size === "lg" && "text-lg",
            "font-medium",
          )}
        >
          View a summary of all your customers over the last month. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Nesciunt, nam? Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Officia, eveniet
          culpa minima ipsa rem in mollitia inventore laboriosam necessitatibus
          itaque.
        </p>
      </CardContent>
      <CardFooter className="flex">
        <Button variant="outline" colorScheme="error">
          Delete
        </Button>
        <div className="flex-1" />
        <Button variant="outline">View here</Button>
      </CardFooter>
    </Card>
  ),
};
