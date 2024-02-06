import { SearchField } from "@rafty/ui";

export function SearchFieldExample() {
  return (
    <div className="space-y-2">
      <SearchField variant="outline" placeholder="Search Field" size="sm" />
      <SearchField variant="ghost" placeholder="Search Field" />
      <SearchField variant="solid" placeholder="Search Field" size="lg" />
    </div>
  );
}
