import {
  Table,
  TableBody,
  TableContainer,
  TableFooter,
  TableHead,
  Td,
  Th,
  Tr,
} from "@rhino/table";

const config = {
  title: "Components / Table",
  component: Table,
  argTypes: {
    size: { control: "select" },
  },
};
export default config;

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

export function Default({ ...args }: Table) {
  return (
    <>
      <TableContainer className="max-w-2xl">
        <Table {...args}>
          <TableHead>
            <Tr>
              <Th>Name</Th>
              <Th>Title</Th>
              <Th>Email</Th>
              <Th>Role</Th>
            </Tr>
          </TableHead>
          <TableBody>
            {people.map((person) => (
              <Tr key={person.email}>
                <Td>{person.name}</Td>
                <Td>{person.title}</Td>
                <Td>{person.email}</Td>
                <Td>{person.role}</Td>
              </Tr>
            ))}
          </TableBody>
          <TableFooter></TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}

Default.args = {
  size: "md",
};
