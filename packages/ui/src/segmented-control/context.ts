import { type SizeType, createContext } from "../utils";

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
