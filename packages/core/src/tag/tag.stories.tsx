import { within, userEvent } from "@storybook/testing-library";
import { ComponentStory } from "@storybook/react";
import { Example, Examples, Grid } from "@rhinobase/docs/components";
import { Tag } from "./Tag";
import React from "react";

const config = {
  title: "New/Tag",
  component: Tag,
};
export default config;

export function Default() {
  return (
    <Grid>
      <Examples title="Tag style">
        <Example title="ColorSchemes">
          <div className="space-y-2">
            <Tag colorScheme="primary">Tag text</Tag>
            <Tag colorScheme="secondary">Tag text</Tag>
            <Tag colorScheme="error">Tag text</Tag>
            <Tag colorScheme="success">Tag text</Tag>
            <Tag colorScheme="warning">Tag Text</Tag>
          </div>
        </Example>
        <Example title="Size">
          <div className="space-y-2">
            <Tag size="sm">Tag text</Tag>
            <Tag>Tag text</Tag>
            <Tag size="lg">Tag text</Tag>
          </div>
        </Example>
      </Examples>
    </Grid>
  );
}
