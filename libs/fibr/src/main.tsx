import { FibrProvider, Loom, WeaverProvider } from "@fibr/react";
import { FormProvider, useForm } from "react-hook-form";
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
    email: f.text({
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
