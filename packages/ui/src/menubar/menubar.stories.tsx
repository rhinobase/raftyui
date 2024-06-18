import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "./Menubar";

const meta: Meta<typeof Menubar> = {
  title: "Components / Menubar",
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
type Story = StoryObj<typeof Menubar>;

export const Default: Story = {
  render: ({ size }) => {
    const [bookmarksChecked, setBookmarksChecked] = useState(true);
    const [fullUrlChecked, setFullUrlChecked] = useState(true);
    const [person, setPerson] = useState("1");
    return (
      <div className="w-96">
        <Menubar size={size}>
          <MenubarMenu>
            <MenubarTrigger size={size}>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New Tab</MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarItem disabled>New Incognito Window</MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Share</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Email Link</MenubarItem>
                  <MenubarItem>Messages</MenubarItem>
                  <MenubarItem>Notes</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger size={size}>Edit</MenubarTrigger>

            <MenubarContent align="start">
              <MenubarItem>Undo</MenubarItem>
              <MenubarItem>Redo</MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Find</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Search the web…</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Find…</MenubarItem>
                  <MenubarItem>Find Next</MenubarItem>
                  <MenubarItem>Find Previous</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger size={size}>View</MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem
                checked={bookmarksChecked}
                onCheckedChange={setBookmarksChecked}
              >
                Always Show Bookmarks Bar
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                checked={fullUrlChecked}
                onCheckedChange={setFullUrlChecked}
              >
                Always Show Full URLs
              </MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarItem>Reload</MenubarItem>
              <MenubarItem disabled>Force Reload</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Toggle Fullscreen</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Hide Sidebar</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger size={size}>Profiles</MenubarTrigger>

            <MenubarContent align="start">
              <MenubarRadioGroup value={person} onValueChange={setPerson}>
                <MenubarRadioItem value="1">Andy</MenubarRadioItem>
                <MenubarRadioItem value="2">Benolt</MenubarRadioItem>
                <MenubarRadioItem value="3">Luis</MenubarRadioItem>
                <MenubarSeparator />
                <MenubarItem>Edit…</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Add Profile…</MenubarItem>
              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    );
  },
};
