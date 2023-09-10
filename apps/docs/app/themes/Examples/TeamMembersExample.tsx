import {
  Avatar,
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@rafty/ui";
import { useReducer, useState } from "react";
import { HiCheck, HiChevronDown } from "react-icons/hi";

const MEMBERS = [
  {
    name: "Jackson Lee",
    email: "jack@example.com",
  },
  {
    name: "Sofia Davis",
    email: "sofia@example.com",
  },
  {
    name: "Max Escobar",
    email: "max@example.com",
  },
];

export function TeamMembersExample() {
  return (
    <div className="space-y-4">
      <div>
        <Text className="font-semibold text-xl leading-snug">Team Members</Text>
        <Text className="text-sm opacity-60">
          Invite your team members to collaborate.
        </Text>
      </div>
      <div className="space-y-3.5 w-full">
        {MEMBERS.map(({ name, email }) => (
          <div key={email} className="flex gap-2.5 items-center w-full">
            <Avatar
              name={name}
              src={`https://api.dicebear.com/7.x/notionists/svg?seed=${name}`}
            />
            <div>
              <Text className="font-semibold leading-snug">{name}</Text>
              <Text className="text-sm opacity-50 leading-snug">{email}</Text>
            </div>
            <div className="flex-1" />
            <MemberRoleMenu />
          </div>
        ))}
      </div>
    </div>
  );
}

type Role = {
  id: string;
  title: string;
  description: string;
};
const ROLES: Role[] = [
  {
    id: "1",
    title: "Viewer",
    description: "Can view and comment.",
  },
  {
    id: "2",
    title: "Developer",
    description: "Can view,comment and edit.",
  },
  {
    id: "3",
    title: "Billing",
    description: "Can view,comment and manage billing.",
  },
  {
    id: "4",
    title: "Owner",
    description: "Admin-level access to all resources",
  },
];

function MemberRoleMenu() {
  const [isOpen, setOpen] = useState(false);

  const [selected, dispatch] = useReducer((_: Role, cur: string) => {
    setOpen(false);
    const role = ROLES.find((data) => data.id === cur);

    if (!role) throw new Error("ID doesn't exist!");

    return role;
  }, ROLES[0]);

  return (
    <Popover open={isOpen} onOpenChange={setOpen}>
      <PopoverTrigger
        variant="outline"
        size="md"
        role="combobox"
        aria-expanded={isOpen}
        className="justify-between capitalize"
        rightIcon={<HiChevronDown />}
      >
        {selected?.title}
      </PopoverTrigger>
      <PopoverContent className="!p-0 !w-[320px]">
        <Command>
          <CommandInput placeholder="Search role" />
          <CommandList>
            <CommandGroup>
              {ROLES.map(({ id, title, description }) => {
                return (
                  <CommandItem
                    key={title}
                    value={id}
                    onSelect={dispatch}
                    className="!px-3 !py-2 !rounded"
                  >
                    <div>
                      <Text className="leading-snug">{title}</Text>
                      <Text className="opacity-50 leading-snug">
                        {description}
                      </Text>
                    </div>
                    <div className="flex-1" />
                    {selected.id == id && <HiCheck size={16} />}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
