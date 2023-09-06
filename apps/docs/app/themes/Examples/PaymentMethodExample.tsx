import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  FieldControl,
  InputField,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  classNames,
} from "@rafty/ui";
import { useState } from "react";
import { BsCreditCard, BsPaypal, BsApple } from "react-icons/bs";
import { HiChevronUpDown, HiCheck } from "react-icons/hi2";
import { IconType } from "react-icons/lib";

const PaymentMethod: { logo: IconType; heading: string }[] = [
  {
    logo: BsCreditCard,
    heading: "Card",
  },
  {
    logo: BsPaypal,
    heading: "Paypal",
  },
  {
    logo: BsApple,
    heading: "Apple",
  },
];
const Months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "june",
  "july",
  "aug",
  "sept",
  "oct",
  "nov",
  "dec",
];
const Years = [
  "2023",
  "2024",
  "2025",
  "2026",
  "2027",
  "2028",
  "2029",
  "2030",
  "2031",
  "2032",
];

export function PaymentMethodExample() {
  const [isselect, setIsSelect] = useState<number>(0);

  return (
    <form className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold">Payment Method</h2>
        <Text className="text-sm dark:text-secondary-500 text-secondary-400">
          Add a new payment method to your account.
        </Text>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {PaymentMethod.map((item, index) => {
          const PaymentLogo = item.logo;

          return (
            <div
              key={index}
              onClick={() => setIsSelect(index)}
              className={classNames(
                isselect == index
                  ? "ring-2 ring-primary-300 dark:ring-primary-500/50 border-primary-500 dark:border-primary-400"
                  : "dark:border-secondary-700",
                "w-full p-4 flex justify-center items-center flex-col gap-2 border rounded-md dark:hover:bg-secondary-900/70 hover:bg-secondary-50 transition-all ease-in-out cursor-pointer",
              )}
            >
              <PaymentLogo
                size={30}
                className="text-secondary-600 dark:text-secondary-400"
              />
              <Text className="text-sm">{item.heading}</Text>
            </div>
          );
        })}
      </div>
      <FieldControl name="name">
        <Label>Name</Label>
        <InputField placeholder="First Name" />
      </FieldControl>
      <FieldControl name="city">
        <Label>City</Label>
        <InputField />
      </FieldControl>
      <FieldControl name="card">
        <Label>Card Number</Label>
        <InputField />
      </FieldControl>
      <div className="flex gap-2 w-full items-center">
        <FieldControl name="month">
          <Label>Expires</Label>
          <Expires />
        </FieldControl>
        <FieldControl name="year">
          <Label>Year</Label>
          <Year />
        </FieldControl>
        <FieldControl name="cvc">
          <Label>CVC</Label>
          <InputField placeholder="CVC" className="placeholder:text-sm !py-2" />
        </FieldControl>
      </div>
    </form>
  );
}

function Expires() {
  const [isOpen, setOpen] = useState(false);
  const [selectedMonths, setSelectedMonths] = useState(Months[0]);

  return (
    <Popover open={isOpen} onOpenChange={setOpen} modal>
      <div className="relative flex items-center w-[100px]">
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
          {selectedMonths}
        </PopoverTrigger>
      </div>
      <PopoverContent className="!p-0 !w-[120px]">
        <Command shouldFilter={false}>
          <CommandList className="!max-h-full">
            <CommandGroup>
              {Months.map((month) => {
                return (
                  <CommandItem
                    key={month}
                    value={month}
                    onSelect={(value) =>
                      setSelectedMonths((prev) =>
                        prev == value ? prev : value,
                      )
                    }
                  >
                    <div className="flex items-center gap-2 w-full">
                      <div className="w-3.5">
                        {selectedMonths == month && (
                          <HiCheck className="h-3.5 w-3.5 stroke-1 text-primary-500 dark:text-primary-300" />
                        )}
                      </div>
                      <Text className="capitalize">{month}</Text>
                      <div className="flex-1" />
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

function Year() {
  const [isOpenYears, setOpenYears] = useState(false);
  const [selectedYears, setSelectedYears] = useState(Years[0]);

  return (
    <Popover open={isOpenYears} onOpenChange={setOpenYears}>
      <div className="relative flex items-center w-[100px]">
        <PopoverTrigger
          variant="outline"
          role="combobox"
          aria-expanded={isOpenYears}
          className="w-full justify-between capitalize"
          rightIcon={
            <HiChevronUpDown
              className={classNames(
                isOpenYears
                  ? "text-primary-500"
                  : "text-secondary-500 dark:text-secondary-400",
                "h-4 w-4 shrink-0 stroke-1",
              )}
            />
          }
        >
          {selectedYears}
        </PopoverTrigger>
      </div>
      <PopoverContent className="!p-0 !w-[120px]">
        <Command shouldFilter={false}>
          <CommandList className="!max-h-full">
            <CommandGroup>
              {Years.map((year) => {
                return (
                  <CommandItem
                    key={year}
                    value={year}
                    onSelect={(value) =>
                      setSelectedYears((prev) => (prev == value ? prev : value))
                    }
                  >
                    <div className="flex items-center gap-2 w-full ">
                      <div className="w-3.5">
                        {selectedYears == year && (
                          <HiCheck className="h-3.5 w-3.5 stroke-1 text-primary-500 dark:text-primary-400" />
                        )}
                      </div>
                      <Text>{year}</Text>
                      <div className="flex-1" />
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
