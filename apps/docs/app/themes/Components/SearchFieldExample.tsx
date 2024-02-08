import { SearchField } from "@rafty/ui";
import { useThemeEditorContext } from "../Context";

export function SearchFieldExample() {
  const { isDisabled } = useThemeEditorContext();

  return (
    <div className="space-y-2">
      <SearchField
        isDisabled={isDisabled}
        variant="outline"
        placeholder="Search Field"
        size="sm"
      />
      <SearchField
        isDisabled={isDisabled}
        variant="ghost"
        placeholder="Search Field"
      />
      <SearchField
        isDisabled={isDisabled}
        variant="solid"
        placeholder="Search Field"
        size="lg"
      />
    </div>
  );
}
