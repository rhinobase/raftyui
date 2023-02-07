import { Table, TableBody, TableContainer, TableFooter, TableHead, Td, Th, Tr } from ".";

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

export function ExampleTable({ size }: { size?: "sm" | "md" | "lg" }) {
  return (
    <TableContainer className="max-w-2xl">
      <Table size={size}>
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
  );
}
