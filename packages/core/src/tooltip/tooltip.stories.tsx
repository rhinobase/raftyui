import { HiPlus } from "react-icons/hi2";
import { Grid } from "@rhinobase/storybook/components";
import { Button } from "../button";
import Tooltip, { ITooltip } from "./Tooltip";

export default {
  title: "New/Tooltip",
  component: Tooltip,
  argTypes: {
    side: { control: "select" },
  },
};

export function Default(args: ITooltip) {
  return (
    <Grid>
      <Tooltip {...args}>
        <Button size="fab">
          <HiPlus />
        </Button>
      </Tooltip>
    </Grid>
  );
}

Default.args = {
  side: "top",
  content: "Tooltip Content",
};

// import { Canvas, Meta, Story, ArgsTable } from "@storybook/addon-docs";

// import { Examples, Example, Note, Title, Grid, CustomArgsTable } from "@rhinobase/storybook/components";
// import { Icon, Button, Tooltip } from "@rhinobase/ui";

// <Meta title="UI/Tooltip" component={Tooltip} />

// <Title title="Tooltips" suffix="Brief" subtitle="Version 1.0 — Last Update: 27 Dec 2022" />

// ## Definition

// A tooltip is a brief, informative message that appears when a user interacts with an element.

// ## Structure

// <CustomArgsTable of={Tooltip} />

// ## Example

// <Canvas>
//   <Story name="Simple">
//     <Grid>
//       <Tooltip content="Tooltip Content">
//         <Button size="fab">
//           <Icon.HiPlus />
//         </Button>
//       </Tooltip>
//     </Grid>
//   </Story>
// </Canvas>
