import React, { forwardRef, type ElementRef } from "react";
import { Table, TableBody, TableHeader, Td, Th, Tr } from "../table";

export type KeyValue = Table & { data: Record<string, string> };

export const KeyValue = forwardRef<ElementRef<typeof Table>, KeyValue>(
  ({ data, ...props }, forwardedRef) => {
    return (
      <div>
        <Table {...props} ref={forwardedRef}>
          <TableHeader>
            <Tr>
              <Th>Name</Th>
              <Th>Title</Th>
              <Th>Email</Th>
              <Th>Role</Th>
            </Tr>
          </TableHeader>
          <TableBody>
            {Object.entries(data).map(([key, value]) => (
              <Tr key={key}>
                <Td>{key}</Td>
                <Td>{value}</Td>
              </Tr>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  },
);
