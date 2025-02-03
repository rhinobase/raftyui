import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch.js";

const meta: Meta<typeof Switch> = {
  title: "Form / Switch",
  args: {
    size: "md",
    defaultChecked: false,
    isReadOnly: false,
    isDisabled: false,
    isRequired: false,
    isInvalid: false,
    isLoading: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (props) => <Switch {...props} />,
};

export const WithChildren: Story = {
  render: (props) => (
    <Switch {...props} id="switch">
      Switch
    </Switch>
  ),
};
