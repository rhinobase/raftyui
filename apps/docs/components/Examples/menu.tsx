import {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuCheckboxItem,
  MenuLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuGroup,
} from "@rafty/ui";
import { HiOutlineChevronDown } from "react-icons/hi2";

export const menu_examples = {
  "menu:usage": (
    <Menu>
      <MenuTrigger rightIcon={<HiOutlineChevronDown />}>Actions</MenuTrigger>
      <MenuContent>
        <MenuItem>New Tab</MenuItem>
        <MenuItem>New Window</MenuItem>
        <MenuItem disabled>New Private Window </MenuItem>
        <MenuSeparator />
        <MenuCheckboxItem checked>
          Show Bookmarks <div className="RightSlot">⌘+B</div>
        </MenuCheckboxItem>
        <MenuCheckboxItem>Show Full URLs</MenuCheckboxItem>
        <MenuSeparator />
        <MenuLabel>People</MenuLabel>
        <MenuRadioGroup value="1">
          <MenuRadioItem value="1">Pedro Duarte</MenuRadioItem>
          <MenuRadioItem value="2">Colm Tuite</MenuRadioItem>
        </MenuRadioGroup>
      </MenuContent>
    </Menu>
  ),
  "menu:submenu": (
    <Menu>
      <MenuTrigger rightIcon={<HiOutlineChevronDown />}>Actions</MenuTrigger>
      <MenuContent>
        <MenuSub>
          <MenuSubTrigger style={{ justifyContent: "space-between" }}>
            More Tools
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
      </MenuContent>
    </Menu>
  ),
  "menu:menu_checkbox_item": (
    <Menu>
      <MenuTrigger rightIcon={<HiOutlineChevronDown />}>
        All Feature
      </MenuTrigger>
      <MenuContent>
        <MenuGroup>
          <MenuItem>New Tab</MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuItem disabled>New Private Window </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuCheckboxItem>
          Show Bookmarks <div className="RightSlot">⌘+B</div>
        </MenuCheckboxItem>
        <MenuCheckboxItem>Show Full URLs</MenuCheckboxItem>
      </MenuContent>
    </Menu>
  ),
  "menu:radio_group": (
    <Menu>
      <MenuTrigger rightIcon={<HiOutlineChevronDown />}>Actions</MenuTrigger>
      <MenuContent>
        <MenuItem>New Tab</MenuItem>
        <MenuItem>New Window</MenuItem>
        <MenuItem disabled>New Private Window </MenuItem>
        <MenuLabel>People</MenuLabel>
        <MenuRadioGroup value="1">
          <MenuRadioItem value="1">Pedro Duarte</MenuRadioItem>
          <MenuRadioItem value="2">Colm Tuite</MenuRadioItem>
        </MenuRadioGroup>
      </MenuContent>
    </Menu>
  ),
  "menu:barebone": (
    <Menu isBarebone>
      <MenuTrigger rightIcon={<HiOutlineChevronDown />}>Actions</MenuTrigger>
      <MenuContent>
        <MenuItem>New Tab</MenuItem>
        <MenuItem>New Window</MenuItem>
        <MenuItem disabled>New Private Window </MenuItem>
      </MenuContent>
    </Menu>
  ),
  "menu:unstyled": (
    <Menu>
      <MenuTrigger size="icon" rightIcon={<HiOutlineChevronDown />}>
        Actions
      </MenuTrigger>
      <MenuContent isUnstyled>
        <MenuItem>New Tab</MenuItem>
        <MenuItem>New Window</MenuItem>
        <MenuItem disabled>New Private Window </MenuItem>
      </MenuContent>
    </Menu>
  ),
};
