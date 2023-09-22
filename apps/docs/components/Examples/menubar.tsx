import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@rafty/ui";

export const menubar_examples = {
  "menubar:usage": (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger variant="ghost">File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Tab</MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarItem>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger variant="ghost">Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Search the web…</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Find…</MenubarItem>
              <MenubarItem>Find Next</MenubarItem>
              <MenubarItem>Find Previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger variant="ghost">View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>
            Always Show Bookmarks Bar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem>Always Show Full URLs</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem>Reload</MenubarItem>
          <MenubarItem>Force Reload</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Toggle Fullscreen</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Hide Sidebar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger variant="ghost">Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="1">
            <MenubarRadioItem value="1">Andy</MenubarRadioItem>
            <MenubarRadioItem value="2">Benolt</MenubarRadioItem>
            <MenubarRadioItem value="3">Luis</MenubarRadioItem>
            <MenubarSeparator />
            <MenubarItem>Edit…</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Add Profile…</MenubarItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  "menubar:size": (
    <Menubar size="sm">
      <MenubarMenu>
        <MenubarTrigger variant="ghost">File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Tab</MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarItem>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger variant="ghost">Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Search the web…</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Find…</MenubarItem>
              <MenubarItem>Find Next</MenubarItem>
              <MenubarItem>Find Previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger variant="ghost">View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>
            Always Show Bookmarks Bar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem>Always Show Full URLs</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem>Reload</MenubarItem>
          <MenubarItem>Force Reload</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Toggle Fullscreen</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Hide Sidebar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger variant="ghost">Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="1">
            <MenubarRadioItem value="1">Andy</MenubarRadioItem>
            <MenubarRadioItem value="2">Benolt</MenubarRadioItem>
            <MenubarRadioItem value="3">Luis</MenubarRadioItem>
            <MenubarSeparator />
            <MenubarItem>Edit…</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Add Profile…</MenubarItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  "menubar:barebone": (
    <Menubar isBarebone className="flex w-max items-center">
      <MenubarMenu>
        <MenubarTrigger
          variant="ghost"
          className="hover:bg-secondary-200 dark:hover:bg-secondary-700 rounded-md px-4 py-1 transition-all dark:text-white"
        >
          File
        </MenubarTrigger>
        <MenubarContent className="dark:bg-secondary-800 w-[200px] space-y-3 rounded-md bg-white p-2 text-xs">
          <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1  transition-all">
            New Tab
          </MenubarItem>
          <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1 transition-all">
            New Window
          </MenubarItem>
          <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1 transition-all">
            New Incognito Window
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1 transition-all">
            Print
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger
          variant="ghost"
          className="hover:bg-secondary-200 dark:hover:bg-secondary-700 rounded-md px-4 py-1 transition-all dark:text-white"
        >
          Edit
        </MenubarTrigger>
        <MenubarContent className="dark:bg-secondary-800 w-[200px] space-y-3 rounded-md bg-white p-2 text-xs">
          <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1 transition-all">
            Undo
          </MenubarItem>
          <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1 transition-all">
            Redo
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger className="hover:bg-secondary-200 flex cursor-pointer items-center justify-between rounded-md px-4 py-1 transition-all">
              Find
            </MenubarSubTrigger>
            <MenubarSubContent className="dark:bg-secondary-800 ml-1 w-[200px] space-y-3 rounded-md bg-white p-2 text-xs">
              <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1 transition-all">
                Search the web…
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1 transition-all">
                Find…
              </MenubarItem>
              <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1 transition-all">
                Find Next
              </MenubarItem>
              <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1 transition-all">
                Find Previous
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1 transition-all">
            Cut
          </MenubarItem>
          <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1 transition-all">
            Copy
          </MenubarItem>
          <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1 transition-all">
            Paste
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger
          variant="ghost"
          className="hover:bg-secondary-200 dark:hover:bg-secondary-700 rounded-md px-4 py-1 transition-all dark:text-white"
        >
          View
        </MenubarTrigger>
        <MenubarContent className="dark:bg-secondary-800 w-[215px] space-y-3 rounded-md bg-white p-2 text-xs">
          <MenubarCheckboxItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1 transition-all">
            Always Show Bookmarks Bar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1 transition-all">
            Always Show Full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1 transition-all">
            Reload
          </MenubarItem>
          <MenubarItem className="hover:bg-secondary-200 cursor-pointe dark:hover:bg-secondary-700r rounded-md px-4 py-1 transition-all">
            Force Reload
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1 transition-all">
            Toggle Fullscreen
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1 transition-all">
            Hide Sidebar
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger
          variant="ghost"
          className="hover:bg-secondary-200 dark:hover:bg-secondary-700 rounded-md px-4 py-1 transition-all dark:text-white"
        >
          Profiles
        </MenubarTrigger>
        <MenubarContent className="dark:bg-secondary-800 w-[200px] space-y-3 rounded-md bg-white p-2 text-xs">
          <MenubarRadioGroup value="1">
            <MenubarRadioItem
              value="1"
              className="hover:bg-secondary-200 dark:hover:bg-secondary-700 flex cursor-pointer items-center rounded-md px-4 py-1 transition-all"
            >
              Andy
            </MenubarRadioItem>
            <MenubarRadioItem
              value="2"
              className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1 transition-all"
            >
              Benolt
            </MenubarRadioItem>
            <MenubarRadioItem
              value="3"
              className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1 transition-all"
            >
              Luis
            </MenubarRadioItem>
            <MenubarSeparator />
            <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1 transition-all">
              Edit…
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1 transition-all">
              Add Profile…
            </MenubarItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  "menubar:unstyled": (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger variant="ghost">File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem isUnstyled>New Tab</MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarItem>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger variant="ghost">Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Search the web…</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Find…</MenubarItem>
              <MenubarItem>Find Next</MenubarItem>
              <MenubarItem>Find Previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger variant="ghost">View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
          <MenubarCheckboxItem>Always Show Full URLs</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem>Reload</MenubarItem>
          <MenubarItem>Force Reload</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Toggle Fullscreen</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Hide Sidebar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger variant="ghost">Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="1">
            <MenubarRadioItem value="1">Andy</MenubarRadioItem>
            <MenubarRadioItem value="2">Benolt</MenubarRadioItem>
            <MenubarRadioItem value="3">Luis</MenubarRadioItem>
            <MenubarSeparator />
            <MenubarItem>Edit…</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Add Profile…</MenubarItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};
