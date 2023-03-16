import { within, userEvent } from "@storybook/testing-library";
import { ComponentStory } from "@storybook/react";
import { Example, Examples, Grid } from "@rhinobase/docs/components";
import { Button } from "./Button";
import React from "react";

const config = {
  title: "New/Button",
  component: Button,
};
export default config;

const Template: ComponentStory<typeof Button> = (args: Button) => (
  <Grid>
    <Button {...args}>button</Button>
  </Grid>
);

export const SimpleButton = Template.bind({});

SimpleButton.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const button = canvas.getByText("button", {
    selector: "button",
  });

  await userEvent.click(button);
};

export function Default() {
  return (
    <Grid>
      <Examples title="Button style">
        <Example title="Solid">
          <div className="flex flex-col gap-1">
            <Button colorScheme="primary">Button text</Button>
            <Button colorScheme="secondary">Button text</Button>
            <Button colorScheme="error">Button text</Button>
          </div>
        </Example>
        <Example title="Outline">
          <div className="flex flex-col gap-1">
            <Button variant="outline" colorScheme="primary">
              Button text
            </Button>
            <Button variant="outline" colorScheme="secondary">
              Button text
            </Button>
            <Button variant="outline" colorScheme="error">
              Button text
            </Button>
          </div>
        </Example>
        <Example title="Ghost">
          <div className="flex flex-col gap-1">
            <Button variant="ghost" colorScheme="primary">
              Button text
            </Button>
            <Button variant="ghost" colorScheme="secondary">
              Button text
            </Button>
            <Button variant="ghost" colorScheme="error">
              Button text
            </Button>
          </div>
        </Example>
      </Examples>

      <Examples title="State">
        <Example title="Default">
          <div className="flex flex-col gap-1">
            <Button colorScheme="primary">Button text</Button>
            <Button colorScheme="secondary">Button text</Button>
            <Button colorScheme="error">Button text</Button>
            <Button colorScheme="primary" variant="outline">
              Button text
            </Button>
            <Button colorScheme="secondary" variant="outline">
              Button text
            </Button>
            <Button colorScheme="error" variant="outline">
              Button text
            </Button>
            <Button colorScheme="primary" variant="ghost">
              Button text
            </Button>
            <Button colorScheme="secondary" variant="ghost">
              Button text
            </Button>
            <Button colorScheme="error" variant="ghost">
              Button text
            </Button>
          </div>
        </Example>
        <Example title="Active">
          <div className="flex flex-col gap-1">
            <Button colorScheme="primary" active>
              Button text
            </Button>
            <Button colorScheme="secondary" active>
              Button text
            </Button>
            <Button colorScheme="error" active>
              Button text
            </Button>
            <Button colorScheme="primary" variant="outline" active>
              Button text
            </Button>
            <Button colorScheme="secondary" variant="outline" active>
              Button text
            </Button>
            <Button colorScheme="error" variant="outline" active>
              Button text
            </Button>
            <Button colorScheme="primary" variant="ghost" active>
              Button text
            </Button>
            <Button colorScheme="secondary" variant="ghost" active>
              Button text
            </Button>
            <Button colorScheme="error" variant="ghost" active>
              Button text
            </Button>
          </div>
        </Example>
        <Example title="Disabled">
          <div className="flex flex-col gap-1">
            <Button colorScheme="primary" disabled>
              Button text
            </Button>
            <Button colorScheme="secondary" disabled>
              Button text
            </Button>
            <Button colorScheme="error" disabled>
              Button text
            </Button>
            <Button colorScheme="primary" variant="outline" disabled>
              Button text
            </Button>
            <Button colorScheme="secondary" variant="outline" disabled>
              Button text
            </Button>
            <Button colorScheme="error" variant="outline" disabled>
              Button text
            </Button>
            <Button colorScheme="primary" variant="ghost" disabled>
              Button text
            </Button>
            <Button colorScheme="secondary" variant="ghost" disabled>
              Button text
            </Button>
            <Button colorScheme="error" variant="ghost" disabled>
              Button text
            </Button>
          </div>
        </Example>
        <Example title="Loading">
          <div className="flex flex-col gap-1">
            <Button colorScheme="primary" loading>
              Button text
            </Button>
            <Button colorScheme="secondary" loading>
              Button text
            </Button>
            <Button colorScheme="error" loading>
              Button text
            </Button>
            <Button colorScheme="primary" variant="outline" loading>
              Button text
            </Button>
            <Button colorScheme="secondary" variant="outline" loading>
              Button text
            </Button>
            <Button colorScheme="error" variant="outline" loading>
              Button text
            </Button>
            <Button colorScheme="primary" variant="ghost" loading>
              Button text
            </Button>
            <Button colorScheme="secondary" variant="ghost" loading>
              Button text
            </Button>
            <Button colorScheme="error" variant="ghost" loading>
              Button text
            </Button>
          </div>
        </Example>
      </Examples>

      <Examples title="Size">
        <Example title="Small (sm)">
          <Button size="sm">Button text</Button>
        </Example>
        <Example title="Medium (md)">
          <Button>Button text</Button>
        </Example>
        <Example title="Large (lg)">
          <Button size="lg">Button text</Button>
        </Example>
        <Example title="Icon (icon)">
          <Button size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </Button>
        </Example>
        <Example title="Fab (fab)">
          <Button size="fab">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </Button>
        </Example>
      </Examples>

      <Examples title="Icons">
        <Example title="Default">
          <Button>Button text</Button>
        </Example>
        <Example title="Icon left">
          <Button
            leftIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
            }
          >
            Button text
          </Button>
        </Example>
        <Example title="Icon right">
          <Button
            rightIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            }
          >
            Button text
          </Button>
        </Example>
      </Examples>
    </Grid>
  );
}
