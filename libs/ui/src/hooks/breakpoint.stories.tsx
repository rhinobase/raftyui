import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { useBreakpointValue } from "./useBreakpointValue";

const meta: Meta<typeof useBreakpointValue> = {
  title: "Form / useBreakpointValue",
};

export default meta;
type Story = StoryObj<typeof useBreakpointValue>;

export const Default: Story = {
  render: function Story() {
    const value = useBreakpointValue({
      sm: "SM",
      md: "MD",
      lg: "LG",
      xl: "XL",
    });

    return <div>Current Breakpoint - {String(value)}</div>;
  },
};

export const Responsive: Story = {
  render: function Story() {
    const value = useBreakpointValue({
      sm: "SM",
      lg: "LG",
    });

    return <div>Current Breakpoint - {String(value)}</div>;
  },
};
