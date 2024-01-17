import { BlueprintProvider, FibrProvider, Weaver } from "@fibr/react";
import { FormProvider, useForm } from "react-hook-form";
import {
  EditableTextField,
  EditableTextareaField,
  EmailField,
  PasswordField,
  TextField,
  TextareaField,
  UrlField,
} from "./components";

/**
 * JSON based config
 * Wrapper lib which can make the config
 * Compiler to render the blueprint
 * Components to be rendered
 *
 * Contact Form
 * Name - string
 * Email - string
 * Phone - string
 * Message - text
 *
 */

const blueprint = {
  name: "contact-form",
  type: "form",
  children: {
    name: {
      type: "string",
      label: "Name",
    },
    email: {
      type: "email",
      label: "Email",
    },
    editableText: {
      type: "editText",
      label: "EditText",
    },
    editableTextarea: {
      type: "editTextarea",
      label: "EditTextarea",
    },
    url: {
      type: "url",
      label: "URL",
    },
    password: {
      type: "password",
      label: "Password",
    },
    phone: {
      type: "string",
      label: "Phone",
    },
    message: {
      type: "text",
      label: "Message",
    },
  },
};

export function Main() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <FibrProvider
        plugins={[
          {
            string: TextField,
            text: TextareaField,
            url: UrlField,
            password: PasswordField,
            email: EmailField,
            editText: EditableTextField,
            editTextarea: EditableTextareaField,
          },
        ]}
      >
        <BlueprintProvider blueprint={blueprint.children}>
          <div className="w-full space-y-3">
            <Weaver />
          </div>
        </BlueprintProvider>
      </FibrProvider>
    </FormProvider>
  );
}
