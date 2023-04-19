import { Grid } from "@rhinobase/docs/components";
import React from "react";
import * as Select from "./Select";

const config = {
  title: "New/Select",
  component: Select,
};
export default config;

export function Default() {
  return (
    <Grid>
      <Select.Root open>
        <Select.Trigger
          aria-label="Food"
          placeholder="Select a fruit"
          className="w-full"
        />
        <Select.Content>
          <Select.Group>
            {["Apple", "Banana", "Blueberry", "Strawberry", "Grapes"].map(
              (label) => (
                <Select.Item
                  disabled={label === "Grapes"}
                  key={label}
                  value={label.toLowerCase()}
                >
                  {label}
                </Select.Item>
              ),
            )}
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Grid>
  );
}

export function WithDivided() {
  return (
    <Grid>
      <Select.Root>
        <Select.Trigger
          aria-label="Food"
          placeholder="Select a fruit"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          }
        />
        <Select.Content>
          <Select.Group>
            {["Apple", "Banana", "Blueberry", "Strawberry", "Grapes"].map(
              (label) => (
                <Select.Item
                  disabled={label === "Grapes"}
                  key={label}
                  value={label.toLowerCase()}
                >
                  {label}
                </Select.Item>
              ),
            )}
          </Select.Group>
          <Select.Separator />
          <Select.Group>
            {["Red", "Green", "Blue", "Orange", "Brown"].map((label) => (
              <Select.Item
                disabled={label === "Blue"}
                key={label}
                value={label.toLowerCase()}
              >
                {label}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Grid>
  );
}
