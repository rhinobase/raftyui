import { CellWrapper } from "./CellWrapper";

export type DatetimeCell = {
  value: string;
};

export function DatetimeCell({ value }: DatetimeCell) {
  return (
    <CellWrapper value={value}>
      <p>{new Date(value).toLocaleString()}</p>
    </CellWrapper>
  );
}
