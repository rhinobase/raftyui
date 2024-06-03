import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { type ElementRef, type ReactNode, forwardRef } from "react";
import { Table, TableBody, TableHeader, Td, Th, Tr } from "../table";
import { classNames } from "../utils";

export type KeyValue = Omit<Table, "variant"> & {
  data: Record<string, string | number | boolean>;
  keyTitle?: ReactNode;
  valueTitle?: ReactNode;
};

const iconClasses = {
  size: {
    sm: "size-3",
    md: "size-4",
    lg: "size-5",
  },
};

export const KeyValue = forwardRef<ElementRef<typeof Table>, KeyValue>(
  (
    { data, keyTitle, size = "md", valueTitle, className, ...props },
    forwardedRef,
  ) => (
    <Table
      {...props}
      size={size}
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
        {Object.entries(data).map(([key, value]) => {
          const isBoolean = typeof value === "boolean";

          return (
            <Tr key={key}>
              <Td>{key}</Td>
              <Td>
                {isBoolean ? (
                  value ? (
                    <CheckIcon className={iconClasses.size[size]} />
                  ) : (
                    <XMarkIcon className={iconClasses.size[size]} />
                  )
                ) : (
                  value
                )}
              </Td>
            </Tr>
          );
        })}
      </TableBody>
    </Table>
  ),
);
KeyValue.displayName = "KeyValue";
