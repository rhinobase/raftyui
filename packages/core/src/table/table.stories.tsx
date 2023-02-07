import { Grid } from "@rhinobase/storybook/components";
import {
  Table,
  TableProps,
  TableBody,
  TableContainer,
  TableFooter,
  TableHead,
  Td,
  Th,
  Tr,
} from "@rhinobase/ui";

export default {
  title: "New/ Table",
  component: Table,
  argTypes: {
    size: { control: "select" },
  },
};

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

export function Default({ ...args }: TableProps) {
  return (
    <Grid>
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
    </Grid>
  );
}

Default.args = {
  size: "md",
};
// import { Canvas, Meta, Story, ArgsTable } from "@storybook/addon-docs";

// import { Title, Grid, Examples, Example, CustomArgsTable } from "@rhinobase/storybook/components";
// import { Table } from "@rhinobase/ui";

// import { ExampleTable } from "./example";

// <Meta title="UI/Table" component={Table} />

// <Title title="Tables" suffix="Brief" subtitle="Version 1.0 — Last Update: 27 Dec 2022" />

// ## Definition

// Table

// ## Structure

// <CustomArgsTable of={Table} />

// <Examples title="Sizes">
//   <Example title="Small (sm)" isFullWidth>
//     <ExampleTable size="sm" />
//   </Example>
//   <Example title="Medium (md)" isFullWidth>
//     <ExampleTable />
//   </Example>
//   <Example title="Large (lg)" isFullWidth>
//     <ExampleTable size="lg" />
//   </Example>
// </Examples>

// ## Example

// <Canvas>
//   <Story name="All variants">
//     <Grid>
//       <ExampleTable />
//     </Grid>
//   </Story>
// </Canvas>
