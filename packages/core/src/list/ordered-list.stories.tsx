import { Grid } from "@rhinobase/docs/components";
import { OrderedList } from "./OrderedList";
import React from "react";
import { ListItem } from "./ListItem";
import { UnorderedList } from "./UnorderedList";
import { List } from "./List";

const config = {
  title: "New/List",
  component: OrderedList,
};
export default config;

export function OrderList() {
  return (
    <Grid>
      <OrderedList>
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </OrderedList>
    </Grid>
  );
}
export function UnorderList() {
  return (
    <Grid>
      <UnorderedList>
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </UnorderedList>
    </Grid>
  );
}
export function unstyled() {
  return (
    <Grid>
      <List className="space-y-2">
        <ListItem className="flex items-center gap-2">
          <Icon /> Lorem ipsum dolor sit amet
        </ListItem>
        <ListItem className="flex items-center gap-2">
          <Icon /> Consectetur adipiscing elit
        </ListItem>
        <ListItem className="flex items-center gap-2">
          <Icon /> Integer molestie lorem at massa
        </ListItem>
        <ListItem className="flex items-center gap-2">
          <Icon /> Facilisis in pretium nisl aliquet
        </ListItem>
      </List>
    </Grid>
  );
}

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="text-success-500 h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
