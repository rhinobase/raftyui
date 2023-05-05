import * as MenuBar from "../src/menubar/MenuBar";
const config = {
  title: "New/MenuBar",
  component: MenuBar,
};
export default config;

export function Default() {
  return (
    <>
      <div className="flex w-full flex-row justify-between">
        <div className="w-96">
          <MenuBar.Root size="sm">
            <MenuBar.Menu>
              <MenuBar.Trigger>File</MenuBar.Trigger>
              <MenuBar.Content>
                <MenuBar.Item>New Tab</MenuBar.Item>
                <MenuBar.Item>New Window</MenuBar.Item>
                <MenuBar.Item disabled>New Incognito Window</MenuBar.Item>
                <MenuBar.Separator />
                <MenuBar.Sub>
                  <MenuBar.SubTrigger>Share</MenuBar.SubTrigger>
                  <MenuBar.SubContent>
                    <MenuBar.Item>Email Link</MenuBar.Item>
                    <MenuBar.Item>Messages</MenuBar.Item>
                    <MenuBar.Item>Notes</MenuBar.Item>
                  </MenuBar.SubContent>
                </MenuBar.Sub>
                <MenuBar.Item>Print</MenuBar.Item>
              </MenuBar.Content>
            </MenuBar.Menu>
            <MenuBar.Menu>
              <MenuBar.Trigger>Edit</MenuBar.Trigger>

              <MenuBar.Content align="start">
                <MenuBar.Item>Undo</MenuBar.Item>
                <MenuBar.Item>Redo</MenuBar.Item>
                <MenuBar.Separator />
                <MenuBar.Sub>
                  <MenuBar.SubTrigger>Find</MenuBar.SubTrigger>

                  <MenuBar.SubContent alignOffset={-5}>
                    <MenuBar.Item>Search the web…</MenuBar.Item>
                    <MenuBar.Separator />
                    <MenuBar.Item>Find…</MenuBar.Item>
                    <MenuBar.Item>Find Next</MenuBar.Item>
                    <MenuBar.Item>Find Previous</MenuBar.Item>
                  </MenuBar.SubContent>
                </MenuBar.Sub>
                <MenuBar.Separator />
                <MenuBar.Item>Cut</MenuBar.Item>
                <MenuBar.Item>Copy</MenuBar.Item>
                <MenuBar.Item>Paste</MenuBar.Item>
              </MenuBar.Content>
            </MenuBar.Menu>
            <MenuBar.Menu>
              <MenuBar.Trigger>View</MenuBar.Trigger>
              <MenuBar.Content>
                <MenuBar.CheckboxItem checked={true}>
                  Always Show Bookmarks Bar
                </MenuBar.CheckboxItem>
                <MenuBar.CheckboxItem>
                  Always Show Full URLs
                </MenuBar.CheckboxItem>
                <MenuBar.Separator />
                <MenuBar.Item>Reload</MenuBar.Item>
                <MenuBar.Item disabled>Force Reload</MenuBar.Item>
                <MenuBar.Separator />
                <MenuBar.Item>Toggle Fullscreen</MenuBar.Item>
                <MenuBar.Separator />
                <MenuBar.Item>Hide Sidebar</MenuBar.Item>
              </MenuBar.Content>
            </MenuBar.Menu>
            <MenuBar.Menu>
              <MenuBar.Trigger>Profiles</MenuBar.Trigger>

              <MenuBar.Content align="start">
                <MenuBar.RadioGroup value="1">
                  <MenuBar.RadioItem value="1">Andy</MenuBar.RadioItem>
                  <MenuBar.RadioItem value="2">Benolt</MenuBar.RadioItem>
                  <MenuBar.RadioItem value="3">Luis</MenuBar.RadioItem>
                  <MenuBar.Separator />
                  <MenuBar.Item>Edit…</MenuBar.Item>
                  <MenuBar.Separator />
                  <MenuBar.Item>Add Profile…</MenuBar.Item>
                </MenuBar.RadioGroup>
              </MenuBar.Content>
            </MenuBar.Menu>
          </MenuBar.Root>
        </div>
        <div className="w-96">
          <MenuBar.Root>
            <MenuBar.Menu>
              <MenuBar.Trigger>File</MenuBar.Trigger>
              <MenuBar.Content>
                <MenuBar.Item>New Tab</MenuBar.Item>
                <MenuBar.Item>New Window</MenuBar.Item>
                <MenuBar.Item disabled>New Incognito Window</MenuBar.Item>
                <MenuBar.Separator />
                <MenuBar.Sub>
                  <MenuBar.SubTrigger>Share</MenuBar.SubTrigger>
                  <MenuBar.SubContent>
                    <MenuBar.Item>Email Link</MenuBar.Item>
                    <MenuBar.Item>Messages</MenuBar.Item>
                    <MenuBar.Item>Notes</MenuBar.Item>
                  </MenuBar.SubContent>
                </MenuBar.Sub>
                <MenuBar.Item>Print</MenuBar.Item>
              </MenuBar.Content>
            </MenuBar.Menu>
            <MenuBar.Menu>
              <MenuBar.Trigger>Edit</MenuBar.Trigger>

              <MenuBar.Content align="start">
                <MenuBar.Item>Undo</MenuBar.Item>
                <MenuBar.Item>Redo</MenuBar.Item>
                <MenuBar.Separator />
                <MenuBar.Sub>
                  <MenuBar.SubTrigger>Find</MenuBar.SubTrigger>

                  <MenuBar.SubContent alignOffset={-5}>
                    <MenuBar.Item>Search the web…</MenuBar.Item>
                    <MenuBar.Separator />
                    <MenuBar.Item>Find…</MenuBar.Item>
                    <MenuBar.Item>Find Next</MenuBar.Item>
                    <MenuBar.Item>Find Previous</MenuBar.Item>
                  </MenuBar.SubContent>
                </MenuBar.Sub>
                <MenuBar.Separator />
                <MenuBar.Item>Cut</MenuBar.Item>
                <MenuBar.Item>Copy</MenuBar.Item>
                <MenuBar.Item>Paste</MenuBar.Item>
              </MenuBar.Content>
            </MenuBar.Menu>
            <MenuBar.Menu>
              <MenuBar.Trigger>View</MenuBar.Trigger>
              <MenuBar.Content>
                <MenuBar.CheckboxItem checked={true}>
                  Always Show Bookmarks Bar
                </MenuBar.CheckboxItem>
                <MenuBar.CheckboxItem>
                  Always Show Full URLs
                </MenuBar.CheckboxItem>
                <MenuBar.Separator />
                <MenuBar.Item>Reload</MenuBar.Item>
                <MenuBar.Item disabled>Force Reload</MenuBar.Item>
                <MenuBar.Separator />
                <MenuBar.Item>Toggle Fullscreen</MenuBar.Item>
                <MenuBar.Separator />
                <MenuBar.Item>Hide Sidebar</MenuBar.Item>
              </MenuBar.Content>
            </MenuBar.Menu>
            <MenuBar.Menu>
              <MenuBar.Trigger>Profiles</MenuBar.Trigger>

              <MenuBar.Content align="start">
                <MenuBar.RadioGroup value="1">
                  <MenuBar.RadioItem value="1">Andy</MenuBar.RadioItem>
                  <MenuBar.RadioItem value="2">Benolt</MenuBar.RadioItem>
                  <MenuBar.RadioItem value="3">Luis</MenuBar.RadioItem>
                  <MenuBar.Separator />
                  <MenuBar.Item>Edit…</MenuBar.Item>
                  <MenuBar.Separator />
                  <MenuBar.Item>Add Profile…</MenuBar.Item>
                </MenuBar.RadioGroup>
              </MenuBar.Content>
            </MenuBar.Menu>
          </MenuBar.Root>
        </div>
        <div className="w-96">
          <MenuBar.Root size="lg">
            <MenuBar.Menu>
              <MenuBar.Trigger>File</MenuBar.Trigger>
              <MenuBar.Content>
                <MenuBar.Item>New Tab</MenuBar.Item>
                <MenuBar.Item>New Window</MenuBar.Item>
                <MenuBar.Item disabled>New Incognito Window</MenuBar.Item>
                <MenuBar.Separator />
                <MenuBar.Sub>
                  <MenuBar.SubTrigger>Share</MenuBar.SubTrigger>
                  <MenuBar.SubContent>
                    <MenuBar.Item>Email Link</MenuBar.Item>
                    <MenuBar.Item>Messages</MenuBar.Item>
                    <MenuBar.Item>Notes</MenuBar.Item>
                  </MenuBar.SubContent>
                </MenuBar.Sub>
                <MenuBar.Item>Print</MenuBar.Item>
              </MenuBar.Content>
            </MenuBar.Menu>
            <MenuBar.Menu>
              <MenuBar.Trigger>Edit</MenuBar.Trigger>

              <MenuBar.Content align="start">
                <MenuBar.Item>Undo</MenuBar.Item>
                <MenuBar.Item>Redo</MenuBar.Item>
                <MenuBar.Separator />
                <MenuBar.Sub>
                  <MenuBar.SubTrigger>Find</MenuBar.SubTrigger>

                  <MenuBar.SubContent alignOffset={-5}>
                    <MenuBar.Item>Search the web…</MenuBar.Item>
                    <MenuBar.Separator />
                    <MenuBar.Item>Find…</MenuBar.Item>
                    <MenuBar.Item>Find Next</MenuBar.Item>
                    <MenuBar.Item>Find Previous</MenuBar.Item>
                  </MenuBar.SubContent>
                </MenuBar.Sub>
                <MenuBar.Separator />
                <MenuBar.Item>Cut</MenuBar.Item>
                <MenuBar.Item>Copy</MenuBar.Item>
                <MenuBar.Item>Paste</MenuBar.Item>
              </MenuBar.Content>
            </MenuBar.Menu>
            <MenuBar.Menu>
              <MenuBar.Trigger>View</MenuBar.Trigger>
              <MenuBar.Content>
                <MenuBar.CheckboxItem checked={true}>
                  Always Show Bookmarks Bar
                </MenuBar.CheckboxItem>
                <MenuBar.CheckboxItem>
                  Always Show Full URLs
                </MenuBar.CheckboxItem>
                <MenuBar.Separator />
                <MenuBar.Item>Reload</MenuBar.Item>
                <MenuBar.Item disabled>Force Reload</MenuBar.Item>
                <MenuBar.Separator />
                <MenuBar.Item>Toggle Fullscreen</MenuBar.Item>
                <MenuBar.Separator />
                <MenuBar.Item>Hide Sidebar</MenuBar.Item>
              </MenuBar.Content>
            </MenuBar.Menu>
            <MenuBar.Menu>
              <MenuBar.Trigger>Profiles</MenuBar.Trigger>

              <MenuBar.Content align="start">
                <MenuBar.RadioGroup value="1">
                  <MenuBar.RadioItem value="1">Andy</MenuBar.RadioItem>
                  <MenuBar.RadioItem value="2">Benolt</MenuBar.RadioItem>
                  <MenuBar.RadioItem value="3">Luis</MenuBar.RadioItem>
                  <MenuBar.Separator />
                  <MenuBar.Item>Edit…</MenuBar.Item>
                  <MenuBar.Separator />
                  <MenuBar.Item>Add Profile…</MenuBar.Item>
                </MenuBar.RadioGroup>
              </MenuBar.Content>
            </MenuBar.Menu>
          </MenuBar.Root>
        </div>
      </div>
    </>
  );
}
