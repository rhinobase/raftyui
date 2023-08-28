import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuListItem,
  NavigationMenuTrigger,
} from "@rafty/ui";
import { HiOutlineChevronDown } from "react-icons/hi2";

export const navigation_menu_examples = {
  "navigation-menu:usage": (
    <Menu>
      <MenuTrigger size="icon" rightIcon={<HiOutlineChevronDown />}>
        Actions
      </MenuTrigger>
      <MenuContent>
        <MenuItem>New Tab</MenuItem>
        <MenuItem>New Window</MenuItem>
        <MenuItem disabled>New Private Window </MenuItem>
      </MenuContent>
    </Menu>
  ),
  "navigation-menu:size": (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
          <NavigationMenuContent size="sm">
            <NavigationMenuLink href="/">Link</NavigationMenuLink>
            <NavigationMenuListItem href="#" title="Stitches">
              CSS-in-JS with best-in-class developer experience.
            </NavigationMenuListItem>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuIndicator />
      </NavigationMenuList>
    </NavigationMenu>
  ),
  "navigation-menu:barebone": (
    <NavigationMenu isBarebone>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
          <NavigationMenuContent size="lg">
            <NavigationMenuLink href="/">Link</NavigationMenuLink>
            <NavigationMenuListItem href="#" title="Stitches">
              CSS-in-JS with best-in-class developer experience.
            </NavigationMenuListItem>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuIndicator />
      </NavigationMenuList>
    </NavigationMenu>
  ),
  "navigation-menu:unstyled": (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
          <NavigationMenuContent isUnstyled>
            <NavigationMenuLink href="/">Link</NavigationMenuLink>
            <NavigationMenuListItem href="#" title="Stitches">
              CSS-in-JS with best-in-class developer experience.
            </NavigationMenuListItem>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuIndicator />
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
