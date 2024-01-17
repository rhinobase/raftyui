import { XMarkIcon } from "@heroicons/react/24/outline";
import { eventHandler } from "@rafty/shared";
import { Kbd, buttonClasses, classNames } from "@rafty/ui";
import { useComboboxContext } from "../context";
import { findLabel } from "../utils";

export function InternalTriggerRender() {
  const {
    name,
    type,
    options,
    isDisabled,
    isLoading,
    isReadonly,
    selected,
    onSelectionChange,
    placeholder,
  } = useComboboxContext();

  const isMulti = type === "multi";
  const isSelected = selected.length > 0;
  const disabled = isDisabled || isLoading || isReadonly;

  if (isSelected) {
    if (isMulti) {
      // Function to remove the node
      const removeNode = (item: string | number | null) =>
        eventHandler(() => onSelectionChange(item));

      return (
        <div className="flex w-full flex-wrap gap-1.5">
          {selected.map((item) => (
            <Kbd
              key={item}
              className="pr-none flex items-center gap-1.5 text-xs"
            >
              {findLabel(item, options)}
              <div
                className={classNames(
                  buttonClasses({
                    variant: "ghost",
                    colorScheme: "error",
                    size: "icon",
                    disabled,
                  }),
                  "rounded-sm p-0.5",
                )}
                onClick={removeNode(item)}
                onKeyDown={removeNode(item)}
              >
                <XMarkIcon className="h-3.5 w-3.5 stroke-2" />
              </div>
            </Kbd>
          ))}
        </div>
      );
    }

    // For single combobox
    return findLabel(selected[0], options);
  }

  // Rendering the placeholder
  if (placeholder?.trigger) return placeholder?.trigger;

  // Default value
  return `Select ${name}`;
}
