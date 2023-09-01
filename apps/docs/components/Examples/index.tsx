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
import { list_examples } from "./list";
import { kbd_examples } from "./kbd";
import { menu_examples } from "./menu";
import { button_examples } from "./button";
import { alert_examples } from "./alert";
import { alert_dialog_examples } from "./alert-dialog";
import { card_examples } from "./card";
import { checkbox_examples } from "./checkbox";
import { context_menu_examples } from "./context-menu";
import { date_picker_examples } from "./date-picker";
import { dialog_examples } from "./dialog";
import { drawer_examples } from "./drawer";
import { menubar_examples } from "./menubar";
import { navigation_menu_examples } from "./navigation-menu";
import { tooltip_examples } from "./tooltip";
import { password_field_examples } from "./password-field";
import { combobox_examples } from "./combobox";
import { aspect_ratio_examples } from "./aspect-ratio";
import { calendar_examples } from "./calendar";
import { field_control_examples } from "./field-control";
import { command_examples } from "./command";
import { label_examples } from "./label";
import { input_examples } from "./input-field";
import { toggle_examples } from "./toggle";
import { hover_card_examples } from "./hover-card";
import { avatar_examples } from "./avatar";
import { scroll_area_examples } from "./scroll-area";

// Map
const examples: Record<string, JSX.Element> = {
  ...accordion_examples,
  ...avatar_examples,
  ...popover_examples,
  ...progress_examples,
  ...radio_examples,
  ...range_picker_examples,
  ...select_examples,
  ...spinner_examples,
  ...command_examples,
  ...label_examples,
  ...skeleton_examples,
  ...stat_examples,
  ...switch_examples,
  ...tab_examples,
  ...table_examples,
  ...tag_examples,
  ...tag_field_examples,
  ...field_control_examples,
  ...text_examples,
  ...scroll_area_examples,
  ...textarea_examples,
  ...toast_examples,
  ...toggle_group_examples,
  ...list_examples,
  ...kbd_examples,
  ...menu_examples,
  ...button_examples,
  ...alert_examples,
  ...alert_dialog_examples,
  ...card_examples,
  ...checkbox_examples,
  ...context_menu_examples,
  ...date_picker_examples,
  ...dialog_examples,
  ...drawer_examples,
  ...input_examples,
  ...toggle_examples,
  ...hover_card_examples,
  ...menubar_examples,
  ...navigation_menu_examples,
  ...tooltip_examples,
  ...password_field_examples,
  ...combobox_examples,
  ...aspect_ratio_examples,
  ...calendar_examples,
};

export function Examples({ name }: { name: string }) {
  const Component = examples[name];

  return (
    <div className="w-full space-y-0">
      <div className="not-prose rounded-t-xl border w-full px-4 pt-4 pb-6 bg-secondary-50 dark:bg-secondary-900 dark:border-secondary-800 flex items-center justify-center">
        {Component}
      </div>
      <Fence language="jsx" className="!-mt-2">
        {reactElementToJSXString(Component)}
      </Fence>
    </div>
  );
}
