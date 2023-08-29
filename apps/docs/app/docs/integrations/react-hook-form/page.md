---
title: React Hook Form
pageTitle: React Hook Form - Rafty UI
description: React Hook Form
---

## Usage

This example shows how to build a simple form with Rafty UI's form components and the React Hook Form form library:

```jsx
import { useForm } from "react-hook-form";
import { FieldControl, Label, InputField, ErrorMessage, Button } from "@rafty/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const schema = z.object({
  name: z.string().min(4).max(50),
});

export default function HookForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof schema>>({
      resolver: zodResolver(schema),
    })


  return (
    <form onSubmit={handleSubmit((value) => console.log(value))}>
      <FieldControl name="name">
        <Label>Enter Name</Label>
        <InputField placeholder="Enter a Name" {...register("name")} />
        <ErrorMessage>{errors.name.message}</ErrorMessage>
      </FieldControl>
      <Button type="submit" colorScheme="primary" isLoading={isSubmitting}>
        Submit
      </Button>
    </form>
  );
}
```
