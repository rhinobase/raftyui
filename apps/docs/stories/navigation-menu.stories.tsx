import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuListItem,
  NavigationMenuTrigger,
} from "@rhino/ui";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NavigationMenu> = {
  title: "Components / NavigationMenu",
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
type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {
  render: ({ size }) => (
    <>
      <div className="h-screen w-screen">
        <NavigationMenu size={size}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Learn
                {/* <CaretDownIcon className="CaretDown" aria-hidden /> */}
              </NavigationMenuTrigger>
              <NavigationMenuContent data-cy="content" size="sm">
                <div className="grid grid-cols-1">
                  <div>
                    <NavigationMenuLink href="/">
                      <div className="flex">
                        <svg
                          aria-hidden
                          width="38"
                          height="38"
                          viewBox="0 0 25 25"
                          fill="white"
                        >
                          <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                          <path d="M12 0H4V8H12V0Z"></path>
                          <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                        </svg>
                        <div className="">Radix Primitives</div>
                        <p className="">
                          Unstyled, accessible components for React.
                        </p>
                      </div>
                    </NavigationMenuLink>
                  </div>
                  <div>
                    <NavigationMenuListItem href="#" title="Stitches">
                      CSS-in-JS with best-in-class developer experience.
                    </NavigationMenuListItem>
                    <NavigationMenuListItem href="#" title="Colors">
                      Beautiful, thought-out palettes with auto dark mode.
                    </NavigationMenuListItem>
                    <NavigationMenuListItem href="#" title="Icons">
                      A crisp set of 15x15 icons, balanced and consistent.
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
                    href="/docs/primitives/overview/introduction"
                  >
                    Build high-quality, accessible design systems and web apps.
                  </NavigationMenuListItem>
                  <NavigationMenuListItem
                    title="Getting started"
                    href="/docs/primitives/overview/getting-started"
                  >
                    A quick tutorial to get you up and running with Radix
                    Primitives.
                  </NavigationMenuListItem>
                  <NavigationMenuListItem
                    title="Styling"
                    href="/docs/primitives/overview/styling"
                  >
                    Unstyled and compatible with any styling solution.
                  </NavigationMenuListItem>
                  <NavigationMenuListItem
                    title="Animation"
                    href="/docs/primitives/overview/animation"
                  >
                    Use CSS keyframes or any animation library of your choice.
                  </NavigationMenuListItem>
                  <NavigationMenuListItem
                    title="Accessibility"
                    href="/docs/primitives/overview/accessibility"
                  >
                    Tested in a range of browsers and assistive technologies.
                  </NavigationMenuListItem>
                  <NavigationMenuListItem
                    title="Releases"
                    href="/docs/primitives/overview/releases"
                  >
                    Radix Primitives releases and their changelogs.
                  </NavigationMenuListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Makers</NavigationMenuTrigger>
              <NavigationMenuContent size="lg">
                <ul className="grid w-full grid-cols-2">
                  <NavigationMenuListItem
                    title="Introduction"
                    href="/docs/primitives/overview/introduction"
                  >
                    Build high-quality, accessible design systems and web apps.
                  </NavigationMenuListItem>
                  <NavigationMenuListItem
                    title="Getting started"
                    href="/docs/primitives/overview/getting-started"
                  >
                    A quick tutorial to get you up and running with Radix
                    Primitives.
                  </NavigationMenuListItem>
                  <NavigationMenuListItem
                    title="Styling"
                    href="/docs/primitives/overview/styling"
                  >
                    Unstyled and compatible with any styling solution.
                  </NavigationMenuListItem>
                  <NavigationMenuListItem
                    title="Animation"
                    href="/docs/primitives/overview/animation"
                  >
                    Use CSS keyframes or any animation library of your choice.
                  </NavigationMenuListItem>
                  <NavigationMenuListItem
                    title="Accessibility"
                    href="/docs/primitives/overview/accessibility"
                  >
                    Tested in a range of browsers and assistive technologies.
                  </NavigationMenuListItem>
                  <NavigationMenuListItem
                    title="Releases"
                    href="/docs/primitives/overview/releases"
                  >
                    Radix Primitives releases and their changelogs.
                  </NavigationMenuListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className="NavigationMenuLink"
                href="https://github.com/radix-ui"
              >
                Github
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuIndicator />
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  ),
};
