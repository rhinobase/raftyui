import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { List, ListItem } from "@rafty/ui";

export function ListExample() {
  return (
    <List>
      <ListItem className="flex items-center gap-2">
        <CheckCircleIcon width={16} height={16} className="stroke-2" />
        Lorem ipsum dolor sit amet,
      </ListItem>
      <ListItem className="flex items-center gap-2">
        <CheckCircleIcon width={16} height={16} className="stroke-2" />
        Assumenda, quia temporibus eveniet
      </ListItem>
      <ListItem className="flex items-center gap-2">
        <CheckCircleIcon width={16} height={16} className="stroke-2" />
        Quidem, ipsam illum quis sed
      </ListItem>
      <ListItem className="flex items-center gap-2">
        <CheckCircleIcon width={16} height={16} className="stroke-2" />
        voluptatum quae eum fugit earum
      </ListItem>
    </List>
  );
}
