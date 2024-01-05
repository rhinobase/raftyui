import { DevTool as FormDevTool } from "@hookform/devtools";
import { useFormContext } from "react-hook-form";

export function DevTool() {
  const { control } = useFormContext();

  return <FormDevTool control={control} />;
}
