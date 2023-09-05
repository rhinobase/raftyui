import { Tab, TabContent, TabList, TabTrigger } from "@rafty/ui";

export default function TabExample() {
  return (
    <Tab defaultValue="tab1">
      <TabList>
        <TabTrigger value="tab1">Tab1</TabTrigger>
        <TabTrigger value="tab2">Tab2</TabTrigger>
      </TabList>
      <TabContent value="tab1" className="p-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum deserunt
        error cupiditate nam praesentium vitae. Ratione fuga dolore sint,
        deleniti eveniet blanditiis eius quod omnis aliquid dolores id aut illo?
      </TabContent>
      <TabContent value="tab2" className="p-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
        officia tenetur assumenda ea quam, nesciunt totam explicabo amet esse.
        Fuga ullam itaque dolor molestias similique autem voluptates explicabo
        possimus enim.
      </TabContent>
    </Tab>
  );
}
