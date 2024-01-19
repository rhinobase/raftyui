import { FibrProvider, Loom, WeaverProvider } from "@fibr/react";
import { f, plugin } from "./components";

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

const blueprint = f.form({
  onSubmit: console.log,
  fields: {
    name: f.text({
      name: "name",
      label: "Name",
    }),
    email: f.email({
      name: "email",
      label: "Email",
    }),
    phone: f.text({
      name: "phone",
      label: "Phone",
    }),
    message: f.textarea({
      name: "message",
      label: "Message",
    }),
    chekbox: f.checkbox({
      name: "chekbox",
      label: "Checkbox",
    }),
    "editable-text": f.editableText({
      name: "editableText",
      label: "Editable Text",
    }),
    "editable-textarea": f.editableTextarea({
      name: "editableTextarea",
      label: "Editable Textarea",
    }),
    url: f.url({
      name: "url",
      label: "URL",
    }),
    switch: f.switchField({
      name: "switch",
      label: "Switch",
      value: "switch",
    }),
    swtchGroup: f.switchGroup({
      name: "switchGroup",
      label: "Switch Group",
      options: [
        { label: "Python", value: "py" },
        { label: "JavaScript", value: "js" },
      ],
    }),
    radio: f.radioGroup({
      name: "radioGroup",
      label: "Radio Group",
      options: [
        { label: "Python", value: "py" },
        { label: "JavaScript", value: "js" },
      ],
    }),
    checkboxGroup: f.checkboxGroup({
      name: "checkboxGroup",
      label: "Checkbox Group",
      options: [
        { label: "Java", value: "java" },
        { label: "React", value: "react" },
      ],
    }),
    password: f.password({
      name: "password",
      label: "Password",
    }),
  },
});

export function Main() {
  return (
    <FibrProvider plugins={plugin}>
      <WeaverProvider blueprint={blueprint}>
        <div className="w-full">
          <Loom />
        </div>
      </WeaverProvider>
    </FibrProvider>
  );
}
