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

export function TableExample() {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <Tr>
            <Th>To Convert</Th>
            <Th>Into</Th>
            <Th>Multiply By</Th>
          </Tr>
        </TableHead>
        <TableBody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td>0.91444</Td>
          </Tr>
        </TableBody>
        <TableFooter>
          <Tr>
            <Th>To Convert</Th>
            <Th>Into</Th>
            <Th>Multiply By</Th>
          </Tr>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
