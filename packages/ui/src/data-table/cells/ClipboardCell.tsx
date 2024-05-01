import { eventHandler } from "../../utils";
import { CellWrapper } from "./CellWrapper";

export type ClipboardCell = {
  value: string;
};

export function ClipboardCell({ value }: ClipboardCell) {
  const handleClick = eventHandler(() => navigator.clipboard.writeText(value));

  return (
    <CellWrapper value={value}>
      <div
        className="cursor-pointer"
        onClick={handleClick}
        onKeyDown={handleClick}
        title="Copied"
      >
        {value}
      </div>
    </CellWrapper>
  );
}
