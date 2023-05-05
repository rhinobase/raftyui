import { Meta, StoryObj } from "@storybook/react";
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
} from "../src";

const meta: Meta<typeof ContextMenu> = {
  title: "Components / ContextMenu",
  args: {
    size: "md",
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

export const Variants: Story = {
  render: ({ size }) => (
    <>
      <ContextMenu size={size}>
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
          <ContextMenuCheckboxItem>Show Bookmarks</ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked>
            Show Full URLs
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuLabel>People</ContextMenuLabel>
          <ContextMenuRadioGroup value="1">
            <ContextMenuRadioItem value="1">Jack</ContextMenuRadioItem>
            <ContextMenuRadioItem value="2">Denial</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    </>
  ),
};
