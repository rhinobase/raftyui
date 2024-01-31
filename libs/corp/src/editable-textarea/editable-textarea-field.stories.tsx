import { Meta, StoryObj } from "@storybook/react";
import { EditableTextareaField } from "./EditableTextareaField";

const meta: Meta<typeof EditableTextareaField> = {
  title: "fibr / EditableTextareaField",
};

export default meta;
type Story = StoryObj<typeof EditableTextareaField>;

// export const Default: Story = {
//   render: () => (
//     <FibrProvider plugins={plugin}>
//       <div className="w-full">
//         <Loom
//           blueprint={f.form({
//             onSubmit: console.log,
//             components: {
//               editableTextarea: f.editableTextarea({
//                 name: "editableTextarea",
//                 label: "Editable Textarea",
//               }),
//             },
//           })}
//         />
//       </div>
//     </FibrProvider>
//   ),
// };

export const Default: Story = {
  render: () => <EditableTextareaField />,
};
