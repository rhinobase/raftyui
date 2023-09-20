---
title: Rafty UI + Formik
nextjs:
  metadata:
    title: Formik
    description: Formik
---

The way we start building forms with [Formik](https://formik.org/) is by using its `useFormik` hook that returns us the formik instance. That Formik instance contains pretty much everything we need to connect our form's UI elements and submit handler. Let's see a pure React + Formik example:

```jsx
import { useFormik } from "formik";
import { FieldControl, Label, InputField, Button } from "@rafty/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

export default function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FieldControl name="email">
        <Label>Email Address</Label>
        <InputField
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </FieldControl>
      <Button type="submit">Submit</Button>
    </form>
  );
}
```
