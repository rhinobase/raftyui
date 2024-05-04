import type { Meta, StoryObj } from "@storybook/react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import type { SortingState } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { Checkbox } from "../checkbox";
import { type ColumnType, DataTable } from "./DataTable";

const meta: Meta<typeof DataTable> = {
  title: "Corp / DataTable",
};

export default meta;
type Story = StoryObj<typeof DataTable>;

const client = new QueryClient();
export const Default: Story = {
  render: () => (
    <QueryClientProvider client={client}>
      <TableComponent />
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

function TableComponent() {
  const limit = 10;
  const offset = 0;
  const [rowsSelected, setRowsSelected] = useState<Record<string, boolean>>({});

  const [sorting, setSorting] = useState<SortingState>([]);

  const sort = sorting[0];

  const { isLoading, isFetching, isError, error, data } = useQuery<DataType[]>({
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
    <DataTable
      data={data}
      columns={COLUMNS}
      isLoading={isLoading}
      enableRowSelection
      enableColumnResizing
      onSortingChange={setSorting}
      isFetching={isFetching}
      onRowSelectionChange={setRowsSelected}
      rowSelection={rowsSelected}
    />
  );
}
