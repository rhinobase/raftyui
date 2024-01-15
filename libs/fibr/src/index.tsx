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

const config = {
  name: "contact-form",
  type: "form",
  children: {
    name: {
      type: "string",
      label: "Name",
    },
    email: {
      type: "string",
      label: "Email",
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
  return <pre>{JSON.stringify(config, null, 2)}</pre>;
}
