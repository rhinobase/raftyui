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

export function TeamMembersExample() {
  return (
    <div>
      <Text className="font-semibold text-md">Team Members</Text>
      <Text className="text-secondary-500">
        Invite your team members to collaborate.
      </Text>
      <div className="space-y-4  py-4 w-full">
        <div className="flex gap-4 justify-between items-center ">
          <Avatar
            name="Jackson Lee"
            src="https://api.dicebear.com/7.x/notionists/svg?seed=Willow"
          />
          <div className="">
            <Text className="font-semibold text-sm">Jackson Lee</Text>
            <Text className="text-secondary-500">p@example.com</Text>
          </div>
          <div className="flex-1" />
          <TeamMembers />
        </div>

        <div className="flex gap-4 justify-between items-center">
          <Avatar
            name="Sofia Davis"
            src="https://api.dicebear.com/7.x/adventurer/svg?seed=Abby"
          />
          <div>
            <Text className="font-semibold text-sm">Sofia davis</Text>
            <Text className="text-secondary-500">y@example.com</Text>
          </div>
          <div className="flex-1" />

          <TeamMembers />
        </div>
        <div className="flex gap-4 justify-between items-center">
          <Avatar
            name="Allige Bith"
            src="https://api.dicebear.com/7.x/notionists/svg?seed=Max"
          />
          <div>
            <Text className="font-semibold text-sm">Max </Text>
            <Text className="text-secondary-500">d@example.com</Text>
          </div>
          <div className="flex-1" />
          <TeamMembers />
        </div>
      </div>
    </div>
  );
}

const TEAM_MEMBER = [
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

function TeamMembers() {
  const [isOpen, setOpen] = useState(false);

  const [selected, dispatch] = useReducer((prev: any, cur: any): any => {
    const value = prev.id == cur ? prev.id : cur;
    setOpen(false);

    if (value)
      return {
        ...TEAM_MEMBER?.find((data) => data.id === value),
      };

    return undefined;
  }, TEAM_MEMBER.at(0));

  return (
    <Popover open={isOpen} onOpenChange={setOpen}>
      <div className="relative flex items-center w-[150px]">
        <PopoverTrigger
          variant="outline"
          size="md"
          role="combobox"
          aria-expanded={isOpen}
          className="w-full justify-between capitalize"
          rightIcon={<HiChevronDown />}
        >
          {selected?.title}
        </PopoverTrigger>
      </div>
      <PopoverContent className="!p-0 !w-[330px]">
        <Command>
          <CommandInput placeholder="Search role" />
          <CommandList>
            <CommandGroup>
              {TEAM_MEMBER.map((item) => {
                return (
                  <CommandItem
                    key={item.title}
                    value={item.id}
                    onSelect={dispatch}
                    className="!px-3 !py-2 !rounded"
                  >
                    <div>
                      <Text className="leading-5">{item.title}</Text>
                      <Text className="text-secondary-500 dark:text-secondary-400 leading-5">
                        {item.discription}
                      </Text>
                    </div>
                    <div className="flex-1" />
                    {selected.id == item.id && (
                      <HiCheck
                        size={16}
                        className="text-primary-500  dark:text-primary-500"
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
