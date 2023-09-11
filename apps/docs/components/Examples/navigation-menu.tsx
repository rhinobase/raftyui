import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuListItem,
  NavigationMenuTrigger,
} from "@rafty/ui";

export const navigation_menu_examples = {
  "navigation-menu:usage": (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuListItem href="#" title="Stitches">
              CSS-in-JS with best-in-class developer experience.
            </NavigationMenuListItem>
            <NavigationMenuListItem href="#" title="Colors">
              Beautiful, thought-out palettes with auto dark mode.
            </NavigationMenuListItem>
            <NavigationMenuListItem href="#" title="Icons">
              A crisp set of 15x15 icons, balanced and consistent.
            </NavigationMenuListItem>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
          <NavigationMenuContent className="grid grid-cols-2 w-[300px] md:w-[600px]">
            <NavigationMenuListItem title="Introduction" href="#">
              Build high-quality, accessible design systems and web apps.
            </NavigationMenuListItem>
            <NavigationMenuListItem title="Getting started" href="#">
              A quick tutorial to get you up and running with Radix Primitives.
            </NavigationMenuListItem>
            <NavigationMenuListItem title="Styling" href="#">
              Unstyled and compatible with any styling solution.
            </NavigationMenuListItem>
            <NavigationMenuListItem title="Animation" href="#">
              Use CSS keyframes or any animation library of your choice.
            </NavigationMenuListItem>
            <NavigationMenuListItem title="Accessibility" href="#">
              Tested in a range of browsers and assistive technologies.
            </NavigationMenuListItem>
            <NavigationMenuListItem title="Releases" href="#">
              Radix Primitives releases and their changelogs.
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
  ),
  "navigation-menu:size": (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
          <NavigationMenuContent
            size="sm"
            className="grid grid-cols-2 w-[300px] md:w-[600px]"
          >
            <NavigationMenuListItem href="#" title="Stitches">
              CSS-in-JS with best-in-class developer experience.
            </NavigationMenuListItem>
            <NavigationMenuListItem href="#" title="Colors">
              Beautiful, thought-out palettes with auto dark mode.
            </NavigationMenuListItem>
            <NavigationMenuListItem href="#" title="Icons">
              A crisp set of 15x15 icons, balanced and consistent.
            </NavigationMenuListItem>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
          <NavigationMenuContent className="grid grid-cols-2 w-[300px] md:w-[600px]">
            <NavigationMenuListItem title="Introduction" href="#">
              Build high-quality, accessible design systems and web apps.
            </NavigationMenuListItem>
            <NavigationMenuListItem title="Getting started" href="#">
              A quick tutorial to get you up and running with Radix Primitives.
            </NavigationMenuListItem>
            <NavigationMenuListItem title="Styling" href="#">
              Unstyled and compatible with any styling solution.
            </NavigationMenuListItem>
            <NavigationMenuListItem title="Animation" href="#">
              Use CSS keyframes or any animation library of your choice.
            </NavigationMenuListItem>
            <NavigationMenuListItem title="Accessibility" href="#">
              Tested in a range of browsers and assistive technologies.
            </NavigationMenuListItem>
            <NavigationMenuListItem title="Releases" href="#">
              Radix Primitives releases and their changelogs.
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
  ),
  "navigation-menu:barebone": (
    <NavigationMenu
      isBarebone
      className="relative z-10 flex max-w-max flex-1 items-center justify-center"
    >
      <NavigationMenuList className="m-0 p-1 flex justify-center items-center rounded-md">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="data-[state=open]:bg-secondary-100 hover:bg-secondary-100 text-secondary-600 dark:text-secondary-300 dark:data-[state=open]:bg-secondary-700/20 dark:hover:bg-secondary-700/20 group flex select-none items-center justify-between gap-1.5 rounded-md px-3 py-2 text-base font-semibold outline-none">
            Learn
          </NavigationMenuTrigger>
          <NavigationMenuContent className="max-w-2xl top-2.5 rounded-md animate-slide-down-fade dark:bg-secondary-800 absolute min-w-[220px] origin-top bg-white p-4 text-base drop-shadow-lg duration-200 grid grid-cols-2 w-[300px] md:w-[600px]">
            <NavigationMenuListItem href="#" title="Stitches">
              CSS-in-JS with best-in-class developer experience.
            </NavigationMenuListItem>
            <NavigationMenuListItem href="#" title="Colors">
              Beautiful, thought-out palettes with auto dark mode.
            </NavigationMenuListItem>
            <NavigationMenuListItem href="#" title="Icons">
              A crisp set of 15x15 icons, balanced and consistent.
            </NavigationMenuListItem>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="data-[state=open]:bg-secondary-100 hover:bg-secondary-100 text-secondary-600 dark:text-secondary-300 dark:data-[state=open]:bg-secondary-700/20 dark:hover:bg-secondary-700/20 group flex select-none items-center justify-between gap-1.5 rounded-md px-3 py-2 text-base font-semibold outline-none">
            Overview
          </NavigationMenuTrigger>
          <NavigationMenuContent className="max-w-2xl grid grid-cols-2 w-[300px] md:w-[600px] top-2.5 rounded-md animate-slide-down-fade dark:bg-secondary-800 absolute min-w-[220px] origin-top bg-white p-4 text-base drop-shadow-lg duration-200">
            <NavigationMenuListItem title="Introduction" href="#">
              Build high-quality, accessible design systems and web apps.
            </NavigationMenuListItem>
            <NavigationMenuListItem title="Getting started" href="#">
              A quick tutorial to get you up and running with Radix Primitives.
            </NavigationMenuListItem>
            <NavigationMenuListItem title="Styling" href="#">
              Unstyled and compatible with any styling solution.
            </NavigationMenuListItem>
            <NavigationMenuListItem title="Animation" href="#">
              Use CSS keyframes or any animation library of your choice.
            </NavigationMenuListItem>
            <NavigationMenuListItem title="Accessibility" href="#">
              Tested in a range of browsers and assistive technologies.
            </NavigationMenuListItem>
            <NavigationMenuListItem title="Releases" href="#">
              Radix Primitives releases and their changelogs.
            </NavigationMenuListItem>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="https://github.com/rhinobase/raftyui"
            className="hover:bg-secondary-100 text-secondary-600 dark:text-secondary-300 dark:hover:bg-secondary-700/20 flex select-none rounded-md px-3 py-2 font-semibold outline-none"
          >
            Github
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
  "navigation-menu:unstyled": (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
          <NavigationMenuContent
            isUnstyled
            className="max-w-2xl top-2.5 rounded-md animate-slide-down-fade dark:bg-secondary-800 absolute min-w-[220px] origin-top bg-white p-4 text-base drop-shadow-lg duration-200"
          >
            <NavigationMenuListItem href="#" title="Stitches">
              CSS-in-JS with best-in-class developer experience.
            </NavigationMenuListItem>
            <NavigationMenuListItem href="#" title="Colors">
              Beautiful, thought-out palettes with auto dark mode.
            </NavigationMenuListItem>
            <NavigationMenuListItem href="#" title="Icons">
              A crisp set of 15x15 icons, balanced and consistent.
            </NavigationMenuListItem>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
          <NavigationMenuContent className="grid grid-cols-2 w-[300px] md:w-[600px]">
            <NavigationMenuListItem title="Introduction" href="#">
              Build high-quality, accessible design systems and web apps.
            </NavigationMenuListItem>
            <NavigationMenuListItem title="Getting started" href="#">
              A quick tutorial to get you up and running with Radix Primitives.
            </NavigationMenuListItem>
            <NavigationMenuListItem title="Styling" href="#">
              Unstyled and compatible with any styling solution.
            </NavigationMenuListItem>
            <NavigationMenuListItem title="Animation" href="#">
              Use CSS keyframes or any animation library of your choice.
            </NavigationMenuListItem>
            <NavigationMenuListItem title="Accessibility" href="#">
              Tested in a range of browsers and assistive technologies.
            </NavigationMenuListItem>
            <NavigationMenuListItem title="Releases" href="#">
              Radix Primitives releases and their changelogs.
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
  ),
};
