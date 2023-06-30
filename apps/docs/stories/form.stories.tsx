import { StoryObj } from "@storybook/react";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PhoneIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Item } from "react-stately";
import {
  InputField,
  InputGroup,
  NumberField,
  PasswordField,
  Prefix,
  Suffix,
  FieldControl,
  FieldLabel,
  Select,
  Combobox,
  ComboboxItem,
  Textarea,
  Checkbox,
  CheckboxGroup,
  RadioGroupItem,
  RadioGroup,
  Switch,
} from "@rafty/ui";
import { DatePicker, RangePicker } from "@rafty/date-picker";

const schema = z.object({
  text_input: z.string().max(255),
  date: z.date(),
  combobox: z.string(),
  password: z.string(),
  switch: z.boolean(),
  inputgroup: z.string(),
  numberfield: z.number(),
  radio: z.string(),
  checkbox: z.string(),
  checkboxgroup: z.string().array(),
  // range: z.string(),
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
    const { register, setValue, control } = useForm<z.infer<typeof schema>>({
      // mode: "onChange",
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
          <Select
            {...register("select")}
            onValueChange={(value) => setValue("select", value as string)}
          >
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
            onInputChange={(value) => setValue("combobox", value)}
          >
            <ComboboxItem key="red panda" textValue="red panda">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-red-200">RP</div>Red
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
          <NumberField
            {...register("numberfield")}
            onChange={(value) => setValue("numberfield", value)}
          />
        </FieldControl>
        <FieldControl name="date">
          <FieldLabel>Date</FieldLabel>
          <DatePicker
            {...register("date")}
            onSelect={(value) => {
              setValue("date", value!);
            }}
          />
        </FieldControl>
        <FieldControl name="range">
          <FieldLabel>Range Picker</FieldLabel>
          {/* <RangePicker {...register("range")} /> */}
        </FieldControl>
        <FieldControl name="textarea">
          <FieldLabel>Textarea</FieldLabel>
          <Textarea {...register("textarea")} />
        </FieldControl>
        <FieldControl name="checkbox">
          <FieldLabel>Checkbox</FieldLabel>
          <Checkbox
            value="red"
            {...register("checkbox")}
            onChange={(isSeleted) => isSeleted && setValue("checkbox", "red")}
          >
            Red
          </Checkbox>
          <Checkbox
            value="green"
            {...register("checkbox")}
            onChange={(isSeleted) => isSeleted && setValue("checkbox", "green")}
          >
            Green
          </Checkbox>

          <Checkbox
            value="blue"
            {...register("checkbox")}
            onChange={(isSeleted) => isSeleted && setValue("checkbox", "blue")}
          >
            Blue
          </Checkbox>
        </FieldControl>
        <FieldControl name="checkboxgroup">
          <FieldLabel>CheckboxGroup</FieldLabel>
          <CheckboxGroup
            {...register("checkboxgroup")}
            onChange={(value) => setValue("checkboxgroup", value)}
          >
            <Checkbox value="red">Red</Checkbox>
            <Checkbox value="green">Green</Checkbox>
            <Checkbox value="blue">Blue</Checkbox>
          </CheckboxGroup>
        </FieldControl>
        <FieldControl name="radio">
          <FieldLabel>radio</FieldLabel>
          <RadioGroup
            {...register("radio")}
            onValueChange={(value) => setValue("radio", value)}
          >
            <div className="flex flex-col gap-4">
              <RadioGroupItem value="ABC"> ABC</RadioGroupItem>
              <RadioGroupItem value="BCD"> BCD</RadioGroupItem>
              <RadioGroupItem value="CDE"> CDE</RadioGroupItem>
            </div>
          </RadioGroup>
        </FieldControl>
        <DevTool control={control} />
        <FieldControl name="switch">
          <FieldLabel>Switch</FieldLabel>
          <Switch
            {...register("switch")}
            onCheckedChange={(isSelected) => setValue("switch", isSelected)}
          />
        </FieldControl>
      </form>
    );
  },
};
