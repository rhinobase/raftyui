import { Skeleton, Td, Tr, classNames } from "@rafty/ui";
import { useId } from "react";

type Loading = { colSpan: number };

// Loading component for rendering a loading state with skeletons in a table
export function Loading({ colSpan }: Loading) {
  const key = useId();

  return Array.from({ length: 10 }).map((_, index) => (
    // Table row with a unique key for each loading row
    <Tr key={`${index}-${key}`}>
      <Td colSpan={colSpan} className="!p-0">
        {/* Skeleton component for creating a loading animation */}
        <Skeleton
          className={classNames(
            index % 2 === 0 && "!bg-secondary-100 dark:!bg-secondary-800",
            "h-11 w-full",
          )}
        />
      </Td>
    </Tr>
  ));
}
