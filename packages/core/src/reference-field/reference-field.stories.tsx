import { Grid } from "@rhinobase/docs/components";
import * as ReferenceField from "./ReferenceField";
import React, { useState } from "react";
import { classNames } from "@rhinobase/utils";

export default {
  title: "Forms/Reference Field",
  component: ReferenceField,
};

const people = [
  {
    id: "1",
    icon: "D",
    name: "Durward Reynolds",
  },
  {
    id: "2",
    icon: "T",
    name: "Therese Wunsch",
  },
  {
    id: "3",
    icon: "K",
    name: "Kenton Towne",
  },
  {
    id: "4",
    icon: "B",
    name: "Benedict Kessler",
  },
  {
    id: "5",
    icon: "K",
    name: "Katelyn Rohan",
  },
];

export function Default() {
  const [open, setOpen] = useState<boolean>();
  const [value, setValue] = useState("");

  // const [query, setQuery] = useState('')

  // const filteredPeople =
  //   query === ""
  //     ? people
  //     : people.filter((person) => {
  //         return person.name.toLowerCase().includes(query.toLowerCase());
  //       });

  return (
    <Grid>
      <div className="w-[600px]">
        <ReferenceField.Root>
          <ReferenceField.Input
            onFocus={() => {
              setOpen(true);
            }}
            value={value}
            onChange={(va) => {
              console.log(va);
            }}
            // onBlur={() => }
          />
          <ReferenceField.Content open={open}>
            {people.map((p) => (
              <ReferenceField.Item
                className={classNames(p.name == value && "bg-zinc-400")}
                value={p.name}
                onClick={(e) => {
                  setValue(e.toString());
                  setOpen(false);
                }}
                key={p.id}
              >
                {p.name}
              </ReferenceField.Item>
            ))}
          </ReferenceField.Content>
        </ReferenceField.Root>
      </div>
    </Grid>
  );
}
