import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Meta, StoryObj } from "@storybook/react";
import { List } from "./List";
import { ListItem } from "./ListItem";
import { OrderedList as OL } from "./OrderedList";
import { UnorderedList as UL } from "./UnorderedList";

const meta: Meta<typeof List> = {
  title: "Components / List",
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  render: () => (
    <List>
      <ListItem>Lorem ipsum dolor sit amet.</ListItem>
      <ListItem>Consectetur adipiscing elit.</ListItem>
      <ListItem>Integer molestie lorem at massa.</ListItem>
      <ListItem>Facilisis in pretium nisl aliquet.</ListItem>
    </List>
  ),
};

export const OrderedList: Story = {
  render: () => (
    <OL>
      <ListItem>Lorem ipsum dolor sit amet</ListItem>
      <ListItem>Consectetur adipiscing elit</ListItem>
      <ListItem>Integer molestie lorem at massa</ListItem>
      <ListItem>Facilisis in pretium nisl aliquet</ListItem>
    </OL>
  ),
};

export const UnorderedList: Story = {
  render: () => (
    <UL>
      <ListItem>Lorem ipsum dolor sit amet</ListItem>
      <ListItem>Consectetur adipiscing elit</ListItem>
      <ListItem>Integer molestie lorem at massa</ListItem>
      <ListItem>Facilisis in pretium nisl aliquet</ListItem>
    </UL>
  ),
};

export const ListWithIcon: Story = {
  render: () => (
    <List>
      <ListItem className="flex items-center gap-2">
        <CheckCircleIcon className="stroke-2" height={16} width={16} />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </ListItem>
      <ListItem className="flex items-center gap-2">
        <CheckCircleIcon className="stroke-2" height={16} width={16} />
        Assumenda, quia temporibus eveniet a libero incidunt suscipit
      </ListItem>
      <ListItem className="flex items-center gap-2">
        <CheckCircleIcon className="stroke-2" height={16} width={16} />
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </ListItem>
      <ListItem className="flex items-center gap-2">
        <CheckCircleIcon className="stroke-2" height={16} width={16} />
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </ListItem>
    </List>
  ),
};
