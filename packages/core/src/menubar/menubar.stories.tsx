import { Grid } from "@rhinobase/storybook/components";
import {
  MenuBar,
  MenuBarButton,
  MenuBarCheckboxItem,
  MenuBarContent,
  MenuBarDivider,
  MenuBarItem,
  MenuBarMenu,
  MenuBarRadioGroup,
  MenuBarRadioItem,
  MenuBarSubMenuContent,
  MenuBarSubMenu,
  MenuBarSubMenuButton,
} from "@rhinobase/ui";

export default {
  title: "New/MenuBar",
  component: MenuBar,
};

export function Default() {
  return (
    <Grid>
      <div className="w-96">
        <MenuBar>
          <MenuBarMenu>
            <MenuBarButton>File</MenuBarButton>
            <MenuBarContent>
              <MenuBarItem>New Tab</MenuBarItem>
              <MenuBarItem>New Window</MenuBarItem>
              <MenuBarItem disabled>New Incognito Window</MenuBarItem>
              <MenuBarDivider />
              <MenuBarSubMenu>
                <MenuBarSubMenuButton>Share</MenuBarSubMenuButton>
                <MenuBarSubMenuContent>
                  <MenuBarItem>Email Link</MenuBarItem>
                  <MenuBarItem>Messages</MenuBarItem>
                  <MenuBarItem>Notes</MenuBarItem>
                </MenuBarSubMenuContent>
              </MenuBarSubMenu>
              <MenuBarItem>Print</MenuBarItem>
            </MenuBarContent>
          </MenuBarMenu>
          <MenuBarMenu>
            <MenuBarButton>Edit</MenuBarButton>

            <MenuBarContent align="start">
              <MenuBarItem>Undo</MenuBarItem>
              <MenuBarItem>Redo</MenuBarItem>
              <MenuBarDivider />
              <MenuBarSubMenu>
                <MenuBarSubMenuButton>Find</MenuBarSubMenuButton>

                <MenuBarSubMenuContent alignOffset={-5}>
                  <MenuBarItem>Search the web…</MenuBarItem>
                  <MenuBarDivider />
                  <MenuBarItem>Find…</MenuBarItem>
                  <MenuBarItem>Find Next</MenuBarItem>
                  <MenuBarItem>Find Previous</MenuBarItem>
                </MenuBarSubMenuContent>
              </MenuBarSubMenu>
              <MenuBarDivider />
              <MenuBarItem>Cut</MenuBarItem>
              <MenuBarItem>Copy</MenuBarItem>
              <MenuBarItem>Paste</MenuBarItem>
            </MenuBarContent>
          </MenuBarMenu>
          <MenuBarMenu>
            <MenuBarButton>View</MenuBarButton>
            <MenuBarContent>
              <MenuBarCheckboxItem checked={true}>Always Show Bookmarks Bar</MenuBarCheckboxItem>
              <MenuBarCheckboxItem>Always Show Full URLs</MenuBarCheckboxItem>
              <MenuBarDivider />
              <MenuBarItem>Reload</MenuBarItem>
              <MenuBarItem disabled>Force Reload</MenuBarItem>
              <MenuBarDivider />
              <MenuBarItem>Toggle Fullscreen</MenuBarItem>
              <MenuBarDivider />
              <MenuBarItem>Hide Sidebar</MenuBarItem>
            </MenuBarContent>
          </MenuBarMenu>
          <MenuBarMenu>
            <MenuBarButton>Profiles</MenuBarButton>

            <MenuBarContent align="start">
              <MenuBarRadioGroup value="1">
                <MenuBarRadioItem value="1">Andy</MenuBarRadioItem>
                <MenuBarRadioItem value="2">Benolt</MenuBarRadioItem>
                <MenuBarRadioItem value="3">Luis</MenuBarRadioItem>
                <MenuBarDivider />
                <MenuBarItem>Edit…</MenuBarItem>
                <MenuBarDivider />
                <MenuBarItem>Add Profile…</MenuBarItem>
              </MenuBarRadioGroup>
            </MenuBarContent>
          </MenuBarMenu>
        </MenuBar>
      </div>
    </Grid>
  );
}
