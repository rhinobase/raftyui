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
  "menubar:barebone": (
    <Menubar isBarebone className="flex items-center w-max">
      <MenubarMenu>
        <MenubarTrigger
          variant="ghost"
          className="hover:bg-secondary-200 dark:hover:bg-secondary-700 dark:text-white px-4 py-1 rounded-md transition-all"
        >
          File
        </MenubarTrigger>
        <MenubarContent className="bg-white p-2 text-xs rounded-md space-y-3 w-[200px] dark:bg-secondary-800">
          <MenubarItem className="hover:bg-secondary-200 transition-all rounded-md px-4 py-1 cursor-pointer  dark:hover:bg-secondary-700">
            New Tab
          </MenubarItem>
          <MenubarItem className="hover:bg-secondary-200 transition-all rounded-md px-4 py-1 cursor-pointer dark:hover:bg-secondary-700">
            New Window
          </MenubarItem>
          <MenubarItem className="hover:bg-secondary-200 transition-all rounded-md px-4 py-1 cursor-pointer dark:hover:bg-secondary-700">
            New Incognito Window
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem className="hover:bg-secondary-200 transition-all rounded-md px-4 py-1 cursor-pointer dark:hover:bg-secondary-700">
            Print
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger
          variant="ghost"
          className="hover:bg-secondary-200 dark:hover:bg-secondary-700 dark:text-white px-4 py-1 rounded-md transition-all"
        >
          Edit
        </MenubarTrigger>
        <MenubarContent className="bg-white p-2 text-xs rounded-md space-y-3 w-[200px] dark:bg-secondary-800">
          <MenubarItem className="hover:bg-secondary-200 transition-all rounded-md px-4 py-1 cursor-pointer dark:hover:bg-secondary-700">
            Undo
          </MenubarItem>
          <MenubarItem className="hover:bg-secondary-200 transition-all rounded-md px-4 py-1 cursor-pointer dark:hover:bg-secondary-700">
            Redo
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger className="flex justify-between items-center hover:bg-secondary-200 transition-all rounded-md px-4 py-1 cursor-pointer">
              Find
            </MenubarSubTrigger>
            <MenubarSubContent className="ml-1 bg-white p-2 text-xs rounded-md space-y-3 w-[200px] dark:bg-secondary-800">
              <MenubarItem className="hover:bg-secondary-200 transition-all rounded-md px-4 py-1 cursor-pointer dark:hover:bg-secondary-700">
                Search the web…
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem className="hover:bg-secondary-200 transition-all rounded-md px-4 py-1 cursor-pointer dark:hover:bg-secondary-700">
                Find…
              </MenubarItem>
              <MenubarItem className="hover:bg-secondary-200 transition-all rounded-md px-4 py-1 cursor-pointer dark:hover:bg-secondary-700">
                Find Next
              </MenubarItem>
              <MenubarItem className="hover:bg-secondary-200 transition-all rounded-md px-4 py-1 cursor-pointer dark:hover:bg-secondary-700">
                Find Previous
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem className="hover:bg-secondary-200 transition-all rounded-md px-4 py-1 cursor-pointer dark:hover:bg-secondary-700">
            Cut
          </MenubarItem>
          <MenubarItem className="hover:bg-secondary-200 transition-all rounded-md px-4 py-1 cursor-pointer dark:hover:bg-secondary-700">
            Copy
          </MenubarItem>
          <MenubarItem className="hover:bg-secondary-200 transition-all rounded-md px-4 py-1 cursor-pointer dark:hover:bg-secondary-700">
            Paste
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger
          variant="ghost"
          className="hover:bg-secondary-200 dark:hover:bg-secondary-700 dark:text-white px-4 py-1 rounded-md transition-all"
        >
          View
        </MenubarTrigger>
        <MenubarContent className="bg-white p-2 text-xs rounded-md space-y-3 w-[215px] dark:bg-secondary-800">
          <MenubarCheckboxItem className="hover:bg-secondary-200 transition-all rounded-md px-4 py-1 cursor-pointer dark:hover:bg-secondary-700">
            Always Show Bookmarks Bar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem className="hover:bg-secondary-200 transition-all rounded-md px-4 py-1 cursor-pointer dark:hover:bg-secondary-700">
            Always Show Full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem className="hover:bg-secondary-200 transition-all rounded-md px-4 py-1 cursor-pointer dark:hover:bg-secondary-700">
            Reload
          </MenubarItem>
          <MenubarItem className="hover:bg-secondary-200 transition-all rounded-md px-4 py-1 cursor-pointe dark:hover:bg-secondary-700r">
            Force Reload
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem className="hover:bg-secondary-200 transition-all rounded-md px-4 py-1 cursor-pointer dark:hover:bg-secondary-700">
            Toggle Fullscreen
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem className="hover:bg-secondary-200 transition-all rounded-md px-4 py-1 cursor-pointer dark:hover:bg-secondary-700">
            Hide Sidebar
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger
          variant="ghost"
          className="hover:bg-secondary-200 dark:hover:bg-secondary-700 dark:text-white px-4 py-1 rounded-md transition-all"
        >
          Profiles
        </MenubarTrigger>
        <MenubarContent className="bg-white p-2 text-xs rounded-md space-y-3 w-[200px] dark:bg-secondary-800">
          <MenubarRadioGroup value="1">
            <MenubarRadioItem
              value="1"
              className="hover:bg-secondary-200 transition-all rounded-md px-4 py-1 cursor-pointer dark:hover:bg-secondary-700 flex items-center"
            >
              Andy
            </MenubarRadioItem>
            <MenubarRadioItem
              value="2"
              className="hover:bg-secondary-200 transition-all rounded-md px-4 py-1 cursor-pointer dark:hover:bg-secondary-700"
            >
              Benolt
            </MenubarRadioItem>
            <MenubarRadioItem
              value="3"
              className="hover:bg-secondary-200 transition-all rounded-md px-4 py-1 cursor-pointer dark:hover:bg-secondary-700"
            >
              Luis
            </MenubarRadioItem>
            <MenubarSeparator />
            <MenubarItem className="hover:bg-secondary-200 transition-all rounded-md px-4 py-1 cursor-pointer dark:hover:bg-secondary-700">
              Edit…
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="hover:bg-secondary-200 transition-all rounded-md px-4 py-1 cursor-pointer dark:hover:bg-secondary-700">
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
