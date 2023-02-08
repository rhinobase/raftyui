import { useState } from "react";
import { Grid } from "@rhinobase/docs/components";
import { Button } from "../index";
import React from "react";
import * as Menu from "./Menu";

export default {
  title: "New/Menu",
  component: Menu,
};

export function Default() {
  return (
    <Grid>
      <Menu.Root>
        <Menu.Trigger size="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </Menu.Trigger>
        <Menu.Content side="bottom" align="end">
          <Menu.Group title="Order">
            <Menu.Item>New Tab</Menu.Item>
            <Menu.Item>New Window</Menu.Item>
            <Menu.Item disabled>New Private Window </Menu.Item>
          </Menu.Group>
        </Menu.Content>
      </Menu.Root>
    </Grid>
  );
}

export function AllFeatures() {
  const [order, setOrder] = useState("1");
  const [checked, setChecked] = useState<Map<string, boolean>>(new Map());
  return (
    <Grid>
      <Menu.Root>
        <Menu.Trigger size="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </Menu.Trigger>
        <Menu.Content>
          <Menu.Group title="order">
            <Menu.Item>New Tab</Menu.Item>
            <Menu.Item>New Window</Menu.Item>
            <Menu.Item disabled>New Private Window </Menu.Item>
          </Menu.Group>
          <Menu.Sub>
            <Menu.SubTrigger style={{ justifyContent: "space-between" }}>
              More Tools{" "}
            </Menu.SubTrigger>
            <Menu.SubContent>
              <Menu.Item className="justify-between">
                Save Page As… <div className="RightSlot">⌘+S</div>
              </Menu.Item>
              <Menu.Item>Create Shortcut…</Menu.Item>
              <Menu.Item>Name Window…</Menu.Item>
              <Menu.Separator />
              <Menu.Item>Developer Tools</Menu.Item>
            </Menu.SubContent>
          </Menu.Sub>
          <Menu.Separator />
          <Menu.CheckboxItem
            checked={checked.get("1")}
            onCheckedChange={() =>
              setChecked((prev) => {
                if (prev.get("1")) prev.delete("1");
                else prev.set("1", true);
                return new Map(prev);
              })
            }
          >
            Show Bookmarks <div className="RightSlot">⌘+B</div>
          </Menu.CheckboxItem>
          <Menu.CheckboxItem
            checked={checked.get("2")}
            onCheckedChange={() =>
              setChecked((prev) => {
                if (prev.get("2")) prev.delete("2");
                else prev.set("2", true);
                return new Map(prev);
              })
            }
          >
            Show Full URLs
          </Menu.CheckboxItem>
          <Menu.Separator />
          <Menu.Item>New Tab</Menu.Item>
          <Menu.RadioGroup value={order} onValueChange={setOrder}>
            <Menu.RadioItem value="1">Pedro Duarte</Menu.RadioItem>
            <Menu.RadioItem value="2">Colm Tuite</Menu.RadioItem>
          </Menu.RadioGroup>
        </Menu.Content>
      </Menu.Root>
    </Grid>
  );
}

export function CheckableOptions() {
  const [checked, setChecked] = useState<Map<string, boolean>>(new Map());
  return (
    <Grid>
      <Menu.Root>
        <Menu.Trigger size="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </Menu.Trigger>
        <Menu.Content>
          <Menu.CheckboxItem
            checked={checked.get("1")}
            onCheckedChange={() =>
              setChecked((prev) => {
                if (prev.get("1")) prev.delete("1");
                else prev.set("1", true);
                return new Map(prev);
              })
            }
          >
            Show Bookmarks <div className="RightSlot">⌘+B</div>
          </Menu.CheckboxItem>
          <Menu.CheckboxItem
            checked={checked.get("2")}
            onCheckedChange={() =>
              setChecked((prev) => {
                if (prev.get("2")) prev.delete("2");
                else prev.set("2", true);
                return new Map(prev);
              })
            }
          >
            Show Full URLs
          </Menu.CheckboxItem>
        </Menu.Content>
      </Menu.Root>
    </Grid>
  );
}

export function RadioOptions() {
  const [order, setOrder] = useState("1");
  return (
    <Grid>
      <Menu.Root>
        <Menu.Trigger size="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </Menu.Trigger>
        <Menu.Content>
          <Menu.RadioGroup value={order} onValueChange={setOrder}>
            <Menu.RadioItem value="1">Pedro Duarte</Menu.RadioItem>
            <Menu.RadioItem value="2">Colm Tuite</Menu.RadioItem>
          </Menu.RadioGroup>
        </Menu.Content>
      </Menu.Root>
    </Grid>
  );
}

export function SubMenus() {
  const [order, setOrder] = useState("1");
  return (
    <Grid>
      <Menu.Root>
        <Menu.Trigger size="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </Menu.Trigger>
        <Menu.Content>
          <Menu.Group title="order">
            <Menu.Item>New Tab</Menu.Item>
            <Menu.Item>New Window</Menu.Item>
            <Menu.Item disabled>New Private Window </Menu.Item>
          </Menu.Group>
          <Menu.Sub>
            <Menu.SubTrigger style={{ justifyContent: "space-between" }}>
              More Tools{" "}
            </Menu.SubTrigger>

            <Menu.SubContent>
              <Menu.Item>
                Save Page As… <div className="RightSlot">⌘+S</div>
              </Menu.Item>
              <Menu.Item>Create Shortcut…</Menu.Item>
              <Menu.Item>Name Window…</Menu.Item>
              <Menu.Separator />
              <Menu.Item>Developer Tools</Menu.Item>
            </Menu.SubContent>
          </Menu.Sub>
        </Menu.Content>
      </Menu.Root>
    </Grid>
  );
}
