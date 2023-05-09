import { Meta, StoryObj } from "@storybook/react";
import { DatePicker, FieldControl } from "../src";
import { userEvent, within, screen } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof DatePicker> = {
  title: "Components / DatePicker",
  args: {
    picker: "date",
  },
  argTypes: {
    picker: {
      control: "select",
      options: ["date", "month", "year"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Variants: Story = {
  play: async ({ canvasElement }) => {
    const canvas = await within(canvasElement);

    const datepicker = canvas.getByPlaceholderText("Select a date");
    await userEvent.click(datepicker);

    const current_date = "10";
    const current_month = new Date().getMonth() + 1;
    const current_year = new Date().getFullYear();

    // Test for picking date
    const date = screen.getByText(current_date);
    await userEvent.click(date);
    await expect(datepicker).toHaveValue(
      `0${current_month}/${current_date}/${current_year}`
    );
  },
  render: ({ picker }) => (
    <>
      <div className="w-[300px]">
        <FieldControl name="date">
          <DatePicker
            onSelect={(value) => console.log(value)}
            picker={picker}
          />
        </FieldControl>
      </div>
    </>
  ),
};
