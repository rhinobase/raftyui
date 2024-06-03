import type { Meta, StoryObj } from "@storybook/react";
import { KeyValue } from "./KeyValue";

const meta: Meta<typeof KeyValue> = {
  title: "Components / KeyValue",
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
type Story = StoryObj<typeof KeyValue>;

const data = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 2,
  f: 1,
  ek: 33,
  gg: 3929,
  dkkd: 33,
  dd: 43,
  aa: 3,
  bb: 39,
  ti: 3,
  cc: 3,
  sample: "ddk",
  dkd: "sl",
  dk: "kdk",
  "3dls": "lsdd",
  sliee: "ddk",
  ieke: "eiieie",
  dkk: "w",
  dle: "eike",
  id: "1",
  address_street: "123 Main St",
  address_city: "Anytown",
  address_state: "CA",
  address_zip: "12345",
  company: "Doe Industries",
  dkddlele: true,
};
export const Default: Story = {
  render: (props) => (
    <KeyValue {...props} data={data} keyTitle="Key" valueTitle="Value" />
  ),
};
