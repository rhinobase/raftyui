import { Grid } from "@rhinobase/docs/components";
import * as NavigationMenu from "./NavigationMenu";
import React from "react";

const config = {
  title: "New/Navigation Menu",
  component: NavigationMenu,
};
export default config;

export function Default() {
  return (
    <Grid>
      <div className="h-screen w-screen">
        <NavigationMenu.Root>
          <NavigationMenu.List>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger>
                Learn
                {/* <CaretDownIcon className="CaretDown" aria-hidden /> */}
              </NavigationMenu.Trigger>
              <NavigationMenu.Content size="sm">
                <div className="grid grid-cols-1">
                  <div>
                    <NavigationMenu.Link href="/">
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
                    </NavigationMenu.Link>
                  </div>
                  <div>
                    <NavigationMenu.ListItem
                      href="https://stitches.dev/"
                      title="Stitches"
                    >
                      CSS-in-JS with best-in-class developer experience.
                    </NavigationMenu.ListItem>
                    <NavigationMenu.ListItem href="/colors" title="Colors">
                      Beautiful, thought-out palettes with auto dark mode.
                    </NavigationMenu.ListItem>
                    <NavigationMenu.ListItem
                      href="https://icons.radix-ui.com/"
                      title="Icons"
                    >
                      A crisp set of 15x15 icons, balanced and consistent.
                    </NavigationMenu.ListItem>
                  </div>
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Trigger>Overview</NavigationMenu.Trigger>
              <NavigationMenu.Content className="md">
                <ul className="grid grid-cols-2">
                  <NavigationMenu.ListItem
                    title="Introduction"
                    href="/docs/primitives/overview/introduction"
                  >
                    Build high-quality, accessible design systems and web apps.
                  </NavigationMenu.ListItem>
                  <NavigationMenu.ListItem
                    title="Getting started"
                    href="/docs/primitives/overview/getting-started"
                  >
                    A quick tutorial to get you up and running with Radix
                    Primitives.
                  </NavigationMenu.ListItem>
                  <NavigationMenu.ListItem
                    title="Styling"
                    href="/docs/primitives/overview/styling"
                  >
                    Unstyled and compatible with any styling solution.
                  </NavigationMenu.ListItem>
                  <NavigationMenu.ListItem
                    title="Animation"
                    href="/docs/primitives/overview/animation"
                  >
                    Use CSS keyframes or any animation library of your choice.
                  </NavigationMenu.ListItem>
                  <NavigationMenu.ListItem
                    title="Accessibility"
                    href="/docs/primitives/overview/accessibility"
                  >
                    Tested in a range of browsers and assistive technologies.
                  </NavigationMenu.ListItem>
                  <NavigationMenu.ListItem
                    title="Releases"
                    href="/docs/primitives/overview/releases"
                  >
                    Radix Primitives releases and their changelogs.
                  </NavigationMenu.ListItem>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Trigger>Makers</NavigationMenu.Trigger>
              <NavigationMenu.Content size="lg">
                <ul className="grid w-full grid-cols-2">
                  <NavigationMenu.ListItem
                    title="Introduction"
                    href="/docs/primitives/overview/introduction"
                  >
                    Build high-quality, accessible design systems and web apps.
                  </NavigationMenu.ListItem>
                  <NavigationMenu.ListItem
                    title="Getting started"
                    href="/docs/primitives/overview/getting-started"
                  >
                    A quick tutorial to get you up and running with Radix
                    Primitives.
                  </NavigationMenu.ListItem>
                  <NavigationMenu.ListItem
                    title="Styling"
                    href="/docs/primitives/overview/styling"
                  >
                    Unstyled and compatible with any styling solution.
                  </NavigationMenu.ListItem>
                  <NavigationMenu.ListItem
                    title="Animation"
                    href="/docs/primitives/overview/animation"
                  >
                    Use CSS keyframes or any animation library of your choice.
                  </NavigationMenu.ListItem>
                  <NavigationMenu.ListItem
                    title="Accessibility"
                    href="/docs/primitives/overview/accessibility"
                  >
                    Tested in a range of browsers and assistive technologies.
                  </NavigationMenu.ListItem>
                  <NavigationMenu.ListItem
                    title="Releases"
                    href="/docs/primitives/overview/releases"
                  >
                    Radix Primitives releases and their changelogs.
                  </NavigationMenu.ListItem>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="NavigationMenuLink"
                href="https://github.com/radix-ui"
              >
                Github
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Indicator />
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    </Grid>
  );
}

