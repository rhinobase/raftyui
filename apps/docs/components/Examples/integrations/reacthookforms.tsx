"use client";
import { useForm } from "react-hook-form";
import {
  FieldControl,
  Label,
  InputField,
  ErrorMessage,
  Button,
} from "@rafty/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const schema = z.object({
  name: z.string().min(4).max(50),
});

function HookForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit((values) => {
        console.log(values);
        reset();
      })}
      className="space-y-2"
    >
      <FieldControl name="name" isRequired>
        <Label>Name</Label>
        <InputField placeholder="Enter your Name" {...register("name")} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
      </FieldControl>
      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={() => reset()}>
          Reset
        </Button>
        <Button type="submit" colorScheme="primary" isLoading={isSubmitting}>
          Submit
        </Button>
      </div>
    </form>
  );
}

export const react_hook_forms_examples = {
  "react_hook_forms:usage": <HookForm />,
};
