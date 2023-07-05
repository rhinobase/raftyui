import { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "@rafty/date-picker";
import { ListItem, UnorderedList } from "@rafty/ui";
import { ReactNode } from "react";
import React from "react";

const meta: Meta<typeof Calendar> = {
  title: "Form / Calendar",
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: function Render() {
    const cellRender: { date: string; item: ReactNode }[] = [
      {
        date: "2023-06-26",
        item: (
          <UnorderedList>
            <ListItem className="marker:text-primary-500 dark:marker:text-primary-300">
              Item 1
            </ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem className="marker:text-primary-500 dark:marker:text-primary-300">
              Item 3
            </ListItem>
            <ListItem>Item 4</ListItem>
            <ListItem className="marker:text-primary-500 dark:marker:text-primary-300">
              Item 5
            </ListItem>
          </UnorderedList>
        ),
      },
      {
        date: "2023-06-22",
        item: (
          <UnorderedList>
            <ListItem className="marker:text-primary-500 dark:marker:text-primary-300">
              Item 1
            </ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem className="marker:text-primary-500 dark:marker:text-primary-300">
              Item 3
            </ListItem>
            <ListItem>Item 4</ListItem>
            <ListItem className="marker:text-primary-500 dark:marker:text-primary-300">
              Item 5
            </ListItem>
          </UnorderedList>
        ),
      },
    ];
    const [date, setDate] = React.useState<Date | undefined>();

    return (
      <div className="w-full">
        <Calendar selected={date} onDayClick={setDate} mode="single" />
      </div>
    );
  },
};
export const FullScreen: Story = {
  render: function Render() {
    const cellRender: JSX.Element | undefined = (
      <div className="h-full px-1 flex flex-col">
        <p className="text-right mb-1">5</p>
        <div className="overflow-y-auto flex-1 text-left">
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

    const [date, setDate] = React.useState<Date | undefined>();

    return (
      <div className="w-full -mx-20">
        <Calendar
          selected={date}
          onDayClick={setDate}
          fullScreen
          formatters={{
            formatDay: (date) =>
              date.getDate() == new Date().getDate() ? (
                cellRender
              ) : (
                <div className="w-full h-full text-right p-1">
                  {date.getDate()}
                </div>
              ),
          }}
        />
      </div>
    );
  },
};
