import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ListItem, UnorderedList } from "../list";
import { Calendar } from "./Calendar";

const meta: Meta<typeof Calendar> = {
  title: "Form / Calendar",
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();

    return (
      <div className="w-full">
        <Calendar selected={date} onDayClick={setDate} mode="single" />
      </div>
    );
  },
};

export const FullScreen: Story = {
  render: () => {
    const cellRender: JSX.Element | undefined = (
      <div className="flex h-full flex-col px-1">
        <p className="mb-1 text-right">5</p>
        <div className="flex-1 overflow-y-auto text-left">
          <UnorderedList>
            <ListItem className="marker:text-success-500 dark:marker:text-success-300">
              Item 1
            </ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem className="marker:text-warning-500 dark:marker:text-warning-300">
              Item 3
            </ListItem>
            <ListItem>Item 4</ListItem>
            <ListItem className="marker:text-error-500 dark:marker:text-error-300">
              Item 5
            </ListItem>
          </UnorderedList>
        </div>
      </div>
    );

    const [date, setDate] = useState<Date | undefined>();

    return (
      <div className="-mx-20 w-full">
        <Calendar
          selected={date}
          onDayClick={setDate}
          fullScreen
          formatters={{
            formatDay: (date) =>
              date.getDate() === new Date().getDate() ? (
                cellRender
              ) : (
                <div className="size-full p-1 text-right">{date.getDate()}</div>
              ),
          }}
        />
      </div>
    );
  },
};
