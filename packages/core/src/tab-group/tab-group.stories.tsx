import { Grid } from "@rhinobase/storybook/components/Grid";
import { TabGroup, TabGroupItem } from "@rhinobase/ui";

export default {
  title: "New/Tab Group",
  components: TabGroup,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export function Default() {
  return (
    <Grid>
      <TabGroup defaultValue="1">
        <TabGroupItem value="1">1</TabGroupItem>
        <TabGroupItem value="2">2</TabGroupItem>
        <TabGroupItem value="3">3</TabGroupItem>
      </TabGroup>
      <p className="text-lg dark:text-zinc-200">Size: "sm"</p>
      <TabGroup defaultValue="1" size="sm">
        <TabGroupItem value="1">1</TabGroupItem>
        <TabGroupItem value="2">2</TabGroupItem>
        <TabGroupItem value="3">3</TabGroupItem>
      </TabGroup>
      <p className="text-lg dark:text-zinc-200">Size: "md"</p>
      <TabGroup defaultValue="1" size="md">
        <TabGroupItem value="1">1</TabGroupItem>
        <TabGroupItem value="2">2</TabGroupItem>
        <TabGroupItem value="3">3</TabGroupItem>
      </TabGroup>
      <p className="text-lg dark:text-zinc-200">Size: "lg"</p>
      <TabGroup defaultValue="1" size="lg">
        <TabGroupItem value="1">1</TabGroupItem>
        <TabGroupItem value="2">2</TabGroupItem>
        <TabGroupItem value="3">3</TabGroupItem>
      </TabGroup>
    </Grid>
  );
}
