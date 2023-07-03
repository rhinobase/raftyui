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
  PasswordField,
  Prefix,
  Suffix,
  FieldControl,
  Label,
  Select,
  Combobox,
  Textarea,
  Checkbox,
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
          <Label>Input</Label>
          <InputField {...register("text_input")} />
        </FieldControl>
        <FieldControl name="inputgroup">
          <Label>Input Group</Label>
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
          <Label>Password</Label>
          <PasswordField {...register("password")} />
        </FieldControl>
        <FieldControl name="select">
          <Label>Select</Label>
          <Select {...register("select")}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FieldControl>
        {/* <FieldControl name="combobox">
          <Label>ComboBox</Label>
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
        </FieldControl> */}
        <FieldControl name="numberfield">
          <Label>Number Field</Label>
          <InputField
            {...register("numberfield")}
            type="number"
            inputMode="numeric"
          />
        </FieldControl>
        <FieldControl name="date">
          <Label>Date</Label>
          <DatePicker
            {...register("date")}
            onSelect={(value) => {
              setValue("date", value!);
            }}
          />
        </FieldControl>
        <FieldControl name="range">
          <Label>Range Picker</Label>
          {/* <RangePicker {...register("range")} /> */}
        </FieldControl>
        <FieldControl name="textarea">
          <Label>Textarea</Label>
          <Textarea {...register("textarea")} />
        </FieldControl>
        <FieldControl name="checkbox">
          <Label>Checkbox</Label>
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
        <FieldControl name="radio">
          <Label>radio</Label>
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
          <Label>Switch</Label>
          <Switch
            {...register("switch")}
            onCheckedChange={(isSelected) => setValue("switch", isSelected)}
          />
        </FieldControl>
      </form>
    );
  },
};
