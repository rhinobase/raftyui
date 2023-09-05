import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@rafty/ui";

export function ContextMenuExample() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex items-center justify-center w-full h-[200px] rounded-lg border-2 border-dotted border-secondary-300 dark:border-secondary-700 text-secondary-400 dark:text-secondary-500 select-none">
        right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Back</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Save Page As...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem>Show Bookmarks</ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuLabel>People</ContextMenuLabel>
        <ContextMenuRadioGroup>
          <ContextMenuRadioItem value="1">Jack</ContextMenuRadioItem>
          <ContextMenuRadioItem value="2">Denial</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}
