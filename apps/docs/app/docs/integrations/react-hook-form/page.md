---
title: React Hook Form
pageTitle: React Hook Form - Rafty UI
description: React Hook Form
---

## Import

This example shows how to build a simple form with Rafty UI's form components and the React Hook Form form library:

```jsx
import { useForm } from "react-hook-form";
import { FieldControl, Label, InputField, ErrorMessage, Button } from "@rafty/ui";
export default function HookForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldControl isInvalid={errors.name}>
        <Label htmlFor="name">First name</Label>
        <InputField
          id="name"
          placeholder="name"
          {...register("name", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <ErrorMessage>{errors.name && errors.name.message}</ErrorMessage>
      </FieldControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
}
```
