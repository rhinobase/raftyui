import RCPicker from "rc-picker";
import type { GenerateConfig } from "rc-picker/lib/generate/index";
import React, { forwardRef, useRef } from "react";
import type {
  PickerBaseProps as RCPickerBaseProps,
  PickerDateProps as RCPickerDateProps,
  PickerTimeProps as RCPickerTimeProps,
} from "rc-picker/lib/Picker";

export function DatePicker<DateType>(
  generateConfig?: GenerateConfig<DateType>,
) {
  type DatePicker = RCPickerDateProps<DateType>;

  const Picker = forwardRef<DatePicker>((props, ref) => {
    return <RCPicker<DateType> ref={ref} {...props} />;
  });
}
