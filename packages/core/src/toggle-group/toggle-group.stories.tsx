import { Grid } from "@rhinobase/storybook/components/Grid";
import { ToggleGroup, ToggleItem } from "@rhinobase/ui";

export default {
  title: "New/Toggle Group",
  components: ToggleGroup,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export function Default() {
  return (
    <Grid>
      <div className="flex w-80 flex-col gap-6">
        <ToggleGroup type="single" defaultValue="1">
          <ToggleItem value="1">1</ToggleItem>
          <ToggleItem value="2">2</ToggleItem>
          <ToggleItem value="3">3</ToggleItem>
        </ToggleGroup>
        <div className="text-center font-medium">size: sm, md, lg</div>
        <ToggleGroup type="single" defaultValue="1" size="sm">
          <ToggleItem value="1">1</ToggleItem>
          <ToggleItem value="2">2</ToggleItem>
          <ToggleItem value="3">3</ToggleItem>
        </ToggleGroup>
        <ToggleGroup type="single" defaultValue="1">
          <ToggleItem value="1">1</ToggleItem>
          <ToggleItem value="2">2</ToggleItem>
          <ToggleItem value="3">3</ToggleItem>
        </ToggleGroup>
        <ToggleGroup type="single" defaultValue="1" size="lg">
          <ToggleItem value="1">1</ToggleItem>
          <ToggleItem value="2">2</ToggleItem>
          <ToggleItem value="3">3</ToggleItem>
        </ToggleGroup>
      </div>
    </Grid>
  );
}
