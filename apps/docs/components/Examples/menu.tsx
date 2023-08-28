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
};
