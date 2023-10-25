import { ReactNode } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { Fence } from "../Fence";

// Examples
import { accordion_examples } from "./accordion";
import { alert_examples } from "./alert";
import { alert_dialog_examples } from "./alert-dialog";
import { avatar_examples } from "./avatar";
import { badge_examples } from "./badge";
import { button_examples } from "./button";
import { calendar_examples } from "./calendar";
import { card_examples } from "./card";
import { checkbox_examples } from "./checkbox";
import { command_examples } from "./command";
import { context_menu_examples } from "./context-menu";
import { date_picker_examples } from "./date-picker";
import { dialog_examples } from "./dialog";
import { drawer_examples } from "./drawer";
import { field_control_examples } from "./field-control";
import { hover_card_examples } from "./hover-card";
import { input_examples } from "./input-field";
import { kbd_examples } from "./kbd";
import { label_examples } from "./label";
import { list_examples } from "./list";
import { menu_examples } from "./menu";
import { menubar_examples } from "./menubar";
import { navigation_menu_examples } from "./navigation-menu";
import { password_field_examples } from "./password-field";
import { popover_examples } from "./popover";
import { progress_examples } from "./progress";
import { radio_examples } from "./radio";
import { range_picker_examples } from "./range-picker";
import { scroll_area_examples } from "./scroll-area";
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
import { toast_examples } from "./toast";
import { toggle_group_examples } from "./toggle-group";
import { tooltip_examples } from "./tooltip";
import {
  combobox_examples,
  formik_examples,
  fibr_examples,
  react_hook_forms_examples,
  tanstack_table_examples,
} from "./integrations";

// All Examples
const examples: Record<string, JSX.Element> = {
  ...accordion_examples,
  ...alert_examples,
  ...alert_dialog_examples,
  ...avatar_examples,
  ...badge_examples,
  ...button_examples,
  ...calendar_examples,
  ...card_examples,
  ...checkbox_examples,
  ...command_examples,
  ...combobox_examples,
  ...context_menu_examples,
  ...date_picker_examples,
  ...dialog_examples,
  ...drawer_examples,
  ...field_control_examples,
  ...formik_examples,
  ...fibr_examples,
  ...hover_card_examples,
  ...input_examples,
  ...kbd_examples,
  ...label_examples,
  ...list_examples,
  ...menu_examples,
  ...menubar_examples,
  ...navigation_menu_examples,
  ...password_field_examples,
  ...popover_examples,
  ...progress_examples,
  ...radio_examples,
  ...range_picker_examples,
  ...react_hook_forms_examples,
  ...scroll_area_examples,
  ...select_examples,
  ...skeleton_examples,
  ...spinner_examples,
  ...stat_examples,
  ...switch_examples,
  ...tab_examples,
  ...table_examples,
  ...tag_examples,
  ...tag_field_examples,
  ...tanstack_table_examples,
  ...text_examples,
  ...textarea_examples,
  ...toast_examples,
  ...toggle_group_examples,
  ...tooltip_examples,
};

export function Examples({
  name,
  children,
}: {
  name: string;
  children?: ReactNode;
}) {
  const Component = examples[name] ?? <>No Component Found</>;

  return (
    <div className="w-full space-y-0">
      <div className="not-prose dark:bg-secondary-900 dark:border-secondary-800 flex w-full items-center justify-center rounded-t-xl border bg-transparent px-4 pb-6 pt-4">
        {Component}
      </div>
      {children || (
        <Fence language="jsx">{reactElementToJSXString(Component)}</Fence>
      )}
    </div>
  );
}
