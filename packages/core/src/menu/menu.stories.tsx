import { useState } from "react";
import { HiBars3, HiChevronRight } from "react-icons/hi2";
import { Grid } from "@rhinobase/storybook/components";
import { Button } from "@rhinobase/ui";
import {
  Menu,
  MenuButton,
  MenuCheckboxItem,
  MenuItem,
  MenuGroup,
  MenuContent,
  MenuRadioGroup,
  MenuRadioItem,
  MenuDivider,
  SubMenu,
  SubMenuButton,
  SubMenuContent,
} from "./Menu";

export default {
  title: "New/Menu",
  component: Menu,
};

export function Default() {
  return (
    <Grid>
      <Menu>
        <MenuButton>
          <HiBars3 />
        </MenuButton>
        <MenuContent side="bottom" align="end">
          <MenuGroup title="Order">
            <MenuItem>New Tab</MenuItem>
            <MenuItem>New Window</MenuItem>
            <MenuItem disabled>New Private Window </MenuItem>
          </MenuGroup>
        </MenuContent>
      </Menu>
    </Grid>
  );
}

export function AllFeatures() {
  const [order, setOrder] = useState("1");
  const [checked, setChecked] = useState<Map<string, boolean>>(new Map());
  return (
    <Grid>
      <Menu>
        <MenuButton>
          <HiBars3 />
        </MenuButton>
        <MenuContent>
          <MenuGroup title="order">
            <MenuItem>New Tab</MenuItem>
            <MenuItem>New Window</MenuItem>
            <MenuItem disabled>New Private Window </MenuItem>
          </MenuGroup>
          <SubMenu>
            <SubMenuButton style={{ justifyContent: "space-between" }}>More Tools </SubMenuButton>
            <SubMenuContent>
              <MenuItem>
                Save Page As… <div className="RightSlot">⌘+S</div>
              </MenuItem>
              <MenuItem>Create Shortcut…</MenuItem>
              <MenuItem>Name Window…</MenuItem>
              <MenuDivider />
              <MenuItem>Developer Tools</MenuItem>
            </SubMenuContent>
          </SubMenu>
          <MenuDivider />
          <MenuCheckboxItem
            checked={checked.get("1")}
            onCheckedChange={() =>
              setChecked((prev) => {
                if (prev.get("1")) prev.delete("1");
                else prev.set("1", true);
                return new Map(prev);
              })
            }>
            Show Bookmarks <div className="RightSlot">⌘+B</div>
          </MenuCheckboxItem>
          <MenuCheckboxItem
            checked={checked.get("2")}
            onCheckedChange={() =>
              setChecked((prev) => {
                if (prev.get("2")) prev.delete("2");
                else prev.set("2", true);
                return new Map(prev);
              })
            }>
            Show Full URLs
          </MenuCheckboxItem>
          <MenuDivider />
          <MenuItem>New Tab</MenuItem>
          <MenuRadioGroup value={order} onValueChange={setOrder}>
            <MenuRadioItem value="1">Pedro Duarte</MenuRadioItem>
            <MenuRadioItem value="2">Colm Tuite</MenuRadioItem>
          </MenuRadioGroup>
        </MenuContent>
      </Menu>
    </Grid>
  );
}

export function CheckableOptions() {
  const [checked, setChecked] = useState<Map<string, boolean>>(new Map());
  return (
    <Grid>
      <Menu>
        <MenuButton>
          <HiBars3 />
        </MenuButton>
        <MenuContent>
          <MenuCheckboxItem
            checked={checked.get("1")}
            onCheckedChange={() =>
              setChecked((prev) => {
                if (prev.get("1")) prev.delete("1");
                else prev.set("1", true);
                return new Map(prev);
              })
            }>
            Show Bookmarks <div className="RightSlot">⌘+B</div>
          </MenuCheckboxItem>
          <MenuCheckboxItem
            checked={checked.get("2")}
            onCheckedChange={() =>
              setChecked((prev) => {
                if (prev.get("2")) prev.delete("2");
                else prev.set("2", true);
                return new Map(prev);
              })
            }>
            Show Full URLs
          </MenuCheckboxItem>
        </MenuContent>
      </Menu>
    </Grid>
  );
}

export function RadioOptions() {
  const [order, setOrder] = useState("1");
  return (
    <Grid>
      <Menu>
        <MenuButton asChild>
          <Button size="icon">
            <HiBars3 />
          </Button>
        </MenuButton>
        <MenuContent>
          <MenuRadioGroup value={order} onValueChange={setOrder}>
            <MenuRadioItem value="1">Pedro Duarte</MenuRadioItem>
            <MenuRadioItem value="2">Colm Tuite</MenuRadioItem>
          </MenuRadioGroup>
        </MenuContent>
      </Menu>
    </Grid>
  );
}

export function SubMenus() {
  const [order, setOrder] = useState("1");
  return (
    <Grid>
      <Menu>
        <MenuButton asChild>
          <Button size="icon">
            <HiBars3 />
          </Button>
        </MenuButton>
        <MenuContent>
          <MenuGroup title="order">
            <MenuItem>New Tab</MenuItem>
            <MenuItem>New Window</MenuItem>
            <MenuItem disabled>New Private Window </MenuItem>
          </MenuGroup>
          <SubMenu>
            <SubMenuButton style={{ justifyContent: "space-between" }}>
              More Tools{" "}
              <span>
                <HiChevronRight />
              </span>
            </SubMenuButton>

            <SubMenuContent>
              <MenuItem>
                Save Page As… <div className="RightSlot">⌘+S</div>
              </MenuItem>
              <MenuItem>Create Shortcut…</MenuItem>
              <MenuItem>Name Window…</MenuItem>
              <MenuDivider />
              <MenuItem>Developer Tools</MenuItem>
            </SubMenuContent>
          </SubMenu>
        </MenuContent>
      </Menu>
    </Grid>
  );
}
