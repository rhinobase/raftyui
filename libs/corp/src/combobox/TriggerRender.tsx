import { XMarkIcon } from "@heroicons/react/24/outline";
import { Kbd, buttonClasses, classNames } from "@rafty/ui";
import { KeyboardEventHandler, MouseEventHandler } from "react";
import { Combobox } from "./Combobox";
import { useComboboxContext } from "./context";
import { findLabel } from "./findLabel";

export function TriggerRender() {
  const {
    name,
    type,
    options,
    isDisabled,
    isLoading,
    isReadonly,
    value,
    onChange,
    placeholder,
  } = useComboboxContext();

  const isMulti = type === "multi";
  const isSelected = value.length > 0;
  const disable = isDisabled || isLoading || isReadonly;

  if (isSelected) {
    if (isMulti) {
      // Function to remove the node
      const removeNode = (
        item: string | number | null,
      ): MouseEventHandler<HTMLDivElement> &
        KeyboardEventHandler<HTMLDivElement> => {
        return (event) => {
          event.preventDefault();
          event.stopPropagation();
          onChange(item);
        };
      };

      return (
        <div className="flex w-full flex-wrap gap-1.5">
          {value.map((item) => (
            <Kbd
              key={item}
              className="!pr-none flex items-center gap-1.5 !text-xs"
            >
              {findLabel(item, options)}
              <div
                className={classNames(
                  buttonClasses({
                    variant: "ghost",
                    colorScheme: "error",
                    size: "icon",
                    disabled: disable,
                  }),
                  "!rounded-sm !p-0.5",
                )}
                onClick={removeNode(item)}
                onKeyDown={(e) => e.key === "Enter" && removeNode(item)}
              >
                <XMarkIcon className="h-3.5 w-3.5 stroke-2" />
              </div>
            </Kbd>
          ))}
        </div>
      );
    }

    // For single combobox
    return findLabel(value[0], options);
  }

  // Rendering the placeholder
  if (placeholder?.trigger) return placeholder?.trigger;

  // Default value
  return `Select ${name}`;
}
