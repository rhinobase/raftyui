import { PageJumper, Pagination, PaginationButtons } from "@rafty/ui";
import { useState } from "react";
import { useThemeEditorContext } from "../Context";

export function PaginationExample() {
  const { isDisabled } = useThemeEditorContext();
  const [pagination, setPagination] = useState({
    current: 1,
    limit: 10,
  });
  const count = 100;
  const pages = count / pagination.limit;

  return (
    <Pagination
      size="sm"
      isDisabled={isDisabled}
      pages={pages}
      pageLimit={pagination.limit}
      currentPage={pagination.current}
      onChange={(page, pageLimit) =>
        setPagination((prev) => {
          if (prev.limit !== pageLimit) return { current: 1, limit: pageLimit };
          return {
            current: page,
            limit: pageLimit,
          };
        })
      }
    >
      <PageJumper />
      <span>Total Items : {count}</span>
      <PaginationButtons />
    </Pagination>
  );
}
