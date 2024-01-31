import { Meta, StoryObj } from "@storybook/react";
import { useFormik } from "formik";
import { Button } from "../button";
import { FieldControl } from "../field-control";
import { InputField } from "../input-field";
import { Label } from "../label";

const meta: Meta = {
  title: "Integration / Formik",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
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
      <form onSubmit={formik.handleSubmit} className="space-y-4 p-4">
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
  },
};
