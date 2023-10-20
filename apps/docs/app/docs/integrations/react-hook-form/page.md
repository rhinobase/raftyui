---
title: Rafty UI + React Hook Form
nextjs:
  metadata:
    title: Rafty UI + React Hook Form
    description: React Hook Form
    twitter:
      title: Rafty UI + React Hook Form
      images:
        url: https://rafty.rhinobase.io/api/og?title=Rafty%20UI%20+%20React%20Hook%20Form
    openGraph:
      title: Rafty UI + React Hook Form
      images:
        url: https://rafty.rhinobase.io/api/og?title=Rafty%20UI%20+%20React%20Hook%20Form
---

This example shows how to build a simple form with Rafty UI's form components and the [React Hook Form](https://react-hook-form.com/) form library:

{% example name="react_hook_forms:usage" %}

```jsx
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

export default function HookForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm <
  z.infer <
  typeof schema >>
    {
      resolver: zodResolver(schema),
    };

  return (
    <form
      onSubmit={handleSubmit((values) => console.log(values))}
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
```

{% /example %}
