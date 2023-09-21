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
      <ContextMenuTrigger className="dark:border-secondary-700 flex h-[200px] w-full items-center justify-center border-2 border-dotted">
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
        <ContextMenuCheckboxItem checked>
          Show Bookmarks
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuLabel>People</ContextMenuLabel>
        <ContextMenuRadioGroup value="2">
          <ContextMenuRadioItem value="1">Jack</ContextMenuRadioItem>
          <ContextMenuRadioItem value="2">Denial</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  ),
  "context-menu:size": (
    <ContextMenu size="sm">
      <ContextMenuTrigger className="dark:border-secondary-700 flex h-[200px] w-full items-center justify-center border-2 border-dotted">
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
        <ContextMenuCheckboxItem checked>
          Show Bookmarks
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuLabel>People</ContextMenuLabel>
        <ContextMenuRadioGroup value="2">
          <ContextMenuRadioItem value="1">Jack</ContextMenuRadioItem>
          <ContextMenuRadioItem value="2">Denial</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  ),
  "context-menu:barebone": (
    <ContextMenu isBarebone>
      <ContextMenuTrigger className="dark:border-secondary-700 flex h-[200px] w-full items-center justify-center border-2 border-dotted">
        Right Click here
      </ContextMenuTrigger>
      <ContextMenuContent className="dark:bg-secondary-800 w-[200px] space-y-1.5  rounded-md bg-white p-1 text-sm">
        <ContextMenuItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md  px-2 py-1">
          Back
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger className="hover:bg-secondary-200 dark:hover:bg-secondary-700 flex w-full cursor-pointer items-center justify-between rounded-md px-2 py-1 hover:border-none">
            More Tools
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="dark:bg-secondary-800 ml-1 w-[180px] cursor-pointer space-y-2 rounded-md bg-white p-1 py-2 text-sm">
            <ContextMenuItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-2 py-1 hover:border-none">
              Save Page As...
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-2 py-1 hover:border-none">
              Developer Tools
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator className="dark:border-secondary-700 border-secondary-200 border" />
        <ContextMenuCheckboxItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-2 py-1 hover:border-none">
          Show Bookmarks
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-2 py-1 hover:border-none">
          Show Full URLs
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator className="dark:border-secondary-700  border-secondary-200 border" />
        <ContextMenuLabel className="dark:text-secondary-400 cursor-context-menu rounded-md  px-1 text-xs hover:border-none">
          People
        </ContextMenuLabel>
        <ContextMenuRadioGroup>
          <ContextMenuRadioItem
            value="1"
            className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-1 py-1 hover:border-none "
          >
            Jack
          </ContextMenuRadioItem>
          <ContextMenuRadioItem
            value="2"
            className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-1 py-1 hover:border-none"
          >
            Denial
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  ),
  "context-menu:unstyled": (
    <ContextMenu>
      <ContextMenuTrigger className="dark:border-secondary-700 flex h-[200px] w-full items-center justify-center border-2 border-dotted">
        Right Click here
      </ContextMenuTrigger>
      <ContextMenuContent
        isUnstyled
        className="dark:bg-secondary-800 w-[200px] rounded-md bg-white p-1 text-sm "
      >
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
        <ContextMenuCheckboxItem checked>
          Show Bookmarks
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuLabel>People</ContextMenuLabel>
        <ContextMenuRadioGroup value="2">
          <ContextMenuRadioItem value="1">Jack</ContextMenuRadioItem>
          <ContextMenuRadioItem value="2">Denial</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  ),
};
