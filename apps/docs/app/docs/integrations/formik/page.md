---
title: Rafty UI + Formik
nextjs:
  metadata:
    title: Rafty UI + Formik
    description: Formik
    twitter:
      title: Rafty UI + Formik
      images:
        url: https://rafty.rhinobase.io/api/og?title=Rafty%20UI%20+%20Formik
    openGraph:
      title: Rafty UI + Formik
      images:
        url: https://rafty.rhinobase.io/api/og?title=Rafty%20UI%20+%20Formik
---

The way we start building forms with [Formik](https://formik.org/) is by using its `useFormik` hook that returns us the formik instance. That Formik instance contains pretty much everything we need to connect our form's UI elements and submit handler. Let's see a pure React + Formik example:

{% example name="formik:usage" %}

```jsx
import { useFormik } from "formik";
import { FieldControl, Label, InputField, Button } from "@rafty/ui";

export default function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.setSubmitting(false);
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-3">
      <FieldControl name="email" isRequired>
        <Label>Email Address</Label>
        <InputField
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </FieldControl>
      <Button
        type="submit"
        colorScheme="primary"
        isLoading={formik.isSubmitting}
      >
        Submit
      </Button>
    </form>
  );
}
```

{% /example %}
