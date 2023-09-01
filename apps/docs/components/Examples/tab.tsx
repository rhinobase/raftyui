import { Tab, TabContent, TabList, TabTrigger } from "@rafty/ui";

export const tab_examples = {
  "tab:usage": (
    <Tab defaultValue="tab1">
      <TabList>
        <TabTrigger value="tab1">Tab1</TabTrigger>
        <TabTrigger value="tab2">Tab2</TabTrigger>
      </TabList>
      <TabContent value="tab1" className="p-4">
        1 large-scale networks, high-radix switches reduce hop and switch count,
        which decreases latency and power
      </TabContent>
      <TabContent value="tab2" className="p-4">
        2 large-scale networks, high-radix switches reduce hop and switch count,
        which decreases latency and power
      </TabContent>
    </Tab>
  ),

  "tab:size": (
    <Tab defaultValue="tab1" size="lg">
      <TabList>
        <TabTrigger value="tab1">Tab1</TabTrigger>
        <TabTrigger value="tab2">Tab2</TabTrigger>
      </TabList>
      <TabContent value="tab1" className="p-4">
        1 large-scale networks, high-radix switches reduce hop and switch count,
        which decreases latency and power
      </TabContent>
      <TabContent value="tab2" className="p-4">
        2 large-scale networks, high-radix switches reduce hop and switch count,
        which decreases latency and power
      </TabContent>
    </Tab>
  ),
  "tab:variant": (
    <Tab defaultValue="tab1" variant="enclosed">
      <TabList>
        <TabTrigger value="tab1">Tab1</TabTrigger>
        <TabTrigger value="tab2">Tab2</TabTrigger>
      </TabList>
      <TabContent value="tab1" className="p-4">
        1 large-scale networks, high-radix switches reduce hop and switch count,
        which decreases latency and power
      </TabContent>
      <TabContent value="tab2" className="p-4">
        2 large-scale networks, high-radix switches reduce hop and switch count,
        which decreases latency and power
      </TabContent>
    </Tab>
  ),

  "tab:Orientation": (
    <Tab defaultValue="tab1" orientation="vertical">
      <TabList>
        <TabTrigger value="tab1">Tab1</TabTrigger>
        <TabTrigger value="tab2">Tab2</TabTrigger>
      </TabList>
      <TabContent value="tab1" className="p-4">
        1 large-scale networks, high-radix switches reduce hop and switch count,
        which decreases latency and power
      </TabContent>
      <TabContent value="tab2" className="p-4">
        2 large-scale networks, high-radix switches reduce hop and switch count,
        which decreases latency and power
      </TabContent>
    </Tab>
  ),
  "tab:barebone": (
    <Tab defaultValue="tab1" isBarebone>
      <TabList>
        <TabTrigger value="tab1">Tab1</TabTrigger>
        <TabTrigger value="tab2">Tab2</TabTrigger>
      </TabList>
      <TabContent value="tab1" className="p-4">
        1 large-scale networks, high-radix switches reduce hop and switch count,
        which decreases latency and power
      </TabContent>
      <TabContent value="tab2" className="p-4">
        2 large-scale networks, high-radix switches reduce hop and switch count,
        which decreases latency and power
      </TabContent>
    </Tab>
  ),
  "tab:unstyled": (
    <Tab defaultValue="tab1">
      <TabList isUnstyled>
        <TabTrigger value="tab1">Tab1</TabTrigger>
        <TabTrigger value="tab2">Tab2</TabTrigger>
      </TabList>
      <TabContent value="tab1" className="p-4">
        1 large-scale networks, high-radix switches reduce hop and switch count,
        which decreases latency and power
      </TabContent>
      <TabContent value="tab2" className="p-4">
        2 large-scale networks, high-radix switches reduce hop and switch count,
        which decreases latency and power
      </TabContent>
    </Tab>
  ),
};
