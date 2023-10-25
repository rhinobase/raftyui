"use client";
import { useFormik } from "formik";
import { FieldControl, Label, InputField, Button } from "@rafty/ui";

function Formik() {
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

export const formik_examples = {
  "formik:usage": <Formik />,
};
