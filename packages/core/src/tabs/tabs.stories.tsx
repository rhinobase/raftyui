import * as TabsPrimitive from "@radix-ui/react-tabs";
import { Grid } from "@rhinobase/storybook/components";
import { Tab, TabContent, Tabs, TabsList } from "./Tabs";
import { TabContext } from "./context";

export default {
  title: "New/Tabs",
  component: Tabs,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    orientation: { control: "select" },
  },
};

export function Default({ size = "sm", orientation = "horizontal" }: TabContext & TabsPrimitive.TabsProps) {
  return (
    <Grid>
      <div className="w-[640px] rounded-md border p-4 dark:border-zinc-700">
        <Tabs defaultValue="tab1" size={size} orientation={orientation}>
          <TabsList>
            <Tab value="tab1">Tab1</Tab>
            <Tab value="tab2" disabled>
              Tab2
            </Tab>
            <Tab value="tab3">Tab2</Tab>
          </TabsList>
          <TabContent value="tab1" className="p-4">
            1 large-scale networks, high-radix switches reduce hop and switch count, which decreases latency
            and power
          </TabContent>
          <TabContent value="tab3" className="p-4">
            2 large-scale networks, high-radix switches reduce hop and switch count, which decreases latency
            and power
          </TabContent>
        </Tabs>
      </div>
      <div className="font-medium">variant="enclosed"</div>
      <div className="w-[640px] rounded-md border p-4 dark:border-zinc-700">
        <Tabs defaultValue="tab1" size={size} orientation={orientation} variant="enclosed">
          <TabsList>
            <Tab value="tab1">Tab1</Tab>
            <Tab value="tab2">Tab2</Tab>
          </TabsList>
          <TabContent value="tab1" className="p-4">
            1 large-scale networks, high-radix switches reduce hop and switch count, which decreases latency
            and power
          </TabContent>
          <TabContent value="tab2" className="p-4">
            2 large-scale networks, high-radix switches reduce hop and switch count, which decreases latency
            and power
          </TabContent>
        </Tabs>
      </div>
    </Grid>
  );
}

export function VerticalTabs() {
  return (
    <Grid>
      <div className="w-[640px] rounded-md border dark:border-zinc-800">
        <Tabs defaultValue="tab1" orientation="vertical">
          <TabsList>
            <Tab value="tab1">Tab1</Tab>
            <Tab value="tab2">Tab2</Tab>
          </TabsList>
          <TabContent value="tab1" className="w-[320px]">
            1 large-scale networks, high-radix switches reduce hop and switch count, which decreases latency
            and power
          </TabContent>
          <TabContent value="tab2">
            2 large-scale networks, high-radix switches reduce hop and switch count, which decreases latency
            and power
          </TabContent>
        </Tabs>
      </div>
    </Grid>
  );
}