export function FullScreen() {
  const engagement = [
    { name: "About", href: "#", icon: "" },
    { name: "Customers", href: "#", icon: "UsersIcon" },
    { name: "Press", href: "#", icon: "NewspaperIcon" },
    { name: "Careers", href: "#", icon: "BriefcaseIcon" },
    { name: "Privacy", href: "#", icon: "ShieldCheckIcon" },
  ];
  const resources = [
    { name: "Community", href: "#", icon: "UserGroupIcon" },
    { name: "Partners", href: "#", icon: "GlobeAltIcon" },
    { name: "Guides", href: "#", icon: "BookOpenIcon" },
    { name: "Webinars", href: "#", icon: "VideoCameraIcon" },
  ];
  const recentPosts = [
    {
      id: 1,
      title: "Boost your conversion rate",
      href: "#",
      date: "Mar 16, 2023",
      datetime: "2023-03-16",
      category: { title: "Marketing", href: "#" },
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      description:
        "Et et dolore officia quis nostrud esse aute cillum irure do esse. Eiusmod ad deserunt cupidatat est magna Lorem.",
    },
    {
      id: 2,
      title: "How to use search engine optimization to drive sales",
      href: "#",
      date: "Mar 10, 2023",
      datetime: "2023-03-10",
      category: { title: "Sales", href: "#" },
      imageUrl:
        "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
      description:
        "Optio cum necessitatibus dolor voluptatum provident commodi et.",
    },
  ];
  return (
    <Grid>
      <div className="relative h-screen w-screen">
        <NavigationMenu.Root>
          <NavigationMenu.List>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger>Full Width</NavigationMenu.Trigger>
              <NavigationMenu.Content size="full">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-10 gap-x-8 py-10 px-6 lg:grid-cols-2 lg:px-8">
                  <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8">
                    <div>
                      <h3 className="text-sm font-medium leading-6 text-gray-500">
                        Engagement
                      </h3>
                      <div className="mt-6 flow-root">
                        <div className="-my-2">
                          {engagement.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900"
                            >
                              {/* <item.icon
                              className="h-6 w-6 flex-none text-gray-400"
                              aria-hidden="true"
                            /> */}
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium leading-6 text-gray-500">
                        Resources
                      </h3>
                      <div className="mt-6 flow-root">
                        <div className="-my-2">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900"
                            >
                              {/* <item.icon
                              className="h-6 w-6 flex-none text-gray-400"
                              aria-hidden="true"
                            /> */}
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-2">
                    <h3 className="sr-only">Recent posts</h3>
                    {recentPosts.map((post) => (
                      <article
                        key={post.id}
                        className="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch"
                      >
                        <div className="relative flex-none">
                          <img
                            className="aspect-[2/1] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[16/9] sm:h-32 lg:h-auto"
                            src={post.imageUrl}
                            alt=""
                          />
                          <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
                        </div>
                        <div>
                          <div className="flex items-center gap-x-4">
                            <time
                              dateTime={post.datetime}
                              className="text-sm leading-6 text-gray-600"
                            >
                              {post.date}
                            </time>
                            <a
                              href={post.category.href}
                              className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 text-xs font-medium text-gray-600 hover:bg-gray-100"
                            >
                              {post.category.title}
                            </a>
                          </div>
                          <h4 className="mt-2 text-sm font-semibold leading-6 text-gray-900">
                            <a href={post.href}>
                              <span className="absolute inset-0" />
                              {post.title}
                            </a>
                          </h4>
                          <p className="mt-2 text-sm leading-6 text-gray-600">
                            {post.description}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    </Grid>
  );
}
