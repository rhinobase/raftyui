import {
  Table,
  TableBody,
  TableContainer,
  TableFooter,
  TableHead,
  Td,
  Th,
  Tr,
} from "@rafty/ui";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Table> = {
  title: "Components / Table",
  args: {
    size: "md",
    variant: "simple",
    isBarebone: false,
  },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    variant: { control: "select", options: ["simple", "striped"] },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: function Render({ size, variant, isBarebone }) {
    const people = [
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
    return (
      <TableContainer>
        <Table size={size} variant={variant} isBarebone={isBarebone}>
          <TableHead>
            <Tr>
              <Th>Name</Th>
              <Th>Title</Th>
              <Th>Email</Th>
              <Th>Role</Th>
            </Tr>
          </TableHead>
          <TableBody>
            {people.map((person, index) => (
              <Tr key={index}>
                <Td>{person.name}</Td>
                <Td>{person.title}</Td>
                <Td>{person.email}</Td>
                <Td>{person.role}</Td>
              </Tr>
            ))}
          </TableBody>
          <TableFooter>
            <Tr>
              <Td colSpan={4}>3 rows of data available</Td>
            </Tr>
          </TableFooter>
        </Table>
      </TableContainer>
    );
  },
};
