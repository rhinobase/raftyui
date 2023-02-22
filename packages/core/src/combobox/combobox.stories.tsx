import { Grid } from "@rhinobase/docs/components";
import React, { useState } from "react";
import * as Combobox from "./Combobox";
// import "@reach/combobox/styles.css";

export default {
  title: "Forms/Combobox",
  component: Combobox,
};

const people = [
  {
    id: "1",
    icon: "D",
    name: "Durward Reynolds",
  },
  {
    id: "2",
    icon: "T",
    name: "Therese Wunsch",
  },
  {
    id: "3",
    icon: "K",
    name: "Kenton Towne",
  },
  {
    id: "4",
    icon: "B",
    name: "Benedict Kessler",
  },
  {
    id: "5",
    icon: "K",
    name: "Katelyn Rohan",
  },
];

export function Default() {
  return (
    <Grid>
      <Combobox.Root aria-label="custom option demo">
        <Combobox.Input placeholder="Custom Option Rendering" />
        <Combobox.Content>
          <Combobox.List>
            <Combobox.Item value="Apple">
              🍎
              <Combobox.ItemText />
            </Combobox.Item>
            <Combobox.Item value="Banana">
              🍌
              <Combobox.ItemText />
            </Combobox.Item>
            <Combobox.Item value="Orange">
              🍊
              <Combobox.ItemText />
            </Combobox.Item>
            <Combobox.Item value="Pineapple">
              🍍
              <Combobox.ItemText />
            </Combobox.Item>
            <Combobox.Item value="Kiwi">
              🥝
              <Combobox.ItemText />
            </Combobox.Item>
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
    </Grid>
  );
}
