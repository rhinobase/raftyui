import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { type ReactNode, forwardRef } from "react";
import { Table, TableBody, TableHeader, Td, Th, Tr } from "../table";
import { classNames } from "../utils";

const keyValueBooleanIconClasses = {
  size: {
    sm: "size-3 stroke-[2.5]",
    md: "size-4 stroke-[2.5]",
    lg: "size-5 stroke-[2.5]",
  },
};

export type KeyValue = Omit<Table, "variant"> & {
  data: Record<string, string | number | boolean>;
  heading?: {
    key?: ReactNode;
    value?: ReactNode;
  };
};

export const KeyValue = forwardRef<HTMLTableElement, KeyValue>(
  (
    {
      data,
      heading = {
        key: "Key",
        value: "Value",
      },
      size = "md",
      className,
      ...props
    },
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
          <Th>{heading.key}</Th>
          <Th>{heading.value}</Th>
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
                    <CheckIcon
                      className={classNames(
                        keyValueBooleanIconClasses.size[size],
                        "stroke-green-500 dark:stroke-green-300",
                      )}
                    />
                  ) : (
                    <XMarkIcon
                      className={classNames(
                        keyValueBooleanIconClasses.size[size],
                        "stroke-red-500 dark:stroke-red-300",
                      )}
                    />
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
