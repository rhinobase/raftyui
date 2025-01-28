import { createContext } from "../utils/client/index.js";
import type { SizeType } from "../utils/index.js";

export const [SegmentedControlProvider, useSegmentedControlContext] =
  createContext<SegmentedControlContext>({
    name: "SegmentedControlContext",
    hookName: "useSegmentedControlContext",
    providerName: "<SegmentedControl />",
  });

export interface SegmentedControlContext {
  readonly isReadOnly: boolean;
  readonly size: SizeType;
}
