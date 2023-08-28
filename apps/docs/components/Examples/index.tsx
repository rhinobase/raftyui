"use client";
import React from "react";
import { Fence } from "../Fence";
import reactElementToJSXString from "react-element-to-jsx-string";

// Examples
import { accordion_examples } from "./accordion";
import { progress_examples } from "./progress";
import { toast_examples } from "./toast";
import { toggle_group_examples } from "./toggle-group";
import { popover_examples } from "./popover";
import { radio_examples } from "./radio";
import { range_picker_examples } from "./range-picker";
import { select_examples } from "./select";
import { skeleton_examples } from "./skeleton";
import { spinner_examples } from "./spinner";
import { stat_examples } from "./stat";
import { switch_examples } from "./switch";
import { tab_examples } from "./tab";
import { table_examples } from "./table";
import { tag_examples } from "./tag";
import { tag_field_examples } from "./tag-field";
import { text_examples } from "./text";
import { textarea_examples } from "./textarea";
import { input_group_examples } from "./input-group";
import { list_examples } from "./list";
import { kbd_examples } from "./kbd";
import { menu_examples } from "./menu";

// Map
const examples: Record<string, JSX.Element> = {
  ...accordion_examples,
  ...popover_examples,
  ...progress_examples,
  ...radio_examples,
  ...range_picker_examples,
  ...select_examples,
  ...spinner_examples,
  ...skeleton_examples,
  ...stat_examples,
  ...switch_examples,
  ...tab_examples,
  ...table_examples,
  ...tag_examples,
  ...tag_field_examples,
  ...text_examples,
  ...textarea_examples,
  ...toast_examples,
  ...toggle_group_examples,
  ...toast_examples,
  ...input_group_examples,
  ...list_examples,
  ...kbd_examples,
  ...menu_examples,
};

export function Examples({ name }: { name: string }) {
  const Component = examples[name];

  if (!Component) return <div>The component example doesn&apos;t exist</div>;

  console.log(Component);

  return (
    <>
      <div>{Component}</div>
      <Fence language="jsx">{reactElementToJSXString(Component)}</Fence>
    </>
  );
}
