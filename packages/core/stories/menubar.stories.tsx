import { Meta, StoryObj } from "@storybook/react";
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
} from "../src";
import {
  fireEvent,
  userEvent,
  within,
  screen,
} from "@storybook/testing-library";
import { expect } from "@storybook/jest";

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

export const Variants: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    //Test for hover on menubar
    const menuitem = await canvas.findAllByRole("menuitem");
    for (let i = 0; i < menuitem.length; i++) {
      await userEvent.hover(menuitem[i]);
      await expect(menuitem[i]).toBeInTheDocument();
    }

    //Test for click on menubar
    for (let i = 0; i < menuitem.length; i++) {
      await userEvent.click(menuitem[i]);
      await expect(menuitem[i]).toBeInTheDocument();
    }

    // TODO Select a option form menuitems
  },

  render: ({ size }) => (
    <>
      <div className="flex w-full flex-row justify-between">
        <div className="w-96">
          <Menubar size={size}>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
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
              <MenubarTrigger>Edit</MenubarTrigger>

              <MenubarContent align="start">
                <MenubarItem>Undo</MenubarItem>
                <MenubarItem>Redo</MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Find</MenubarSubTrigger>

                  <MenubarSubContent alignOffset={-5}>
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
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem checked={true}>
                  Always Show Bookmarks Bar
                </MenubarCheckboxItem>
                <MenubarCheckboxItem>Always Show Full URLs</MenubarCheckboxItem>
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
              <MenubarTrigger>Profiles</MenubarTrigger>

              <MenubarContent align="start">
                <MenubarRadioGroup value="1">
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
      </div>
    </>
  ),
};
