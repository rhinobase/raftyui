import {
  Skeleton,
  Table,
  TableBody,
  TableHeader,
  Td,
  Th,
  Tr,
  classNames,
} from "@rafty/ui";
import type { Meta, StoryObj } from "@storybook/react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import {
  type ColumnDef,
  type PaginationState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";

const meta: Meta<typeof Table> = {
  title: "Integration / TanstackTable",
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => {
    const CLIENT = new QueryClient();
    return (
      <QueryClientProvider client={CLIENT}>
        <TanstackTable />
      </QueryClientProvider>
    );
  },
};

function TanstackTable() {
  const columns = useMemo<ColumnDef<unknown>[]>(
    () => [
      {
        header: "Id",
        accessorKey: "flight_number",
      },
      {
        header: "Mission Name",
        accessorKey: "mission_name",
      },
      {
        header: "Launch Year",
        accessorKey: "launch_year",
      },
      {
        header: "Tentative",
        accessorKey: "is_tentative",
      },
      {
        header: "Launch Window",
        accessorKey: "launch_window",
      },
      {
        header: "Rocket Name",
        // @ts-ignore
        cell: ({ row }) => row.original?.rocket.rocket_name,
      },
    ],
    [],
  );

  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const offset = pageSize * pageIndex;

  const { data, isLoading } = useQuery({
    queryKey: ["launches", pageSize, offset],
    queryFn: () =>
      fetch(
        `https://api.spacexdata.com/v3/launches?limit=${pageSize}&offset=${offset}`,
      ).then((res) => res.json()),
  });

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize],
  );

  const table = useReactTable({
    data: data,
    columns,
    pageCount: 110 / pageSize,
    getCoreRowModel: getCoreRowModel(),
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    manualPagination: true,
    debugTable: true,
  });

  const noOfColumns = table.getAllColumns().length;

  return (
    <Table size="sm" className="m-4 w-full [&>table]:table-fixed">
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <Tr key={headerGroup.id}>
            {headerGroup.headers.map((header, index) => {
              const isLastColumn = headerGroup.headers.length - 1 === index;

              return (
                <Th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className={classNames(
                    isLastColumn && "text-center",
                    index === 0 ? "w-10" : "w-max",
                  )}
                >
                  <div
                    className={classNames(
                      index === 0 && "justify-center",
                      "flex items-center",
                    )}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </div>
                </Th>
              );
            })}
          </Tr>
        ))}
      </TableHeader>
      <TableBody>
        {isLoading
          ? Array(pageSize)
              .fill("")
              .map((_, index) => (
                <Tr
                  // biome-ignore lint/suspicious/noArrayIndexKey: It is an empty array
                  key={index}
                >
                  <Td colSpan={noOfColumns} className="p-0">
                    <Skeleton
                      className={classNames(
                        index % 2 === 0 &&
                          "bg-secondary-300 dark:bg-secondary-600",
                        "h-10 w-full",
                      )}
                    />
                  </Td>
                </Tr>
              ))
          : table.getRowModel().rows.map((row) => (
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell, index) => {
                  const isLastColumn =
                    row.getVisibleCells().length - 1 === index;

                  return (
                    <Td
                      key={cell.id}
                      className="truncate whitespace-nowrap"
                      style={{
                        textAlign:
                          isLastColumn || index === 0 ? "center" : undefined,
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </Td>
                  );
                })}
              </Tr>
            ))}
      </TableBody>
    </Table>
  );
}
