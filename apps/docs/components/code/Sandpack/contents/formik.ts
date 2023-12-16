export const dependencies = {
  formik: "^2.4.5",
};

const AppFile = `import { useFormik } from "formik";
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
}`;

export const files = {
  "App.js": AppFile,
};
