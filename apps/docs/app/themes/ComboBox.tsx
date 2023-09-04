import {
  Avatar,
  Command,
  Text,
  CommandGroup,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
  classNames,
} from "@rafty/ui";
import { useReducer, useState } from "react";
import { HiCheck, HiChevronUpDown, HiXMark } from "react-icons/hi2";

export default function ComboBoxExample() {
  const [isOpen, setOpen] = useState(false);
  const pages = [
    {
      id: "1",
      name: "Jhon",
      link: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "2",
      name: "Jack",
      link: "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnRvb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "3",
      name: "Bruce",
      link: "https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNhcnRvb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "4",
      name: "Alley",
      link: "https://images.unsplash.com/photo-1635586409095-b5d87cebe12b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNhcnRvb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  const [selected, dispatch] = useReducer((prev: any, cur: any): any => {
    // Checking if we have a value or not
    const value = prev?.id == cur ? undefined : cur;
    setOpen(false);

    if (value)
      return {
        ...pages?.find((data) => data.id === value),
      };

    return undefined;
  }, undefined);

  return (
    <Popover open={isOpen} onOpenChange={setOpen}>
      <div className="relative flex items-center w-[240px]">
        <PopoverTrigger
          variant="outline"
          role="combobox"
          aria-expanded={isOpen}
          className="w-full justify-between h-[50px]"
          rightIcon={
            <HiChevronUpDown
              className={classNames(
                isOpen
                  ? "text-primary-500"
                  : "text-secondary-500 dark:text-secondary-400",
                "h-4 w-4 shrink-0 stroke-1",
              )}
            />
          }
        >
          {selected ? (
            <div className="flex items-center gap-2 w-full">
              <Avatar name={selected.name} src={selected.link} />
              <Text>{selected.name}</Text>
            </div>
          ) : (
            "Select Item"
          )}
        </PopoverTrigger>
        {selected && (
          <Button
            size="icon"
            colorScheme="error"
            variant="ghost"
            className="absolute right-10 z-20 !p-1"
            onClick={() => dispatch("")}
          >
            <HiXMark className="h-3.5 w-3.5 stroke-1" />
          </Button>
        )}
      </div>
      <PopoverContent className="!p-0 !w-[240px]">
        <Command shouldFilter={false}>
          <CommandList>
            <CommandGroup>
              {pages.map((item) => {
                return (
                  <CommandItem
                    key={item.id}
                    value={item.id}
                    onSelect={dispatch}
                  >
                    <div className="flex items-center gap-2 w-full">
                      <Avatar name={item.name} src={item.link} />
                      <Text>{item.name}</Text>
                      <div className="flex-1" />
                      {selected?.id == item.id && (
                        <HiCheck className="h-3.5 w-3.5 stroke-1" />
                      )}
                    </div>
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
