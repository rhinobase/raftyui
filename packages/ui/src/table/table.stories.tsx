import type { Meta, StoryObj } from "@storybook/react";
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  Td,
  Th,
  Tr,
} from "./Table.js";

const meta: Meta<typeof Table> = {
  title: "Components / Table",
  args: {
    size: "md",
    variant: "simple",
    isUnstyled: false,
  },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    variant: { control: "select", options: ["simple", "striped"] },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const DATA = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
];

export const Default: Story = {
  render: (props) => (
    <Table {...props}>
      <TableHeader>
        <Tr>
          <Th>Name</Th>
          <Th>Title</Th>
          <Th>Email</Th>
          <Th>Role</Th>
        </Tr>
      </TableHeader>
      <TableBody>
        {DATA.map((person, index) => (
          <Tr key={`${index}-${person.name}`}>
            <Td>{person.name}</Td>
            <Td>{person.title}</Td>
            <Td>{person.email}</Td>
            <Td>{person.role}</Td>
          </Tr>
        ))}
      </TableBody>
      <TableFooter>
        <Tr>
          <Td colSpan={4}>
            {DATA.length} {DATA.length > 1 ? "rows" : "row"} of data available
          </Td>
        </Tr>
      </TableFooter>
    </Table>
  ),
};
