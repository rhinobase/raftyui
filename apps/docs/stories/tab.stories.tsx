import { Tab, TabTrigger, TabList, TabContent } from "@rhino/tab";

const config = {
  title: "Components / Tabs",
  component: Tab,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    orientation: { control: "select" },
  },
};
export default config;

export function Default({ size = "sm", orientation = "horizontal" }: Tab) {
  return (
    <>
      <div className="w-[640px] rounded-md border py-2 dark:border-zinc-700">
        <Tab defaultValue="tab1" size={size} orientation={orientation}>
          <TabList>
            <TabTrigger value="tab1">Tab1</TabTrigger>
            <TabTrigger value="tab2" disabled>
              Tab2
            </TabTrigger>
            <TabTrigger value="tab3">Tab2</TabTrigger>
          </TabList>
          <TabContent value="tab1" className="p-4">
            1 large-scale networks, high-radix switches reduce hop and switch
            count, which decreases latency and power
          </TabContent>
          <TabContent value="tab3" className="p-4">
            2 large-scale networks, high-radix switches reduce hop and switch
            count, which decreases latency and power
          </TabContent>
        </Tab>
      </div>
      <div className="font-medium">variant=enclosed</div>
      <div className="w-[640px] rounded-md">
        <Tab
          defaultValue="tab1"
          size={size}
          orientation={orientation}
          variant="enclosed"
        >
          <TabList>
            <TabTrigger value="tab1">Tab1</TabTrigger>
            <TabTrigger value="tab2">Tab2</TabTrigger>
          </TabList>
          <TabContent value="tab1" className="p-4">
            1 large-scale networks, high-radix switches reduce hop and switch
            count, which decreases latency and power
          </TabContent>
          <TabContent value="tab2" className="p-4">
            2 large-scale networks, high-radix switches reduce hop and switch
            count, which decreases latency and power
          </TabContent>
        </Tab>
      </div>
    </>
  );
}

export function VerticalTabs({ size = "sm", orientation = "vertical" }: Tab) {
  return (
    <>
      <div className="flex h-full min-h-[400px] w-full max-w-4xl rounded-md border dark:border-zinc-800">
        <Tab size={size} defaultValue="tab1" orientation={orientation}>
          <TabList>
            <TabTrigger value="tab1">Tab1</TabTrigger>
            <TabTrigger value="tab2">Tabsecondary2</TabTrigger>
          </TabList>
          <TabContent value="tab1">
            1 large-scale networks, high-radix switches reduce hop and switch
            count, which decreases latency and power
          </TabContent>
          <TabContent value="tab2">
            2 large-scale networks, high-radix switches reduce hop and switch
            count, which decreases latency and power
          </TabContent>
        </Tab>
      </div>
      <div className="font-medium">variant=enclosed</div>
      <div className="mx-auto flex min-h-[400px] w-full max-w-4xl">
        <Tab
          size={size}
          defaultValue="tab1"
          orientation={orientation}
          variant="enclosed"
        >
          <TabList>
            <TabTrigger value="tab1">Tab1</TabTrigger>
            <TabTrigger value="tab2">Tabsecondary2</TabTrigger>
          </TabList>
          <TabContent value="tab1">
            1 large-scale networks, high-radix switches reduce hop and switch
            count, which decreases latency and power
          </TabContent>
          <TabContent value="tab2">
            2 large-scale networks, high-radix switches reduce hop and switch
            count, which decreases latency and power
          </TabContent>
        </Tab>
      </div>
    </>
  );
}
