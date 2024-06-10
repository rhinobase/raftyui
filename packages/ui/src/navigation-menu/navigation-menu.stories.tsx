import type { Meta, StoryObj } from "@storybook/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuListItem,
  NavigationMenuTrigger,
} from "./NavigationMenu";

const meta: Meta<typeof NavigationMenu> = {
  title: "Components / NavigationMenu",
  args: {
    isUnstyled: false,
  },
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {
  render: (props) => (
    <div className="size-full">
      <NavigationMenu {...props}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex">
                <div className="max-w-[200px]">
                  <NavigationMenuLink
                    href="https://rafty.rhinobase.io/"
                    className="h-full"
                  >
                    <div className="h-full space-y-2 p-2">
                      <div className="text-xl font-semibold">Rafty UI</div>
                      <p className="text-sm font-normal">
                        Building design system made easy.
                      </p>
                    </div>
                  </NavigationMenuLink>
                </div>
                <div className="flex-1">
                  <NavigationMenuListItem
                    href="https://rafty.rhinobase.io/docs/examples"
                    title="Examples"
                  >
                    A collection of example, boilerplates, and scaffolds to
                    jumpstart your next Rafty UI project.
                  </NavigationMenuListItem>
                  <NavigationMenuListItem href="/" title="Customizations">
                    You can customize and make your own theme in your
                    application through rafty.
                  </NavigationMenuListItem>
                  <NavigationMenuListItem href="/" title="Themes">
                    Hand-picked themes that you can copy and paste into your
                    apps.
                  </NavigationMenuListItem>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
            <NavigationMenuContent className="md">
              <ul className="grid grid-cols-2">
                <NavigationMenuListItem
                  title="Introduction"
                  href="https://rafty.rhinobase.io/#quick-start"
                >
                  Build high-quality, accessible design systems and web apps.
                </NavigationMenuListItem>
                <NavigationMenuListItem
                  title="Getting started"
                  href="https://rafty.rhinobase.io/#quick-start"
                >
                  A quick tutorial to get you up and running with Rafty UI.
                </NavigationMenuListItem>
                <NavigationMenuListItem
                  title="Styling"
                  href="https://rafty.rhinobase.io/themes"
                >
                  Unstyled and compatible with any styling solution.
                </NavigationMenuListItem>
                <NavigationMenuListItem
                  title="Animation"
                  href="https://rafty.rhinobase.io/docs/customizations"
                >
                  Use CSS keyframes or any animation library of your choice.
                </NavigationMenuListItem>
                <NavigationMenuListItem
                  title="Accessibility"
                  href="https://rafty.rhinobase.io/docs/customizations"
                >
                  Tested in a range of browsers and assistive technologies.
                </NavigationMenuListItem>
                <NavigationMenuListItem
                  title="Releases"
                  href="https://rafty.rhinobase.io"
                >
                  Rafty releases and their changelogs.
                </NavigationMenuListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="NavigationMenuLink"
              href="https://github.com/rhinobase/raftyui"
            >
              Github
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuIndicator />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
};
