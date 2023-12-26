"use client";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
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
        <Text className="text-xl font-semibold leading-snug">Team Members</Text>
        <Text className="text-sm opacity-60">
          Invite your team members to collaborate.
        </Text>
      </div>
      {MEMBERS.map(({ name, email }) => (
        <div key={email} className="flex items-center gap-2.5">
          <Avatar
            className="hidden md:block"
            name={name}
            src={`https://api.dicebear.com/7.x/notionists/svg?seed=${name}&backgroundColor=ffdfbf,ffd5dc,c0aede,d1d4f9,b6e3f4`}
          />
          <div>
            <Text className="font-semibold leading-snug">{name}</Text>
            <Text className="text-sm leading-snug opacity-80">{email}</Text>
          </div>
          <div className="flex-1" />
          <MemberRoleMenu label={name} />
        </div>
      ))}
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
    title: "viewer",
    description: "Can view and comment.",
  },
  {
    id: "2",
    title: "developer",
    description: "Can view,comment and edit.",
  },
  {
    id: "3",
    title: "billing",
    description: "Can view,comment and manage billing.",
  },
  {
    id: "4",
    title: "owner",
    description: "Admin-level access to all resources",
  },
];

function MemberRoleMenu({ label }: { label: string }) {
  const [isOpen, setOpen] = useState(false);

  const [selected, dispatch] = useReducer(
    (_: Role, cur: string) => {
      setOpen(false);
      const role = ROLES.find((data) => data.title === cur);

      if (!role) throw new Error("ID doesn't exist!");

      return role;
    },
    ROLES[0],
  );

  return (
    <Popover open={isOpen} onOpenChange={setOpen}>
      <PopoverTrigger
        variant="outline"
        size="md"
        role="combobox"
        aria-expanded={isOpen}
        className="justify-between capitalize"
        rightIcon={<ChevronDownIcon height={15} width={15} />}
        aria-label={label}
      >
        {selected?.title}
      </PopoverTrigger>
      <PopoverContent className="!p-0 sm:!w-[320px]">
        <Command>
          <CommandInput placeholder="Search role" />
          <CommandList>
            <CommandGroup>
              {ROLES.map(({ id, title, description }) => {
                return (
                  <CommandItem
                    key={id}
                    value={title}
                    onSelect={dispatch}
                    className="rounded px-3 py-2"
                  >
                    <div>
                      <Text className="capitalize leading-snug">{title}</Text>
                      <Text className="leading-snug opacity-50">
                        {description}
                      </Text>
                    </div>
                    <div className="flex-1" />
                    {selected.id === id && (
                      <CheckIcon
                        height={16}
                        width={16}
                        className="opacity-60"
                      />
                    )}
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
