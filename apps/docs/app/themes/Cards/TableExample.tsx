"use client";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  Checkbox,
  InputField,
  InputGroup,
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuItem,
  MenuLabel,
  MenuSeparator,
  MenuTrigger,
  Prefix,
  Table,
  TableBody,
  TableHeader,
  Td,
  Text,
  Th,
  Tr,
  classNames,
} from "@rafty/ui";
import { type Dispatch, useReducer, useState } from "react";

type Header = {
  id: string;
  status: string;
  email: string;
  amount: string;
};

const COLUMNS: (keyof Header)[] = ["status", "email", "amount"];

const TABLE_DATA: Header[] = [
  {
    id: "0",
    status: "Success",
    email: "xyz@yahoo.com",
    amount: "3000",
  },
  {
    id: "1",
    status: "Success",
    email: "pqr@yahoo.com",
    amount: "3200",
  },
  {
    id: "2",
    status: "Success",
    email: "monserrat44@gmail.com",
    amount: "5000",
  },
  {
    id: "3",
    status: "Processing",
    email: "ken99@yahoo.com",
    amount: "3000",
  },
  {
    id: "4",
    status: "Success",
    email: "xyz786@gmail.com",
    amount: "3500",
  },
  {
    id: "5",
    status: "Failed",
    email: "abc44@gmail.com",
    amount: "4000",
  },
];

export function TableExample() {
  const [show, dispatch] = useReducer(
    (prev: (keyof Header)[], cur: keyof Header) => {
      const index = prev.findIndex((val) => val === cur);

      if (index === -1) prev.push(cur);
      else prev.splice(index, 1);

      return [...prev].sort().reverse();
    },
    [...COLUMNS],
  );

  const [search, setSearch] = useState<string>();
  const results = TABLE_DATA.filter(
    (item) =>
      !search || item.email.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="space-y-4">
      <div>
        <Text className="text-2xl font-semibold leading-snug">Payments</Text>
        <Text className="text-sm leading-snug opacity-60">
          Manage your payments.
        </Text>
      </div>
      <div className="flex justify-between">
        <InputGroup>
          <Prefix>
            <MagnifyingGlassIcon
              height={16}
              width={16}
              className="text-secondary-400 stroke-2"
            />
          </Prefix>
          <InputField
            type="search"
            placeholder="Filter emails..."
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
          />
        </InputGroup>
        <ColumnsSelectMenu show={show} toggle={dispatch} />
      </div>
      <TableComponent show={show} data={results} />
    </div>
  );
}

const ColumnsSelectMenu = ({
  show,
  toggle,
}: {
  show: (keyof Header)[];
  toggle: Dispatch<keyof Header>;
}) => (
  <Menu>
    <MenuTrigger
      variant="outline"
      rightIcon={
        <ChevronDownIcon height={16} width={16} className="stroke-2" />
      }
    >
      Columns
    </MenuTrigger>
    <MenuContent className="min-w-[10rem]" align="end">
      {COLUMNS.map((value) => (
        <MenuCheckboxItem
          key={value}
          checked={show.includes(value)}
          onCheckedChange={() => toggle(value)}
          className="capitalize"
        >
          {value}
        </MenuCheckboxItem>
      ))}
    </MenuContent>
  </Menu>
);

function TableComponent({ data, show }: { show: string[]; data: Header[] }) {
  const [checked, setChecked] = useState([true, true, true, true, true, true]);
  const checkLength = checked.filter((item) => item).length;

  return (
    <>
      <Table className="table-fixed" size="sm">
        <TableHeader>
          <Tr>
            <Th style={{ width: 30 }}>
              <Checkbox
                size="sm"
                checked={checkLength === 6}
                onCheckedChange={(check: boolean) =>
                  setChecked([check, check, check, check, check, check])
                }
              />
            </Th>
            {show.map((value, index) => (
              <Th
                key={value}
                className={classNames(
                  index === 2 && "text-center",
                  "w-max capitalize",
                )}
              >
                {value}
              </Th>
            ))}
            <Th style={{ width: 45 }}>
              <span className="sr-only">action</span>
            </Th>
          </Tr>
        </TableHeader>
        <TableBody className="dark:bg-secondary-950">
          {data.map((item, index) => (
            <Tr key={item.id}>
              <Td>
                <Checkbox
                  size="sm"
                  checked={checked[index]}
                  onCheckedChange={(check: boolean) =>
                    setChecked((prev) => {
                      const updatedChecked = [...prev];
                      updatedChecked[index] = check;
                      return updatedChecked;
                    })
                  }
                />
              </Td>
              {show.map((value, index) => (
                <Td
                  key={index + value}
                  className={classNames(
                    index === 2 && "text-center",
                    "truncate",
                  )}
                >
                  {item[value as keyof Header]}
                </Td>
              ))}
              <Td>
                <Menu size="sm">
                  <MenuTrigger variant="ghost" size="icon">
                    <EllipsisHorizontalIcon
                      height={18}
                      width={18}
                      className="stroke-2"
                    />
                  </MenuTrigger>
                  <MenuContent className="z-50 min-w-[9rem]">
                    <MenuLabel className="leading-4">Actions</MenuLabel>
                    <MenuItem>Copy payment ID</MenuItem>
                    <MenuSeparator />
                    <MenuItem>View customer</MenuItem>
                    <MenuItem>View payment details</MenuItem>
                  </MenuContent>
                </Menu>
              </Td>
            </Tr>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between">
        <Text className="dark:text-secondary-500 text-secondary-400 text-sm">
          {checkLength} of {data.length} row(s) selected.
        </Text>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" isDisabled>
            <ChevronLeftIcon height={16} width={16} className="stroke-2" />
          </Button>
          <Button variant="outline" size="icon" isDisabled>
            <ChevronRightIcon height={16} width={16} className="stroke-2" />
          </Button>
        </div>
      </div>
    </>
  );
}
