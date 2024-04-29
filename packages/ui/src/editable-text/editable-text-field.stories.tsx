import {
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react";
import {
  InputGroup,
  LeftAddon,
  Prefix,
  RightAddon,
  Suffix,
} from "../input-group";
import { EditableTextField } from "./EditableTextField";

const meta: Meta<typeof EditableTextField> = {
  title: "fibr / EditableTextField",
  args: {
    size: "md",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof EditableTextField>;

// export const Default: Story = {
//   render: () => (
//     <FibrProvider plugins={plugin}>
//       <div className="w-full">
//         <Loom
//           blueprint={f.form({
//             onSubmit: console.log,
//             components: {
//               editableText: f.editableText({
//                 name: "editableText",
//                 label: "Editable Text",
//               }),
//             },
//           })}
//         />
//       </div>
//     </FibrProvider>
//   ),
// };

export const Default: Story = {
  render: () => <EditableTextField />,
};

export const WithInputGroup: Story = {
  render: ({ size }) => (
    <InputGroup size={size} className="w-full">
      <LeftAddon>P</LeftAddon>
      <Prefix>
        <ExclamationTriangleIcon height={17} width={17} />
      </Prefix>
      <EditableTextField />
      <Suffix>
        <ExclamationCircleIcon height={17} width={17} />
      </Suffix>
      <RightAddon>S</RightAddon>
    </InputGroup>
  ),
};
