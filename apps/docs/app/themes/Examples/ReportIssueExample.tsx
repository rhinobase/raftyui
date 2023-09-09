import { useState } from "react";
import {
  Command,
  Text,
  CommandGroup,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  classNames,
  InputField,
  Label,
  Textarea,
  Button,
  FieldControl,
} from "@rafty/ui";
import { HiCheck, HiChevronUpDown } from "react-icons/hi2";

export function ReportIssueExample() {
  return (
    <div className="space-y-4">
      <div>
        <Text className="font-semibold">Report an issue</Text>
        <Text className="text-gray-500">
          What area are you having problems with?
        </Text>
      </div>
      <div className="grid grid-cols-2">
        <FieldControl name="team">
          <Label>Team</Label>
          <AreaSelect />
        </FieldControl>
        <FieldControl name="security">
          <Label>Security Level</Label>
          <SecurityLevel />
        </FieldControl>
      </div>
      <FieldControl name="subject">
        <Label>Subject</Label>
        <InputField placeholder="I need help with..." />
      </FieldControl>
      <FieldControl name="description">
        <Label>Description</Label>
        <Textarea placeholder="Please include all information relevant to your issue." />
      </FieldControl>

      <div className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button variant="solid" colorScheme="primary">
          Submit
        </Button>
      </div>
    </div>
  );
}

const AREA_DATA = ["team", "billing", "account", "deployments", "support"];

function AreaSelect() {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState(AREA_DATA.at(0));

  return (
    <Popover open={isOpen} onOpenChange={setOpen}>
      <div className="relative flex items-center w-[150px]">
        <PopoverTrigger
          variant="outline"
          role="combobox"
          aria-expanded={isOpen}
          className="w-full justify-between capitalize"
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
          {selected}
        </PopoverTrigger>
      </div>
      <PopoverContent className="!p-0 !w-[150px]">
        <Command shouldFilter={false}>
          <CommandList>
            <CommandGroup>
              {AREA_DATA.map((item, index) => {
                return (
                  <CommandItem
                    key={index}
                    value={item}
                    onSelect={(value) =>
                      setSelected((prev) => (prev == value ? prev : value))
                    }
                  >
                    <div className="flex items-center gap-2 w-full">
                      <Text className="capitalize">{item}</Text>
                      <div className="flex-1" />
                      {selected == item && (
                        <HiCheck className="h-3.5 w-3.5 stroke-1 text-primary-500 dark:text-primary-400" />
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

function SecurityLevel() {
  const SECURITY_DATA = [
    "severity 1",
    "severity 2",
    "severity 3",
    "severity 4",
    "severity 5",
  ];

  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState(SECURITY_DATA.at(0));

  return (
    <Popover open={isOpen} onOpenChange={setOpen}>
      <div className="relative flex items-center w-[150px]">
        <PopoverTrigger
          variant="outline"
          role="combobox"
          aria-expanded={isOpen}
          className="w-full justify-between capitalize"
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
          {selected}
        </PopoverTrigger>
      </div>
      <PopoverContent className="!p-0 !w-[150px]">
        <Command shouldFilter={false}>
          <CommandList>
            <CommandGroup>
              {SECURITY_DATA.map((item, index) => {
                return (
                  <CommandItem
                    key={index}
                    value={item}
                    onSelect={(value) =>
                      setSelected((prev) => (prev == value ? prev : value))
                    }
                  >
                    <div className="flex items-center gap-2 w-full">
                      <Text className="capitalize">{item}</Text>
                      <div className="flex-1" />
                      {selected == item && (
                        <HiCheck className="h-3.5 w-3.5 stroke-1 text-primary-500 dark:text-primary-400" />
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
