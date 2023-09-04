import { MenuContent, MenuItem, MenuTrigger, Menu } from "@rafty/ui";
import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi2";

export default function MenuOpen() {
  return (
    <>
      <Menu>
        <MenuTrigger rightIcon={<HiOutlineChevronDown />}>Actions</MenuTrigger>
        <MenuContent>
          <MenuItem>New Tab</MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuItem disabled>New Private Window </MenuItem>
        </MenuContent>
      </Menu>
    </>
  );
}
