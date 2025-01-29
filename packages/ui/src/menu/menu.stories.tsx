import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
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
} from "./Menu.js";

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

export const Default: Story = {
  render: ({ size }) => {
    const [bookmarksChecked, setBookmarksChecked] = useState(true);
    const [urlsChecked, setUrlsChecked] = useState(false);
    const [person, setPerson] = useState("1");
    return (
      <Menu size={size}>
        <MenuTrigger
          size={size}
          rightIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-4"
            >
              <title>all feature</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          }
        >
          All Feature
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
          <MenuCheckboxItem
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            Show Bookmarks <div className="RightSlot">⌘+B</div>
          </MenuCheckboxItem>
          <MenuCheckboxItem
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            Show Full URLs
          </MenuCheckboxItem>
          <MenuSeparator />
          <MenuLabel>People</MenuLabel>
          <MenuRadioGroup value={person} onValueChange={setPerson}>
            <MenuRadioItem value="1">Pedro Duarte</MenuRadioItem>
            <MenuRadioItem value="2">Colm Tuite</MenuRadioItem>
          </MenuRadioGroup>
        </MenuContent>
      </Menu>
    );
  },
};
