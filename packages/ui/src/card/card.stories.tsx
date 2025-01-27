import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button/index.js";
import { classNames } from "../utils/index.js";
import { Card, CardContent, CardFooter, CardHeader } from "./Card.js";

const meta: Meta<typeof Card> = {
  title: "Components / Card",
  args: {
    size: "md",
    variant: "outline",
    isUnstyled: false,
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
  render: (props) => (
    <Card {...props}>
      <CardHeader>
        <CardTitle size={props.size}>Customer dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <CardParagraph size={props.size}>
          View a summary of all your customers over the last month. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Nesciunt, nam? Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Officia, eveniet
          culpa minima ipsa rem in mollitia inventore laboriosam necessitatibus
          itaque.
        </CardParagraph>
      </CardContent>
      <CardFooter className="flex">
        <Button size={props.size} variant="outline" colorScheme="error">
          Delete
        </Button>
        <div className="flex-1" />
        <Button size={props.size} variant="outline">
          View here
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const WithDivide: Story = {
  render: (props) => (
    <Card {...props} className="dark:divide-secondary-700 divide-y">
      <CardHeader>
        <CardTitle size={props.size}>Customer dashboard</CardTitle>
      </CardHeader>
      <CardContent
        className={classNames(
          props.size === "sm" && "py-3",
          props.size === "md" && "py-4",
          props.size === "lg" && "py-5"
        )}
      >
        <CardParagraph size={props.size}>
          View a summary of all your customers over the last month. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Nesciunt, nam? Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Officia, eveniet
          culpa minima ipsa rem in mollitia inventore laboriosam necessitatibus
          itaque.
        </CardParagraph>
      </CardContent>
      <CardFooter className="flex">
        <Button size={props.size} variant="outline" colorScheme="error">
          Delete
        </Button>
        <div className="flex-1" />
        <Button size={props.size} variant="outline">
          View here
        </Button>
      </CardFooter>
    </Card>
  ),
};

function CardTitle(props: Pick<Card, "size" | "children">) {
  return (
    <h3
      className={classNames(
        props.size === "sm" && "text-lg",
        props.size === "md" && "text-xl",
        props.size === "lg" && "text-2xl",
        "font-semibold"
      )}
    >
      {props.children}
    </h3>
  );
}

function CardParagraph(props: Pick<Card, "size" | "children">) {
  return (
    <p
      className={classNames(
        props.size === "sm" && "text-sm",
        props.size === "md" && "text-base",
        props.size === "lg" && "text-lg",
        "font-medium"
      )}
    >
      {props.children}
    </p>
  );
}
