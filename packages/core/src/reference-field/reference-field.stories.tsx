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
  const [value, setValue] = useState("");

  const [query, setQuery] = useState("");

  // const filteredPeople =
  //   query === ""
  //     ? people
  //     : people.filter((person) => {
  //         return person.name.toLowerCase().includes(query.toLowerCase());
  //       });

  return (
    <Grid>
      <div className="w-[600px]">
        <ReferenceField.Root value={value} onChange={setValue}>
          <ReferenceField.Input
            onChange={(event) => {}}
            displayValue={(value) => value}
          />
          <ReferenceField.Content>
            {people.map((p) => (
              <ReferenceField.Item
                className={classNames(p.name == value && "bg-zinc-100")}
                value={p.name}
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
