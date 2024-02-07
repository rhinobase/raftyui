import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuListItem,
  NavigationMenuTrigger,
} from "@rafty/ui";
import { useThemeEditorContext } from "../Context";

export function NavigationMenuExample() {
  const { isDisabled } = useThemeEditorContext();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger disabled={isDisabled}>
            Learn
          </NavigationMenuTrigger>
          <NavigationMenuContent size="sm">
            <NavigationMenuListItem href="#" title="Stitches">
              CSS-in-JS with best-in-class developer experience.
            </NavigationMenuListItem>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger disabled={isDisabled}>
            Overview
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuListItem title="Styling" href="#">
              Unstyled and compatible with any styling solution.
            </NavigationMenuListItem>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="https://github.com/rhinobase/raftyui">
            Github
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
