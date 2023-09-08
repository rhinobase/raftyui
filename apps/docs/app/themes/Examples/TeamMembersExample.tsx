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

const MEMBERS_DATA = [
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
        {MEMBERS_DATA.map((member, index) => (
          <div key={index} className="flex gap-2.5 items-center w-full">
            <Avatar
              name={member.name}
              src={`https://api.dicebear.com/7.x/notionists/svg?seed=${member.name}`}
            />
            <div>
              <Text className="font-semibold leading-snug">{member.name}</Text>
              <Text className="text-sm opacity-50 leading-snug">
                {member.email}
              </Text>
            </div>
            <div className="flex-1" />
            <MemberRoleMenu />
          </div>
        ))}
      </div>
    </div>
  );
}

const MEMBER_ROLES = [
  {
    id: "1",
    title: "Viewer",
    discription: "Can view and comment.",
  },
  {
    id: "2",
    title: "Developer",
    discription: "Can view,comment and edit.",
  },
  {
    id: "3",
    title: "Billing",
    discription: "Can view,comment and manage billing.",
  },
  {
    id: "4",
    title: "Owner",
    discription: "Admin-level access to all resources",
  },
];

function MemberRoleMenu() {
  const [isOpen, setOpen] = useState(false);

  const [selected, dispatch] = useReducer((prev: any, cur: any): any => {
    const value = prev.id == cur ? prev.id : cur;
    setOpen(false);

    if (value)
      return {
        ...MEMBER_ROLES?.find((data) => data.id === value),
      };

    return undefined;
  }, MEMBER_ROLES.at(0));

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
              {MEMBER_ROLES.map((item) => {
                return (
                  <CommandItem
                    key={item.title}
                    value={item.id}
                    onSelect={dispatch}
                    className="!px-3 !py-2 !rounded"
                  >
                    <div>
                      <Text className="leading-snug">{item.title}</Text>
                      <Text className="opacity-50 leading-snug">
                        {item.discription}
                      </Text>
                    </div>
                    <div className="flex-1" />
                    {selected.id == item.id && <HiCheck size={16} />}
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
