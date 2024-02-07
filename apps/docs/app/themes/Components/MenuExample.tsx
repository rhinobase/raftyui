import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuTrigger,
} from "@rafty/ui";
import { useThemeEditorContext } from "../Context";

export function MenuExample() {
  const { isDisabled } = useThemeEditorContext();

  return (
    <Menu isDisabled={isDisabled}>
      <MenuTrigger
        rightIcon={
          <ChevronDownIcon width={16} height={16} className="stroke-2" />
        }
        variant="ghost"
      >
        Menu
      </MenuTrigger>
      <MenuContent isArrow>
        <MenuItem>New Tab</MenuItem>
        <MenuItem>New Window</MenuItem>
        <MenuItem>New Private Window </MenuItem>
        <MenuLabel>People</MenuLabel>
        <MenuRadioGroup value="1">
          <MenuRadioItem value="1">Pedro Duarte</MenuRadioItem>
          <MenuRadioItem value="2">Colm Tuite</MenuRadioItem>
        </MenuRadioGroup>
      </MenuContent>
    </Menu>
  );
}
