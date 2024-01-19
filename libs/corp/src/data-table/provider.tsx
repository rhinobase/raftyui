import {
  ColumnSizingState,
  RowSelectionState,
  SortingState,
} from "@tanstack/react-table";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "./ErrorComponent";

// Define the shape of the context value using ReturnType
type TableContextProps = ReturnType<typeof useTableProvider>;

// Create a context for the table state
const TableContext = createContext<TableContextProps>({
  rowSelection: {},
  setRowSelection: () => undefined,
  sort: [],
  setSort: () => undefined,
  columnSize: {},
  setColumnResize: () => undefined,
});

// TableProvider component to wrap the application with the table context
export function TableProvider({ children }: PropsWithChildren) {
  // Get the value from the useTableProvider function
  const value = useTableProvider();

  // Provide the context value to the children components
  return (
    <TableContext.Provider value={value}>
      <ErrorBoundary fallbackRender={ErrorComponent}>{children}</ErrorBoundary>
    </TableContext.Provider>
  );
}

// Custom hook for providing and managing table-related state
function useTableProvider() {
  // State for row selection
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  // State for sorting
  const [sort, setSort] = useState<SortingState>([]);
  // State for column sizing
  const [columnSize, setColumnResize] = useState<ColumnSizingState>({});

  // Return an object containing the table-related state and setter functions
  return {
    rowSelection,
    setRowSelection,
    sort,
    setSort,
    columnSize,
    setColumnResize,
  };
}

// Custom hook for accessing the table context
export const useTable = () => useContext(TableContext);
