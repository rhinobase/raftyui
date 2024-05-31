import { type ElementRef, type ReactNode, forwardRef } from "react";
import { Table, TableBody, TableHeader, Td, Th, Tr } from "../table";
import { classNames } from "../utils";

export type KeyValue = Omit<Table, "variant"> & {
  data: Record<string, string | number>;
  keyTitle?: ReactNode;
  valueTitle?: ReactNode;
};

export const KeyValue = forwardRef<ElementRef<typeof Table>, KeyValue>(
  ({ data, keyTitle, valueTitle, className, ...props }, forwardedRef) => (
    <Table
      {...props}
      className={classNames(
        "h-[400px] w-full overflow-hidden overflow-y-auto",
        className,
      )}
      ref={forwardedRef}
    >
      <TableHeader className="bg-secondary-100 dark:bg-secondary-800">
        <Tr>
          <Th>{keyTitle}</Th>
          <Th>{valueTitle}</Th>
        </Tr>
      </TableHeader>
      <TableBody className="dark:divide-secondary-700 divide-y">
        {Object.entries(data).map(([key, value]) => (
          <Tr key={key}>
            <Td>{key}</Td>
            <Td>{value}</Td>
          </Tr>
        ))}
      </TableBody>
    </Table>
  ),
);
KeyValue.displayName = "KeyValue";
