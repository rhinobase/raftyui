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

export const context_menu_examples = {
  "context-menu:usage": (
    <ContextMenu>
      <ContextMenuTrigger className="flex items-center justify-center w-full h-[200px] border-2 border-dotted dark:border-secondary-700">
        Right Click here
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
  ),
  "context-menu:size": (
    <ContextMenu size="sm">
      <ContextMenuTrigger className="flex items-center justify-center w-full h-[200px] border-2 border-dotted dark:border-secondary-700">
        Right Click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Back</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
  "context-menu:barebone": (
    <ContextMenu isBarebone>
      <ContextMenuTrigger className="flex items-center justify-center w-full h-[200px] border-2 border-dotted dark:border-secondary-700">
        Right Click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Back</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
  "context-menu:unstyled": (
    <ContextMenu>
      <ContextMenuTrigger className="flex items-center justify-center w-full h-[200px] border-2 border-dotted dark:border-secondary-700">
        Right Click here
      </ContextMenuTrigger>
      <ContextMenuContent isUnstyled>
        <ContextMenuItem>Back</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};
