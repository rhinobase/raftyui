import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta, StoryObj } from "@storybook/react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../button";
import { ErrorMessage } from "../error-message";
import { FieldControl } from "../field-control";
import { Label } from "../label";
import { RadioGroup, RadioGroupItem } from "./Radio";

const meta: Meta<typeof RadioGroup> = {
  title: "Form / Radio",
  args: {
    size: "md",
    isDisabled: false,
    isRequired: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

const schema = z.object({
  radio: z.string(),
});

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: ({ size, isDisabled, isRequired }) => {
    const {
      handleSubmit,
      control,
      formState: { errors },
    } = useForm<z.infer<typeof schema>>({
      resolver: zodResolver(schema),
    });

    return (
      <form
        className="space-y-5"
        onSubmit={handleSubmit(console.log, console.error)}
      >
        <FieldControl name="radio" isRequired>
          <Label>Radio Group</Label>
          <Controller
            name="radio"
            control={control}
            render={({ field: { name, value, onChange, ref } }) => (
              <RadioGroup
                id={name}
                size={size}
                isDisabled={isDisabled}
                value={value}
                onValueChange={onChange}
                ref={ref}
              >
                <RadioGroupItem value="default" id="radio.default">
                  Default
                </RadioGroupItem>
                <RadioGroupItem value="comfortable" id="radio.comfortable">
                  Comfortable
                </RadioGroupItem>
                <RadioGroupItem value="compact" id="radio.compact">
                  Compact
                </RadioGroupItem>
              </RadioGroup>
            )}
          />
          <ErrorMessage>{errors.radio?.message}</ErrorMessage>
        </FieldControl>
        <Button type="submit" colorScheme="primary">
          Submit
        </Button>
      </form>
    );
  },
};
