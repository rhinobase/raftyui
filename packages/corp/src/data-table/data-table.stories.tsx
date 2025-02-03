import { Checkbox } from "@rafty/ui";
import type { Meta, StoryObj } from "@storybook/react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import type { SortingState } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { type ColumnType, DataTable } from "./DataTable";

const meta: Meta<typeof DataTable> = {
  title: "Corp / DataTable",
  args: {
    enableRowSelection: true,
    enableColumnResizing: true,
    enableColumnsSorting: true,
  },
};

export default meta;
type Story = StoryObj<typeof DataTable>;

const client = new QueryClient();
export const Default: Story = {
  render: (props) => (
    <QueryClientProvider client={client}>
      <TableComponent {...props} />
    </QueryClientProvider>
  ),
};

type DataType = {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  launch_window: number;
  launch_success: boolean;
  launch_date_local: Date;
};

const COLUMNS: ColumnType<unknown>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllRowsSelected() ||
          (table.getIsSomeRowsSelected() ? "indeterminate" : false)
        }
        onCheckedChange={() => table.toggleAllRowsSelected()}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={() => row.toggleSelected()}
      />
    ),
    size: 40,
  },
  {
    accessorKey: "flight_number",
    header: "Id",
  },
  {
    accessorKey: "mission_name",
    header: "Name",
  },
  {
    accessorKey: "launch_year",
    header: "Launch Year",
    enableSorting: false,
  },
  {
    accessorKey: "rocket.rocket_name",
    header: "Rocket",
    enableResizing: false,
  },
  {
    accessorKey: "launch_site.site_name",
    header: "Site",
    enableResizing: false,
    enableSorting: false,
  },
  {
    accessorKey: "launch_success",
    header: "Launch Success",
  },
  {
    accessorKey: "launch_date_local",
    header: "Launch Date",
  },
];

function TableComponent({
  enableColumnResizing,
  enableColumnsSorting,
  enableRowSelection,
  ...props
}: DataTable<unknown>) {
  const limit = 10;
  const offset = 0;
  const [rowsSelected, setRowsSelected] = useState<Record<string, boolean>>({});

  const [sorting, setSorting] = useState<SortingState>([]);

  const sort = sorting[0];

  const { isLoading, isError, error, data } = useQuery<DataType[]>({
    queryKey: ["query", limit, offset, sort],
    queryFn: async () =>
      fetch(
        `https://api.spacexdata.com/v3/launches?limit=${limit}&offset=${offset}${
          sort && `&sort=${sort.id}&order=${sort.desc ? "desc" : "asc"}`
        }`,
      ).then((res) => res.json()),
    retry: false,
  });

  useEffect(() => {
    if (isError) throw error;
  }, [isError, error]);

  return (
    <div className="flex flex-col gap-3">
      <DataTable
        {...props}
        data={data}
        columns={COLUMNS}
        isLoading={isLoading}
        isError={isError}
        enableRowSelection={enableRowSelection}
        enableColumnResizing={enableColumnResizing}
        enableColumnsSorting={enableColumnsSorting}
        onSortingChange={setSorting}
        onRowsSelectedChange={setRowsSelected}
        rowsSelected={rowsSelected}
      />
    </div>
  );
}
