import { FibrProvider, Loom } from "@fibr/react";
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
  components: {
    name: f.text({
      name: "name",
      value: "Demo",
    }),
    email: f.email({
      name: "email",
      label: "Email",
    }),
    phone: f.string({
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
    }),
    swtchGroup: f.switchGroup({
      name: "switchGroup",
      label: "Switch Group",
    }),
    radio: f.radioGroup({
      name: "radioGroup",
      label: "Radio Group",
    }),
    checkboxGroup: f.checkboxGroup({
      name: "checkboxGroup",
      label: "Checkbox Group",
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
      <div className="w-full">
        <Loom blueprint={blueprint} />
      </div>
    </FibrProvider>
  );
}
