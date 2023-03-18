import { Grid } from "@rhinobase/docs/components";
import React from "react";
import { RangePicker } from "./RangePicker";

const config = {
  title: "New/Range Picker",
  component: RangePicker,
};
export default config;

export function Default() {
  return (
    <Grid>
      <RangePicker onSelect={(date) => console.log(date)} />
    </Grid>
  );
}
export function CustomIcon() {
  return (
    <Grid>
      <RangePicker
        onSelect={(date) => console.log(date)}
        leftIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-full w-6 leading-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>
        }
      />
    </Grid>
  );
}
export function WithPlaceholder() {
  return (
    <Grid>
      <RangePicker
        onSelect={(date) => console.log(date)}
        placeholder={["Select date", "End date"]}
        leftIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-full w-6 leading-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>
        }
      />
    </Grid>
  );
}
