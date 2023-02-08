import { Grid } from "@rhinobase/docs/components";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectButton,
  SelectDivider,
} from "./Select";

export default {
  title: "New/Select",
  component: Select,
};

export function Default() {
  return (
    <Grid>
      <Select>
        <SelectButton
          aria-label="Food"
          placeholder="Select a fruit"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          }
        />
        <SelectContent>
          <SelectGroup>
            {["Apple", "Banana", "Blueberry", "Strawberry", "Grapes"].map(
              (label) => (
                <SelectItem
                  disabled={label === "Grapes"}
                  key={label}
                  value={label.toLowerCase()}
                >
                  {label}
                </SelectItem>
              )
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Grid>
  );
}

export function WithDivided() {
  return (
    <Grid>
      <Select>
        <SelectButton
          aria-label="Food"
          placeholder="Select a fruit"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          }
        />
        <SelectContent>
          <SelectGroup>
            {["Apple", "Banana", "Blueberry", "Strawberry", "Grapes"].map(
              (label) => (
                <SelectItem
                  disabled={label === "Grapes"}
                  key={label}
                  value={label.toLowerCase()}
                >
                  {label}
                </SelectItem>
              )
            )}
          </SelectGroup>
          <SelectDivider />
          <SelectGroup>
            {["Red", "Green", "Blue", "Orange", "Brown"].map((label) => (
              <SelectItem
                disabled={label === "Blue"}
                key={label}
                value={label.toLowerCase()}
              >
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Grid>
  );
}
