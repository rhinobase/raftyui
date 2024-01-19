import { Meta, StoryObj } from "@storybook/react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import { useEffect } from "react";
import { DataTable } from "./DataTable";
import { TableProvider } from "./provider";

const meta: Meta<typeof DataTable> = {
  title: "Corp / DataTable",
};

export default meta;
type Story = StoryObj<typeof DataTable>;

const client = new QueryClient();
export const Default: Story = {
  render: () => (
    <QueryClientProvider client={client}>
      <TableProvider>
        <TableComponent />
      </TableProvider>
    </QueryClientProvider>
  ),
};

type DataType = {
  launch_date_unix: number;
  mission_name: string;
  launch_year: string;
  is_tentative: boolean;
  launch_window: number;
};

const COLUMNS: ColumnDef<DataType>[] = [
  {
    header: "Id",
    accessorKey: "flight_number",
  },
  {
    header: "Name",
    accessorKey: "mission_name",
  },
  {
    header: "Launch Year",
    accessorKey: "launch_year",
  },
  {
    header: "Rocket",
    accessorKey: "rocket.rocket_name",
  },
  {
    header: "Site",
    accessorKey: "launch_site.site_name",
  },
];

function TableComponent() {
  const limit = 10;
  const offset = 0;

  const { isLoading, isError, error, data } = useQuery<DataType[]>({
    queryKey: ["query", limit, offset],
    queryFn: async () =>
      fetch(
        `https://api.spacexdata.com/v3/launches?limit=${limit}&offset=${offset}`,
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
      enableRowSelection // Prop to enable selectable rows
      enableColumnResizing // Prop to enable columns resizing
    />
  );
}
