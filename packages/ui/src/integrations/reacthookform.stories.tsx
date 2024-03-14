import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "../button";
import { ErrorMessage } from "../error-message";
import { FieldControl } from "../field-control";
import { InputField } from "../input-field";
import { Label } from "../label";

const schema = z.object({
  name: z.string().min(4).max(50),
});
const meta: Meta = {
  title: "Integration / React Hook Form",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const {
      handleSubmit,
      register,
      reset,
      formState: { errors, isSubmitting },
    } = useForm({
      resolver: zodResolver(schema),
    });

    return (
      <form
        onSubmit={handleSubmit((values) => console.log(values))}
        className="space-y-4 p-4"
      >
        <FieldControl name="name" isRequired>
          <Label>Name</Label>
          <InputField placeholder="Enter your Name" {...register("name")} />
          <ErrorMessage>
            {errors.name && String(errors.name.message)}
          </ErrorMessage>
        </FieldControl>
        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={reset}>
            Reset
          </Button>
          <Button type="submit" colorScheme="primary" isLoading={isSubmitting}>
            Submit
          </Button>
        </div>
      </form>
    );
  },
};
