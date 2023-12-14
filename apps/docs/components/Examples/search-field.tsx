import { SearchField } from "@rafty/ui";

export const search_field_examples = {
  "search-field:usage": <SearchField />,
  "search-field:size": (
    <div className="space-y-2">
      <SearchField size="sm" />
      <SearchField size="md" />
      <SearchField size="lg" />
    </div>
  ),
  "search-field:variant": (
    <div className="space-y-2">
      <SearchField variant="outline" />
      <SearchField variant="ghost" />
      <SearchField variant="solid" />
    </div>
  ),
};
