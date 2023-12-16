export const dependencies = {
  "@fibr/core": "^0.3.0",
  "@fibr/rafty": "^0.1.0",
  "@fibr/react": "^0.3.0",
  "react-hot-toast": "^2.4.1",
  "react-hook-form": "^7.47.0",
  "@hookform/resolvers": "^3.3.1",
  zod: "^3.22.4",
};

const AppFile = `import f from "@fibr/core";
import EmailField from "./EmailField";
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
});

const customPlugin = {
email: EmailField,
};

export default function App() {
return (
    <FibrProvider plugins={[raftyFibrPlugin, ...customPlugin]}>
    <FibrForm
        blueprint={f.form({
        validation: zodResolver(validation),
        fields: {
            name: f.string({ label: "Name", required: true }),
            email: f.custom({ type: "email", label: "Email", required: true }),
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
}`;

const EmailFieldFile = `export default function EmailField(props) {
  const { register } = useFormContext();
  
  return (
      <FieldWrapper
      name={props.name}
      label={props.field.label}
      description={props.field.description}
      required={props.field.required}
      >
      <InputField {...register(props.name)} type="email" />
      </FieldWrapper>
  );
  }`;

export const files = {
  "App.js": AppFile,
  "EmailField.js": EmailFieldFile,
};
