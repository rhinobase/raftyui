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
  "context-menu:unstyled": (
    <ContextMenu isUnstyled>
      <ContextMenuTrigger className="dark:border-secondary-700 flex h-[200px] w-full items-center justify-center border-2 border-dotted">
        Right Click here
      </ContextMenuTrigger>
      <ContextMenuContent className="dark:bg-secondary-800 w-[200px] space-y-1.5  rounded-md bg-white p-1 text-sm focus:outline-none">
        <ContextMenuItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 py-1focus:outline-none cursor-pointer  rounded-md px-6 py-1 ">
          Back
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger className="hover:bg-secondary-200 dark:hover:bg-secondary-700 flex w-full cursor-pointer items-center justify-between rounded-md px-6 py-1 hover:border-none focus:outline-none">
            More Tools
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="dark:bg-secondary-800 w-[180px]  cursor-pointer space-y-2 rounded-md bg-white p-1 text-sm focus:outline-none">
            <ContextMenuItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-6 py-1 hover:border-none focus:outline-none">
              Save Page As...
            </ContextMenuItem>
            <ContextMenuSeparator className="dark:border-secondary-700 border-secondary-200 border" />
            <ContextMenuItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-6 py-1 hover:border-none focus:outline-none">
              Developer Tools
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator className="dark:border-secondary-700 border-secondary-200 border" />
        <ContextMenuCheckboxItem
          checked
          className="hover:bg-secondary-200 dark:hover:bg-secondary-700 flex cursor-pointer items-center rounded-md px-6 py-1 hover:border-none focus:outline-none"
        >
          Show Bookmarks
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-6 py-1 hover:border-none focus:outline-none">
          Show Full URLs
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator className="dark:border-secondary-700  border-secondary-200 border" />
        <ContextMenuLabel className="dark:text-secondary-400 cursor-context-menu rounded-md px-6  text-xs hover:border-none focus:outline-none">
          People
        </ContextMenuLabel>
        <ContextMenuRadioGroup value="2">
          <ContextMenuRadioItem
            value="1"
            className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-6 py-1 hover:border-none focus:outline-none "
          >
            Jack
          </ContextMenuRadioItem>
          <ContextMenuRadioItem
            value="2"
            className="hover:bg-secondary-200 dark:hover:bg-secondary-700 flex cursor-pointer items-center rounded-md px-6 py-1 hover:border-none focus:outline-none"
          >
            Denial
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  ),
  "context-menu:unstyledsub": (
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
