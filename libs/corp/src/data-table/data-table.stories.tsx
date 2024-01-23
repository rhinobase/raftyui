import { Meta, StoryObj } from "@storybook/react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { useEffect } from "react";
import { ColumnType, DataTable } from "./DataTable";
import { TableProvider } from "./providers";

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
  flight_number: number;
  mission_name: string;
  launch_year: string;
  launch_window: number;
  launch_success: boolean;
  launch_date_local: Date;
};

const COLUMNS: ColumnType[] = [
  {
    name: "flight_number",
    label: "Id",
  },
  {
    name: "mission_name",
    label: "Name",
  },
  {
    name: "launch_year",
    label: "Launch Year",
    enableSorting: false,
  },
  {
    name: "rocket.rocket_name",
    label: "Rocket",
    type: "clipboard",
    enableResizing: false,
  },
  {
    name: "launch_site.site_name",
    label: "Site",
    enableResizing: false,
    enableSorting: false,
  },
  {
    name: "launch_success",
    label: "Launch Success",
    type: "boolean",
  },
  {
    name: "launch_date_local",
    label: "Launch Date",
    type: "date",
  },
];

function TableComponent() {
  const limit = 10;
  const offset = 0;

  const { isLoading, isError, error, data } = useQuery<DataType[]>({
    queryKey: ["query", limit, offset],
    queryFn: async () =>
      fetch(
        `https://api.spacexdata.com/v3/launches?limit=${limit}&offset=${offset}&sort=flight_number&order=asc`,
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
