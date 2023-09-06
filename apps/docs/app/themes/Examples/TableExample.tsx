import { Dispatch, SetStateAction, useReducer, useState } from "react";
import {
  Checkbox,
  InputField,
  InputGroup,
  Prefix,
  Text,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Td,
  Th,
  Tr,
  Button,
  Menu,
  MenuTrigger,
  MenuContent,
  MenuCheckboxItem,
  MenuLabel,
  MenuItem,
  MenuSeparator,
} from "@rafty/ui";
import { HiChevronDown, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { HiDotsHorizontal } from "react-icons/hi";

type DataType = {
  status: string;
  email: string;
  amount: string;
};
const options: (keyof DataType)[] = ["status", "email", "amount"];
const TABLE_DATA: ({ id: string } & DataType)[] = [
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
    (prev: (keyof DataType)[], cur: keyof DataType) => {
      const index = prev.findIndex((val) => val == cur);

      if (index == -1) prev.push(cur);
      else prev.splice(index, 1);

      return [...prev].sort().reverse();
    },
    [...options],
  );

  const [search, setSearch] = useState("");
  const results = TABLE_DATA.filter((item) =>
    item.email.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold">Payments</h2>
        <h5 className="text-sm text-secondary-400 dark:text-secondary-500">
          Manage your payments.
        </h5>
      </div>
      <div className="flex gap-x-6">
        <InputGroup>
          <Prefix>
            <HiOutlineMagnifyingGlass className="stroke-2 text-secondary-400" />
          </Prefix>
          <InputField
            type="search"
            placeholder="Filter emails..."
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
          />
        </InputGroup>
        <SelectColumns show={show} toggle={dispatch} />
      </div>
      <PaymentTable show={show} data={results} />
      <div className="flex justify-between items-center">
        <Text className="text-sm dark:text-secondary-500 text-secondary-400">
          0 of {results.length} row(s) selected.
        </Text>
        <div className="flex gap-3">
          <Button variant="outline" isDisabled>
            Previous
          </Button>
          <Button variant="outline" isDisabled>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

const SelectColumns = ({
  show,
  toggle,
}: {
  show: (keyof DataType)[];
  toggle: Dispatch<keyof DataType>;
}) => (
  <Menu>
    <MenuTrigger variant="outline" rightIcon={<HiChevronDown />}>
      Column
    </MenuTrigger>
    <MenuContent className="!min-w-[10rem]" align="end">
      {options.map((value) => (
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

function PaymentTable({
  data,
  show,
}: {
  show: string[];
  data: {
    id: string;
    status: string;
    email: string;
    amount: string;
  }[];
}) {
  return (
    <TableContainer className="!overflow-x-auto">
      <Table className="table-fixed w-full" size="sm">
        <TableHead>
          <Tr>
            <Th style={{ width: 30 }}>
              <Checkbox size="sm" />
            </Th>
            {show.map((value) => (
              <Th key={value} className="capitalize w-max">
                {value}
              </Th>
            ))}
            <Th style={{ width: 45 }}>
              <span className="sr-only">action</span>
            </Th>
          </Tr>
        </TableHead>
        <TableBody className="dark:!bg-secondary-950">
          {data.map((item, index) => (
            <Tr key={index}>
              <Td>
                <Checkbox size="sm" />
              </Td>
              {show.map((value, index) => (
                <Td key={index + value} className="truncate">
                  {item[value as keyof DataType]}
                </Td>
              ))}
              <Td>
                <Menu size="sm">
                  <MenuTrigger variant="ghost" size="icon">
                    <HiDotsHorizontal />
                  </MenuTrigger>
                  <MenuContent className="!min-w-[11rem] !z-50" align="end">
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
    </TableContainer>
  );
}
