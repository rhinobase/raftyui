import { List, ListItem, OrderedList, UnorderedList } from "@rafty/ui";
import { HiCheckCircle } from "react-icons/hi2";

export const list_examples = {
  "list:usage": (
    <List>
      <ListItem>Lorem ipsum dolor sit amet</ListItem>
      <ListItem>Consectetur adipiscing elit</ListItem>
      <ListItem>Integer molestie lorem at massa</ListItem>
      <ListItem>Facilisis in pretium nisl aliquet</ListItem>
    </List>
  ),
  "list:order_list": (
    <OrderedList>
      <ListItem>Lorem ipsum dolor sit amet</ListItem>
      <ListItem>Consectetur adipiscing elit</ListItem>
      <ListItem>Integer molestie lorem at massa</ListItem>
      <ListItem>Facilisis in pretium nisl aliquet</ListItem>
    </OrderedList>
  ),
  "list:unorder_list": (
    <UnorderedList>
      <ListItem>Lorem ipsum dolor sit amet</ListItem>
      <ListItem>Consectetur adipiscing elit</ListItem>
      <ListItem>Integer molestie lorem at massa</ListItem>
      <ListItem>Facilisis in pretium nisl aliquet</ListItem>
    </UnorderedList>
  ),
  "list:unstyled": (
    <List>
      <ListItem
        isUnstyled
        className="flex gap-2 items-center font-bold text-xl "
      >
        <HiCheckCircle />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </ListItem>
      <ListItem className="flex gap-2 items-center">
        <HiCheckCircle />
        Assumenda, quia temporibus eveniet a libero incidunt suscipit
      </ListItem>

      <ListItem className="flex gap-2 items-center">
        <HiCheckCircle />
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </ListItem>
      <ListItem className="flex gap-2 items-center">
        <HiCheckCircle />
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </ListItem>
    </List>
  ),
};
