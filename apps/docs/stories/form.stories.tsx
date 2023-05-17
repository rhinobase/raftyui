import { StoryObj } from "@storybook/react";
import {
  Checkbox,
  Combobox,
  ComboboxItem,
  DatePicker,
  FieldControl,
  FieldLabel,
  InputField,
  InputGroup,
  NumberField,
  PasswordField,
  Prefix,
  Radio,
  RadioGroup,
  RangePicker,
  Select,
  Suffix,
  Textarea,
} from "@rhino/ui";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PhoneIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Item } from "react-stately";

export const schema = z.object({
  text_input: z.string().max(255),
  date: z.date(),
  combobox: z.string(),
  password: z.string(),
  switch: z.boolean(),
  inputgroup: z.string(),
  numberfield: z.number(),
  radio: z.string(),
  checkbox: z.string(),
  range: z.any(),
  select: z.string(),
  textarea: z.string(),
});

const meta = {
  title: "Form / Form-Integration",
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  render: function Render() {
    const { register, control } = useForm<z.infer<typeof schema>>({
      mode: "onChange",
      resolver: zodResolver(schema),
    });

    return (
      <form className="w-[500px]">
        <FieldControl name="input">
          <FieldLabel>Input</FieldLabel>
          <InputField {...register("text_input")} />
        </FieldControl>
        <FieldControl name="inputgroup">
          <FieldLabel>Input Group</FieldLabel>
          <InputGroup>
            <Prefix>
              <PhoneIcon className="dark:text-secondary-200 h-4 w-4 text-black" />
            </Prefix>
            <InputField {...register("inputgroup")} />
            <Suffix>
              <CheckIcon className="dark:text-secondary-200 h-4 w-4 text-black" />
            </Suffix>
          </InputGroup>
        </FieldControl>
        <FieldControl name="password">
          <FieldLabel>Password</FieldLabel>
          <PasswordField {...register("password")} />
        </FieldControl>
        <FieldControl name="select">
          <FieldLabel>Select</FieldLabel>
          <Select {...register("select")}>
            <Item key="option1">Option 1</Item>
            <Item key="option2">Option 2</Item>
            <Item key="option3">Option 3</Item>
          </Select>
        </FieldControl>
        <FieldControl name="combobox">
          <FieldLabel>ComboBox</FieldLabel>
          <Combobox
            {...register("combobox")}
            label="Favorite Animal"
            onInputChange={(value) => console.log(value)}
          >
            <ComboboxItem key="red panda" textValue="red panda">
              <div className="flex gap-2 items-center">
                <div className="rounded-full w-5 h-5 bg-red-200">RP</div>Red
                Panda
              </div>
            </ComboboxItem>
            <ComboboxItem key="cat">Cat</ComboboxItem>
            <ComboboxItem key="dog">Dog</ComboboxItem>
            <ComboboxItem key="aardvark">Aardvark</ComboboxItem>
            <ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
            <ComboboxItem key="snake">Snake</ComboboxItem>
          </Combobox>
        </FieldControl>
        <FieldControl name="numberfield">
          <FieldLabel>Number Field</FieldLabel>
          <NumberField {...register("numberfield")} />
        </FieldControl>
        <FieldControl name="date">
          <FieldLabel>Date</FieldLabel>
          <DatePicker {...register("date")} />
        </FieldControl>
        <FieldControl name="range">
          <FieldLabel>Range Picker</FieldLabel>
          <RangePicker {...register("range")} />
        </FieldControl>
        <FieldControl name="textarea">
          <FieldLabel>Textarea</FieldLabel>
          <Textarea {...register("textarea")} />
        </FieldControl>
        <FieldControl name="checkbox">
          <FieldLabel>Checkbox</FieldLabel>
          <Checkbox id="sample" value="red" {...register("checkbox")}>
            Red
          </Checkbox>
          <Checkbox value="green" {...register("checkbox")}>
            Green
          </Checkbox>

          <Checkbox value="blue" {...register("checkbox")}>
            Blue
          </Checkbox>
        </FieldControl>
        <FieldControl name="radio">
          <FieldLabel>radio</FieldLabel>
          <RadioGroup {...register("radio")}>
            <div className="flex flex-col gap-4">
              <Radio value="ABC"> ABC</Radio>
              <Radio value="BCD"> BCD</Radio>
              <Radio value="CDE"> CDE</Radio>
            </div>
          </RadioGroup>
        </FieldControl>
        <DevTool control={control} />
      </form>
    );
  },
};
