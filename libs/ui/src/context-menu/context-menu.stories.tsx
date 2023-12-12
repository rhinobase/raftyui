import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "./ContextMenu";

const meta: Meta<typeof ContextMenu> = {
  title: "Components / ContextMenu",
  args: {
    size: "md",
    isUnstyled: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  render: function Render({ size, isUnstyled }) {
    const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
    const [urlsChecked, setUrlsChecked] = React.useState(false);
    const [person, setPerson] = React.useState("1");

    return (
      <ContextMenu size={size} isUnstyled={isUnstyled}>
        <ContextMenuTrigger>
          <div className="border border-dashed p-5 text-center dark:border-zinc-700 dark:text-zinc-100">
            Context
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Back</ContextMenuItem>
          <ContextMenuItem disabled>Forward</ContextMenuItem>
          <ContextMenuItem>Reload</ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>Save Page As...</ContextMenuItem>
              <ContextMenuItem>Create Shortcut...</ContextMenuItem>
              <ContextMenuItem>New Window...</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Developer Tools</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            Show Bookmarks
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            Show Full URLs
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuLabel>People</ContextMenuLabel>
          <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
            <ContextMenuRadioItem value="1">Jack</ContextMenuRadioItem>
            <ContextMenuRadioItem value="2">Denial</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    );
  },
};
