import { Thread } from "@fibr/react";
import { DevTool } from "@hookform/devtools";
import type { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { DawnBlockProvider } from "./BlockWrapper";
import type {
  CheckboxGroupProps,
  CheckboxProps,
  ColorPickerProps,
  DateFieldProps,
  GeneralWrapperProps,
  InputWrapperProps,
  NumberProps,
  PasswordProps,
  PinInputProps,
  RadioGroupProps,
  RangeSliderProps,
  RatingProps,
  SegmentedControlProps,
  SelectProps,
  SliderProps,
  StringProps,
  SwitchGroupProps,
  SwitchProps,
  TagFieldProps,
  TextareaProps,
} from "./types";

const meta: Meta = {
  title: "Blocks",
  decorators: [
    (Story) => {
      const methods = useForm();

      return (
        <FormProvider {...methods}>
          <DawnBlockProvider>
            <Story />
          </DawnBlockProvider>
        </FormProvider>
      );
    },
  ],
};

export default meta;

export const NumberField: StoryObj<
  InputWrapperProps & GeneralWrapperProps<NumberProps>
> = {
  args: {
    type: "number",
    label: "Number",
    description: "",
    required: false,
    disabled: false,
    hidden: false,
    defaultValue: 29,
    placeholder: "Enter a number",
    tooltip: "Number Field",
  },
  render: (props) => <Thread id="number" {...props} />,
};

export const CheckboxField: StoryObj<
  InputWrapperProps & GeneralWrapperProps<CheckboxProps>
> = {
  args: {
    type: "checkbox",
    label: "Checkbox",
    description: "",
    required: false,
    disabled: false,
    hidden: false,
    defaultValue: true,
    tooltip: "Checkbox Field",
    orientation: "row-reverse",
  },
  render: (props) => <Thread id="checkbox" {...props} />,
};

export const CheckboxGroupField: StoryObj<
  InputWrapperProps & GeneralWrapperProps<CheckboxGroupProps>
> = {
  args: {
    type: "checkboxGroup",
    label: "Checkbox Group",
    description: "",
    required: false,
    disabled: false,
    hidden: false,
    tooltip: "Checkbox Group Field",
    options: [
      {
        value: "1",
        label: "Option1",
      },
      {
        value: "2",
        label: "Option2",
      },
      {
        value: "3",
        label: "Option3",
      },
    ],
    defaultValue: ["3"],
  },
  render: (props) => <Thread id="checkboxGroup" {...props} />,
};

export const DateField: StoryObj<
  InputWrapperProps & GeneralWrapperProps<DateFieldProps>
> = {
  args: {
    type: "date",
    label: "Date",
    description: "",
    required: false,
    disabled: false,
    hidden: false,
    defaultValue: new Date(),
    tooltip: "Date Field",
  },
  render: (props) => <Thread id="date" {...props} />,
};

export const PasswordField: StoryObj<
  InputWrapperProps & GeneralWrapperProps<PasswordProps>
> = {
  args: {
    type: "password",
    label: "Password",
    description: "",
    required: false,
    disabled: false,
    hidden: false,
    defaultValue: "",
    placeholder: "Enter password",
    tooltip: "Password Field",
  },
  render: (props) => <Thread id="password" {...props} />,
};

export const RadioGroupField: StoryObj<
  InputWrapperProps & GeneralWrapperProps<RadioGroupProps>
> = {
  args: {
    type: "radio",
    label: "Radio Group",
    required: false,
    description: "",
    disabled: false,
    hidden: false,
    defaultValue: "3",
    tooltip: "Radio Group Field",
    options: [
      {
        value: "1",
        label: "Option1",
      },
      {
        value: "2",
        label: "Option2",
      },
      {
        value: "3",
        label: "Option3",
      },
      {
        value: "4",
        label: "Option4",
      },
    ],
  },
  render: (props) => <Thread id="radioGroup" {...props} />,
};

export const RangeSliderField: StoryObj<GeneralWrapperProps<RangeSliderProps>> =
  {
    args: {
      type: "rangeSlider",
      label: "RangeSlider",
      description: "",
      disabled: false,
      required: false,
      defaultValue: [20, 40],
      hidden: false,
      max: 100,
      min: 0,
      step: 10,
      tooltip: "Range Slider Field",
    },
    render: (props) => <Thread id="rangeSlider" {...props} />,
  };

export const SelectField: StoryObj<
  InputWrapperProps & GeneralWrapperProps<SelectProps>
> = {
  args: {
    type: "select",
    label: "Select",
    description: "",
    disabled: false,
    hidden: false,
    required: false,
    defaultValue: "js",
    placeholder: "Programming languages",
    tooltip: "Select Field",
    options: [
      {
        value: "py",
        label: "python",
      },
      {
        value: "js",
        label: "Javascript",
      },
    ],
  },
  render: (props) => <Thread id="select" {...props} />,
};

export const SliderField: StoryObj<GeneralWrapperProps<SliderProps>> = {
  args: {
    type: "slider",
    label: "Slider",
    description: "",
    disabled: false,
    required: false,
    hidden: false,
    defaultValue: 40,
    max: 100,
    min: 0,
    step: 10,
    tooltip: "Slider Field",
  },
  render: (props) => <Thread id="slider" {...props} />,
};

export const SwitchField: StoryObj<
  InputWrapperProps & GeneralWrapperProps<SwitchProps>
> = {
  args: {
    type: "switch",
    label: "Switch",
    description: "",
    disabled: false,
    hidden: false,
    required: false,
    defaultValue: true,
    tooltip: "Switch Field",
    orientation: "row-reverse",
  },
  render: (props) => <Thread id="switch" {...props} />,
};

export const SwitchGroupField: StoryObj<
  InputWrapperProps & GeneralWrapperProps<SwitchGroupProps>
> = {
  args: {
    type: "switchGroup",
    label: "Switch Group",
    description: "",
    hidden: false,
    disabled: false,
    required: false,
    defaultValue: ["2"],
    tooltip: "Switch Group Field",
    options: [
      {
        value: "1",
        label: "Option1",
      },
      {
        value: "2",
        label: "Option2",
      },
      {
        value: "3",
        label: "Option3",
      },
    ],
  },
  render: (props) => <Thread id="switchGroup" {...props} />,
};

export const TagField: StoryObj<GeneralWrapperProps<TagFieldProps>> = {
  args: {
    type: "tagField",
    label: "TagField",
    description: "",
    disabled: false,
    hidden: false,
    required: false,
    tooltip: "TagField Field",
    defaultValue: ["hello", "hmmm"],
  },
  render: (props) => <Thread id="tagField" {...props} />,
};
export const TextareaField: StoryObj<
  InputWrapperProps & GeneralWrapperProps<TextareaProps>
> = {
  args: {
    type: "textarea",
    label: "Label",
    description: "",
    required: false,
    disabled: false,
    hidden: false,
    defaultValue: "",
    placeholder: "Enter a description",
    tooltip: "Textarea Field",
  },
  render: (props) => <Thread id="textarea" {...props} />,
};

export const ObjectField = {
  render: () => {
    const blocks = {
      type: "object",
      blocks: {
        f_name: {
          type: "string",
          label: "First Name",
          required: true,
        },
        l_name: {
          type: "string",
          label: "Last Name",
        },
      },
      className: "flex justify-between gap-4",
    };

    return <Thread id="object" {...blocks} />;
  },
};

export const PermissionField = {
  render: () => {
    const blocks = {
      type: "permission",
      label: "User Permission",
      options: [
        {
          label: "Java",
          value: "java",
        },
        {
          label: "Javascript",
          value: "javascript",
        },
        {
          label: "Node JS",
          value: [
            { label: "Node 16", value: "node-16" },
            { label: "Node 18", value: "node-18" },
            { label: "Node 20", value: "node-20" },
            { label: "Node 22", value: "node-22" },
          ],
        },
        {
          label: "Python",
          value: [
            { label: "Python 3.10", value: "py-3.10" },
            { label: "Python 3.9", value: "py-3.9" },
          ],
        },
      ],
    };

    return <Thread id="permission" {...blocks} />;
  },
};

export const ReferenceField = {
  render: () => {
    const blocks = {
      type: "reference",
      label: "Reference Field",
      options: [
        {
          label: "Java",
          value: "java",
        },
        {
          label: "Javascript",
          value: "javascript",
        },
        {
          label: "Node JS",
          value: [
            { label: "Node 16", value: "node-16" },
            { label: "Node 18", value: "node-18" },
            { label: "Node 20", value: "node-20" },
            { label: "Node 22", value: "node-22" },
          ],
        },
        {
          label: "Python",
          value: [
            { label: "Python 3.10", value: "py-3.10" },
            { label: "Python 3.9", value: "py-3.9" },
          ],
        },
      ],
    };

    return <Thread id="reference" {...blocks} />;
  },
};

export const StringField: StoryObj<
  InputWrapperProps & GeneralWrapperProps<StringProps>
> = {
  args: {
    type: "string",
    label: "Sample Label",
    description: "",
    tooltip: "String Field",
    required: false,
    disabled: false,
    hidden: false,
    defaultValue: "",
    placeholder: "Enter a value",
  },
  render: (props) => <Thread id="string" {...props} />,
};

export const EmailField: StoryObj<
  InputWrapperProps & GeneralWrapperProps<StringProps>
> = {
  args: {
    type: "string",
    label: "Sample Label",
    description: "",
    tooltip: "String Field",
    required: false,
    disabled: false,
    hidden: false,
    defaultValue: "",
    placeholder: "Enter a value",
    prefixIcon: "envelope",
    inputType: "email",
  },
  render: (props) => <Thread id="email" {...props} />,
};

export const URLField: StoryObj<
  InputWrapperProps & GeneralWrapperProps<StringProps>
> = {
  args: {
    type: "string",
    label: "Sample Label",
    description: "",
    tooltip: "String Field",
    required: false,
    disabled: false,
    hidden: false,
    defaultValue: "",
    placeholder: "Enter a value",
    prefix: "Url",
    inputType: "url",
  },
  render: (props) => <Thread id="url" {...props} />,
};

export const DateTimeField: StoryObj<
  InputWrapperProps & GeneralWrapperProps<StringProps>
> = {
  args: {
    type: "string",
    label: "Sample Label",
    description: "",
    tooltip: "String Field",
    required: false,
    disabled: false,
    hidden: false,
    defaultValue: "",
    placeholder: "Enter a value",
    inputType: "datetime-local",
  },
  render: (props) => <Thread id="date-time" {...props} />,
};

export const TimeField: StoryObj<
  InputWrapperProps & GeneralWrapperProps<StringProps>
> = {
  args: {
    type: "string",
    label: "Sample Label",
    description: "",
    tooltip: "String Field",
    required: false,
    disabled: false,
    hidden: false,
    defaultValue: "",
    placeholder: "Enter a value",
    inputType: "time",
  },
  render: (props) => <Thread id="time" {...props} />,
};

export const ColorField: StoryObj<
  InputWrapperProps & GeneralWrapperProps<StringProps>
> = {
  args: {
    type: "string",
    label: "Sample Label",
    description: "",
    tooltip: "String Field",
    required: false,
    disabled: false,
    hidden: false,
    defaultValue: "",
    placeholder: "Enter a value",
    inputType: "color",
  },
  render: (props) => <Thread id="color" {...props} />,
};

export const PinField: StoryObj<GeneralWrapperProps<PinInputProps>> = {
  args: {
    type: "pinInput",
    label: "Sample Label",
    description: "",
    tooltip: "Pin Field",
    required: false,
    disabled: false,
    hidden: false,
    length: 4,
  },
  render: (props) => {
    const methods = useForm();
    const { control } = methods;

    return (
      <FormProvider {...methods}>
        <form>
          <DawnBlockProvider>
            <Thread id="pinInput" {...props} />
          </DawnBlockProvider>
          <DevTool control={control} />
        </form>
      </FormProvider>
    );
  },
};

export const RatingField: StoryObj<GeneralWrapperProps<RatingProps>> = {
  args: {
    type: "rating",
    label: "Sample Label",
    description: "",
    tooltip: "String Field",
    required: false,
    disabled: false,
    hidden: false,
    defaultValue: 3,
    count: 5,
  },

  render: (props) => <Thread id="rating" {...props} />,
};

export const ColorPickerField: StoryObj<GeneralWrapperProps<ColorPickerProps>> =
  {
    args: {
      type: "colorPicker",
      label: "Sample Label",
      description: "",
      tooltip: "Color Picker Field",
      required: false,
      disabled: false,
      defaultValue: "#3170f9",
    },

    render: (props) => <Thread id="colorPicker" {...props} />,
  };

export const SegmentField: StoryObj<
  GeneralWrapperProps<SegmentedControlProps>
> = {
  args: {
    type: "segmentedControl",
    // label: "Sample Label",
    description: "",
    tooltip: "Segment Field",
    required: false,
    disabled: false,
    defaultValue: "react",
    options: [
      { value: "react", label: "React" },
      { value: "solid", label: "Solid" },
      { value: "Svelte", label: "Svelte" },
      { value: "vue", label: "Vue" },
    ],
  },

  render: (props) => <Thread id="segmentedControl" {...props} />,
};
