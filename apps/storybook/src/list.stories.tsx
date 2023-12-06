import { Meta, StoryObj } from "@storybook/react";
import { List, ListItem, OrderedList, UnorderedList } from "@rafty/ui";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const meta: Meta<typeof OrderedList> = {
  title: "Components / List",
};

export default meta;
type Story = StoryObj<typeof OrderedList>;

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

export const Ordered_List: Story = {
  render: () => (
    <OrderedList>
      <ListItem>Lorem ipsum dolor sit amet</ListItem>
      <ListItem>Consectetur adipiscing elit</ListItem>
      <ListItem>Integer molestie lorem at massa</ListItem>
      <ListItem>Facilisis in pretium nisl aliquet</ListItem>
    </OrderedList>
  ),
};

export const Unordered_List: Story = {
  render: () => (
    <UnorderedList>
      <ListItem>Lorem ipsum dolor sit amet</ListItem>
      <ListItem>Consectetur adipiscing elit</ListItem>
      <ListItem>Integer molestie lorem at massa</ListItem>
      <ListItem>Facilisis in pretium nisl aliquet</ListItem>
    </UnorderedList>
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
