import {
  Checkbox,
  Table,
  TableBody,
  TableContainer,
  TableFooter,
  TableHead,
  Td,
  Th,
  Tr,
} from "@rafty/ui";
import { useState } from "react";

export default function TableExample() {
  const [checked, setChecked] = useState<boolean[]>([]);

  let check_length = 0;
  checked.map((item) => item == true && check_length++);

  return (
    <TableContainer>
      <Table className="table-fixed w-full" size="sm">
        <TableHead>
          <Tr>
            <Th style={{ width: 30 }}>
              <Checkbox
                size="sm"
                checked={check_length == 3}
                onCheckedChange={(check) =>
                  check == true
                    ? setChecked([true, true, true])
                    : setChecked([])
                }
              />
            </Th>
            <Th style={{ width: 100 }}>To Convert</Th>
            <Th style={{ width: 130 }}>Into</Th>
            <Th style={{ textAlign: "end" }}>Multiply By</Th>
          </Tr>
        </TableHead>
        <TableBody>
          <Tr>
            <Td>
              <Checkbox
                size="sm"
                checked={checked.at(0)}
                onCheckedChange={(check) =>
                  setChecked((prev) =>
                    prev.map((item, i) => (i == 0 ? Boolean(check) : item)),
                  )
                }
              />
            </Td>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td style={{ textAlign: "end" }}>25.4</Td>
          </Tr>
          <Tr>
            <Td>
              <Checkbox
                size="sm"
                checked={checked.at(1)}
                onCheckedChange={(check) =>
                  setChecked((prev) =>
                    prev.map((item, i) => (i == 1 ? Boolean(check) : item)),
                  )
                }
              />
            </Td>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td style={{ textAlign: "end" }}>30.48</Td>
          </Tr>
          <Tr>
            <Td>
              <Checkbox
                size="sm"
                checked={checked.at(2)}
                onCheckedChange={(check) =>
                  setChecked((prev) =>
                    prev.map((item, i) => (i == 2 ? Boolean(check) : item)),
                  )
                }
              />
            </Td>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td style={{ textAlign: "end" }}>0.91444</Td>
          </Tr>
        </TableBody>
        <TableFooter>
          <Tr>
            <Td colSpan={4} className="h-10">
              {check_length} {check_length > 1 ? "rows" : "row"} selected
            </Td>
          </Tr>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
