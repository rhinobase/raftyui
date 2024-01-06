import { Table } from "@rafty/ui";
import { PropsWithChildren } from "react";

export function PropsTable({ children }: PropsWithChildren) {
  return (
    <div className="my-[1em] w-full overflow-x-auto">
      <Table
        isUnstyled
        className="my-0 w-max table-auto text-left text-[0.875em] leading-[1.7142857] md:w-full"
      >
        {children}
      </Table>
    </div>
  );
}
