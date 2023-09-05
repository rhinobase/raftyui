import React, { useState } from "react";
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

export default function TableExample() {
  const [checked, setChecked] = useState<boolean[]>([false, false, false]);
  const checkLength = checked.filter((item) => item).length;

  return (
    <TableContainer>
      <Table className="table-fixed w-full">
        <TableHead>
          <Tr>
            <Th style={{ width: 30 }}>
              <Checkbox
                size="sm"
                checked={checkLength === 3}
                onCheckedChange={(check: boolean) =>
                  setChecked([check, check, check])
                }
              />
            </Th>
            <Th style={{ width: 108 }}>To Convert</Th>
            <Th style={{ width: 110 }}>Into</Th>
            <Th style={{ textAlign: "end" }}>Multiply By</Th>
          </Tr>
        </TableHead>
        <TableBody>
          {[0, 1, 2].map((index) => (
            <Tr key={index}>
              <Td>
                <Checkbox
                  size="sm"
                  checked={checked[index]}
                  onCheckedChange={(check: boolean) =>
                    setChecked((prev) => {
                      const updatedChecked = [...prev];
                      updatedChecked[index] = check;
                      return updatedChecked;
                    })
                  }
                />
              </Td>
              <Td>{index === 0 ? "inches" : index === 1 ? "feet" : "yards"}</Td>
              <Td>
                {index === 0
                  ? "millimetres (mm)"
                  : index === 1
                  ? "centimetres (cm)"
                  : "metres (m)"}
              </Td>
              <Td style={{ textAlign: "end" }}>
                {index === 0 ? 25.4 : index === 1 ? 30.48 : 0.91444}
              </Td>
            </Tr>
          ))}
        </TableBody>
        <TableFooter>
          <Tr>
            <Td colSpan={4} className="h-10">
              {checkLength} {checkLength > 1 ? "rows" : "row"} selected
            </Td>
          </Tr>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
