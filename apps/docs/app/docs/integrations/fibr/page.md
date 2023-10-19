---
title: Rafty UI + Fibr
nextjs:
  metadata:
    title: Fibr
    description: Fibr
    twitter:
      title: Fibr
      images:
        url: https://rafty.rhinobase.io/api/og?title=Fibr
    openGraph:
      title: Fibr
      images:
        url: https://rafty.rhinobase.io/api/og?title=Fibr
---

{% example name="fibr:usage" %}

```jsx
import f from "@fibr/core";
import raftyFibrPlugin, { FieldWrapper } from "@fibr/rafty";
import { FibrForm, FibrProvider, FieldProps, Fields } from "@fibr/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, InputField, Toast } from "@rafty/ui";
import toast from "react-hot-toast";
import z from "zod";
import { useFormContext } from "react-hook-form";

const validation = z.object({
  name: z.string().min(4).max(30),
  email: z.string().min(8).max(50),
  message: z.string().min(4).max(200),
});

export function Fibr() {
  return (
    <FibrProvider plugins={[raftyFiberPlugin, customPlugin]}>
      <FibrForm
        blueprint={f.form({
          validation: zodResolver(validation),
          fields: {
            name: f.string({ label: "Name", required: true }),
            email: f.custom({ type: "email", label: "Email", required: true }),
            message: f.text({ label: "Message", required: true }),
          },
        })}
        onSubmit={({ values }) => console.log(values)}
        onError={(errors) => {
          console.error(errors);
          toast.custom((t) => (
            <Toast
              visible={t.visible}
              severity="error"
              title="Credentials are invalid"
            />
          ));
        }}
        className="space-y-3"
      >
        <Fields />
        <Button colorScheme="primary" type="submit">
          Submit
        </Button>
      </FibrForm>
    </FibrProvider>
  );
}

const customPlugin = {
  email: EmailField,
};

function EmailField(props: FieldProps) {
  const { register } = useFormContext();
  return (
    <FieldWrapper
      name={props.name}
      label={props.field.label}
      description={props.field.description}
      required={props.field.required as boolean}
    >
      <InputField {...register(props.name)} type="email" />
    </FieldWrapper>
  );
}

```

{% /example %}
