import { Meta, StoryObj } from "@storybook/react";
import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
} from "../src";
import { within, userEvent, screen } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { fireEvent } from "@testing-library/dom";

const meta: Meta<typeof Menu> = {
  title: "Components / Menu",
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

type Story = StoryObj<typeof Menu>;

export const Variants: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test for menu open
    const button = canvas.getByRole("button");
    await userEvent.click(button);
    const menu = await screen.findByRole("menu");
    await expect(menu).toBeInTheDocument();

    // TODO : Test for close menu
  },

  render: ({ size }) => (
    <>
      <Menu size={size}>
        <MenuTrigger size="icon">
          All Feature
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="ml-1 h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </MenuTrigger>
        <MenuContent>
          <MenuGroup>
            <MenuItem>New Tab</MenuItem>
            <MenuItem>New Window</MenuItem>
            <MenuItem disabled>New Private Window </MenuItem>
          </MenuGroup>
          <MenuSub>
            <MenuSubTrigger style={{ justifyContent: "space-between" }}>
              More Tools{" "}
            </MenuSubTrigger>
            <MenuSubContent>
              <MenuItem className="justify-between">
                Save Page As… <div className="RightSlot">⌘+S</div>
              </MenuItem>
              <MenuItem>Create Shortcut…</MenuItem>
              <MenuItem>Name Window…</MenuItem>
              <MenuSeparator />
              <MenuItem>Developer Tools</MenuItem>
            </MenuSubContent>
          </MenuSub>
          <MenuSeparator />
          <MenuCheckboxItem defaultChecked={true} checked={true}>
            Show Bookmarks <div className="RightSlot">⌘+B</div>
          </MenuCheckboxItem>
          <MenuCheckboxItem>Show Full URLs</MenuCheckboxItem>
          <MenuSeparator />
          <MenuLabel>People</MenuLabel>
          <MenuRadioGroup value={"1"}>
            <MenuRadioItem value="1">Pedro Duarte</MenuRadioItem>
            <MenuRadioItem value="2">Colm Tuite</MenuRadioItem>
          </MenuRadioGroup>
        </MenuContent>
      </Menu>
    </>
  ),
};
