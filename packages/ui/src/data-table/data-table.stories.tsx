import type { Meta, StoryObj } from "@storybook/react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import type { SortingState } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { eventHandler } from "../utils";
import { type ColumnType, DataTable } from "./DataTable";
import { BooleanCell } from "./cells";

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
    cell: ({ cell }) => {
      const value = cell.getValue();

      const handleClick = eventHandler(() =>
        navigator.clipboard.writeText(value as string),
      );

      return (
        <div
          className="cursor-pointer"
          onClick={handleClick}
          onKeyDown={handleClick}
          title="Copied"
        >
          {String(value)}
        </div>
      );
    },
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
    cell: BooleanCell,
  },
  {
    accessorKey: "launch_date_local",
    header: "Launch Date",
    cell: ({ cell }) => {
      const value = cell.getValue();

      return <p>{new Date(value as string).toLocaleDateString()}</p>;
    },
  },
];

function TableComponent() {
  const limit = 10;
  const offset = 0;

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
    />
  );
}
