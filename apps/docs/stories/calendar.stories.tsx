import { Meta, StoryObj } from "@storybook/react";
import { CalendarComponent } from "@rafty/date-picker";
import { ListItem, UnorderedList } from "@rafty/ui";
import { ReactNode } from "react";

const meta: Meta<typeof CalendarComponent> = {
  title: "Form / Calendar",
};

export default meta;
type Story = StoryObj<typeof CalendarComponent>;

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
    return (
      <div className="w-full">
        <CalendarComponent
          onChange={(date) => console.log(date, date.toString())}
          cellRender={cellRender}
        />
      </div>
    );
  },
};
