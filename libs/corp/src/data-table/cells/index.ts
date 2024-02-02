import { BooleanCell } from "./BooleanCell";
import { ClipboardCell } from "./ClipboardCell";
import { DateCell } from "./DateCell";
import { DatetimeCell } from "./DatetimeCell";
import { Default } from "./Default";
import { SecretCell } from "./SecretCell";

export const withCells = {
  default: Default,
  boolean: BooleanCell,
  date: DateCell,
  datetime: DatetimeCell,
  secret: SecretCell,
  clipboard: ClipboardCell,
};
