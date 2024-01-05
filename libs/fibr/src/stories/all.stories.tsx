import { Meta, StoryObj } from "@storybook/react";
import { AllFields } from "../fields/utils";

const meta: Meta = {
  title: "fibr / All Fields",
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => <AllFields />,
};

export const WithValues: Story = {
  render: () => (
    <AllFields
      defaultValues={{
        array_list_field: ["Lorem ipsum"],
        boolean_check_field: true,
        boolean_switch_field: true,
        string_field: "Jhon",
        string_checkbox_field: ["py-3.9", "py-3.10"],
        string_combobox_field: "py-3.10",
        string_multi_field: ["py-3.9", "py-3.10"],
        string_radio_field: "py-3.9",
        string_select_field: "py-3.9",
        number_field: 7891332800,
        number_checkbox_field: [1, 12],
        number_combobox_field: 20,
        number_multi_field: [1, 12],
        number_radio_field: 20,
        number_select_field: 30,
        date_field: new Date("2002-05-22"),
        date_time_field: "2002-05-22 11:22",
        object_field: { first_name: "John", last_name: "Cena" },
        text_field: "lorem ipsum",
        array_object_field: [{ description: "sample", on_off: true }],
      }}
    />
  ),
};
