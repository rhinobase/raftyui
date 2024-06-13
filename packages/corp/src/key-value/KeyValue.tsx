import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Table,
  TableBody,
  TableHeader,
  Td,
  Th,
  Tr,
  classNames,
} from "@rafty/ui";
import { cva } from "class-variance-authority";
import { type ReactNode, forwardRef } from "react";

const keyValueClasses = cva("w-full overflow-y-auto", {
  variants: {
    size: {
      sm: "max-h-[300px]",
      md: "max-h-[400px]",
      lg: "max-h-[500px]",
    },
  },
});

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
  function KeyValue(
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
  ) {
    return (
      <Table
        {...props}
        size={size}
        className={classNames(keyValueClasses({ size }), className)}
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
    );
  },
);
