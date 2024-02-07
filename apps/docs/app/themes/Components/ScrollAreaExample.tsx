import { ScrollArea, ScrollAreaList } from "@rafty/ui";

export function ScrollAreaExample() {
  return (
    <ScrollArea
      itemCount={1000}
      itemSize={50}
      className="dark:border-secondary-700 h-60 w-[200px] rounded-md border"
    >
      <ScrollAreaList>
        {({ index, style }) => (
          <div
            key={index}
            className="dark:text-secondary-100 dark:border-secondary-700 flex items-center justify-center border-b text-sm"
            style={style}
          >
            {index}
          </div>
        )}
      </ScrollAreaList>
    </ScrollArea>
  );
}
