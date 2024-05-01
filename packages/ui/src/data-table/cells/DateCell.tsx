import { CellWrapper } from "./CellWrapper";

export type DateCell = {
  value: string;
};

export function DateCell({ value }: DateCell) {
  return (
    <CellWrapper value={value}>
      <p>{new Date(value).toLocaleDateString()}</p>
    </CellWrapper>
  );
}
