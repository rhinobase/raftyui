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
      <ContextMenuTrigger className="flex items-center justify-center w-full h-[200px] border-2 border-dotted dark:border-secondary-700">
        Right Click here
      </ContextMenuTrigger>
      <ContextMenuContent className="dark:bg-secondary-800 bg-white p-1  text-sm rounded-md w-[200px] space-y-1.5">
        <ContextMenuItem className="hover:bg-secondary-200 px-2 rounded-md dark:hover:bg-secondary-700  py-1 cursor-pointer">
          Back
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger className="hover:bg-secondary-200 cursor-pointer px-2 rounded-md flex items-center w-full justify-between dark:hover:bg-secondary-700 hover:border-none py-1">
            More Tools
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="dark:bg-secondary-800 cursor-pointer bg-white p-1 w-[180px] ml-1 rounded-md text-sm py-2 space-y-2">
            <ContextMenuItem className="hover:bg-secondary-200 cursor-pointer px-2 rounded-md dark:hover:bg-secondary-700 hover:border-none py-1">
              Save Page As...
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem className="hover:bg-secondary-200 cursor-pointer px-2 rounded-md dark:hover:bg-secondary-700 hover:border-none py-1">
              Developer Tools
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator className="border dark:border-secondary-700 border-secondary-200" />
        <ContextMenuCheckboxItem className="hover:bg-secondary-200 cursor-pointer px-2 rounded-md dark:hover:bg-secondary-700 hover:border-none py-1">
          Show Bookmarks
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem className="hover:bg-secondary-200 cursor-pointer px-2 rounded-md dark:hover:bg-secondary-700 hover:border-none py-1">
          Show Full URLs
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator className="border  dark:border-secondary-700 border-secondary-200" />
        <ContextMenuLabel className="px-1 cursor-context-menu rounded-md  dark:text-secondary-400 hover:border-none text-xs">
          People
        </ContextMenuLabel>
        <ContextMenuRadioGroup>
          <ContextMenuRadioItem
            value="1"
            className="hover:bg-secondary-200 px-1 rounded-md cursor-pointer dark:hover:bg-secondary-700 hover:border-none py-1 "
          >
            Jack
          </ContextMenuRadioItem>
          <ContextMenuRadioItem
            value="2"
            className="hover:bg-secondary-200 px-1 rounded-md cursor-pointer dark:hover:bg-secondary-700 hover:border-none py-1"
          >
            Denial
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  ),
  "context-menu:unstyled": (
    <ContextMenu>
      <ContextMenuTrigger className="flex items-center justify-center w-full h-[200px] border-2 border-dotted dark:border-secondary-700">
        Right Click here
      </ContextMenuTrigger>
      <ContextMenuContent
        isUnstyled
        className="dark:bg-secondary-800 p-1 w-[200px] bg-white rounded-md text-sm "
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
