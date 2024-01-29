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
      value: "Demo",
    }),
    // email: f.email({
    //   name: "email",
    //   label: "Email",
    // }),
    // phone: f.string({
    //   name: "phone",
    //   label: "Phone",
    // }),
    message: f.textarea({
      name: "message",
      label: "Message",
    }),
    // "editable-text": f.editableText({
    //   name: "editableText",
    //   label: "Editable Text",
    // }),
    // "editable-textarea": f.editableTextarea({
    //   name: "editableTextarea",
    //   label: "Editable Textarea",
    // }),
  },
});

export function Main() {
  return (
    <FibrProvider plugins={plugin}>
      <div className="size-full">
        <Loom blueprint={blueprint} />
      </div>
    </FibrProvider>
  );
}
