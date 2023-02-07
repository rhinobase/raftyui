import { Grid } from "@rhinobase/docs/components";
import React from "react";
import {
  ContextMenu,
  ContextMenuButton,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuDivider,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSubContent,
  ContextMenuSubMenu,
  ContextMenuSubMenuButton,
} from "./ContextMenu";

export default {
  title: "New/ContextMenu",
  component: ContextMenu,
};

export function Default() {
  return (
    <Grid>
      <ContextMenu>
        <ContextMenuButton>
          <div className="border border-dashed p-5 text-center dark:border-zinc-700 dark:text-zinc-100">
            Context
          </div>
        </ContextMenuButton>
        <ContextMenuContent>
          <ContextMenuItem>Back</ContextMenuItem>
          <ContextMenuItem disabled>Forward</ContextMenuItem>
          <ContextMenuItem>Reload</ContextMenuItem>
          <ContextMenuSubMenu>
            <ContextMenuSubMenuButton>More Tools</ContextMenuSubMenuButton>
            <ContextMenuSubContent>
              <ContextMenuItem>Save Page As...</ContextMenuItem>
              <ContextMenuItem>Create Shortcut...</ContextMenuItem>
              <ContextMenuItem>New Window...</ContextMenuItem>
              <ContextMenuDivider />
              <ContextMenuItem>Developer Tools</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSubMenu>
          <ContextMenuDivider />
          <ContextMenuCheckboxItem>Show Bookmarks</ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked>
            Show Full URLs
          </ContextMenuCheckboxItem>
          <ContextMenuDivider />
          <ContextMenuLabel>People</ContextMenuLabel>
          <ContextMenuRadioGroup value="1">
            <ContextMenuRadioItem value="1">Jack</ContextMenuRadioItem>
            <ContextMenuRadioItem value="2">Denial</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    </Grid>
  );
}
