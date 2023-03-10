import { Grid } from "@rhinobase/docs/components";
import React, { useState } from "react";
import * as Combobox from "./Combobox";
// import "@reach/combobox/styles.css";

const config = {
  title: "Forms/Combobox",
  component: Combobox,
};
export default config;
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
      <Combobox.SearchAutocomplete label="Search" allowsCustomValue>
        <Combobox.Item>Chatterbridge</Combobox.Item>
        <Combobox.Item>Tagchat</Combobox.Item>
        <Combobox.Item>Yambee</Combobox.Item>
        <Combobox.Item>Photobug</Combobox.Item>
        <Combobox.Item>Livepath</Combobox.Item>

        <Combobox.Item>Theodor Dawber</Combobox.Item>
        <Combobox.Item>Dwight Stollenberg</Combobox.Item>
        <Combobox.Item>Maddalena Prettjohn</Combobox.Item>
        <Combobox.Item>Maureen Fassan</Combobox.Item>
        <Combobox.Item>Abbie Binyon</Combobox.Item>
      </Combobox.SearchAutocomplete>
    </Grid>
  );
}
