import { Grid } from "@rhinobase/docs/components";
import { InputGroup, Prefix, Suffix } from "./InputGroup";
import React from "react";
import { InputField } from "./InputField";
import { FieldControl } from "../field";
import { LeftAddon } from "./LeftAddon";
import {
  CheckIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { RightAddon } from "./RightAddon";

const config = {
  title: "Forms/Input Group",
  component: InputGroup,
};
export default config;

export function Default() {
  return (
    <Grid>
      <div className="flex w-full max-w-2xl flex-col gap-4">
        <h4 className="text-center font-bold dark:text-white">
          Input Group With Prefix
        </h4>
        <FieldControl name="input_group">
          <InputGroup>
            <Prefix>
              <PhoneIcon className="dark:text-secondary-200 h-5 w-5 text-black" />
            </Prefix>
            <InputField className="!pl-10" />
          </InputGroup>
        </FieldControl>
        <h4 className="text-center font-bold dark:text-white">
          Input Group With Suffix
        </h4>
        <FieldControl name="input_group">
          <InputGroup>
            <InputField className="!pr-10" />
            <Suffix>
              <MagnifyingGlassIcon className="dark:text-secondary-200 h-5 w-5 text-black" />
            </Suffix>
          </InputGroup>
        </FieldControl>

        <h4 className="text-center font-bold dark:text-white">
          Input Group With Prefix and Suffix And Size
        </h4>
        <FieldControl name="input_group">
          <InputGroup>
            <Prefix>
              <PhoneIcon className="dark:text-secondary-200 h-4 w-4 text-black" />
            </Prefix>
            <InputField className="!px-10" sizes="sm" />
            <Suffix>
              <CheckIcon className="dark:text-secondary-200 h-4 w-4 text-black" />
            </Suffix>
          </InputGroup>
        </FieldControl>
        <FieldControl name="input_group">
          <InputGroup>
            <Prefix>
              <PhoneIcon className="dark:text-secondary-200 h-5 w-5 text-black" />
            </Prefix>
            <InputField className="!px-10" />
            <Suffix>
              <CheckIcon className="dark:text-secondary-200 h-5 w-5 text-black" />
            </Suffix>
          </InputGroup>
        </FieldControl>
        <FieldControl name="input_group">
          <InputGroup>
            <Prefix>
              <PhoneIcon className="dark:text-secondary-200 h-6 w-6 text-black" />
            </Prefix>
            <InputField className="!px-10" sizes="lg" />
            <Suffix>
              <CheckIcon className="dark:text-secondary-200 h-6 w-6 text-black" />
            </Suffix>
          </InputGroup>
        </FieldControl>
        <h4 className="text-center font-bold dark:text-white">
          Input Group With Left Addon
        </h4>
        <FieldControl name="input_group">
          <InputGroup>
            <LeftAddon>+234</LeftAddon>
            <InputField className="relative z-[1] rounded-none rounded-r" />
          </InputGroup>
        </FieldControl>
        <h4 className="text-center font-bold dark:text-white">
          Input Group With Right Addon
        </h4>
        <FieldControl name="input_group">
          <InputGroup>
            <InputField className="relative z-[1] rounded-none rounded-l" />
            <RightAddon>
              <MagnifyingGlassIcon className="dark:text-secondary-200 h-5 w-5 text-black" />
            </RightAddon>
          </InputGroup>
        </FieldControl>
        <h4 className="text-center font-bold dark:text-white">
          Input Group With Left and Right Addon
        </h4>
        <FieldControl name="input_group">
          <InputGroup>
            <LeftAddon>+234</LeftAddon>
            <InputField className="relative z-[1] rounded-none" sizes="sm" />
            <RightAddon>
              <MagnifyingGlassIcon className="dark:text-secondary-200 h-5 w-5 text-black" />
            </RightAddon>
          </InputGroup>
        </FieldControl>
        <FieldControl name="input_group">
          <InputGroup>
            <LeftAddon>+234</LeftAddon>
            <InputField className="relative z-[1] rounded-none" />
            <RightAddon>
              <MagnifyingGlassIcon className="dark:text-secondary-200 h-5 w-5 text-black" />
            </RightAddon>
          </InputGroup>
        </FieldControl>
        <FieldControl name="input_group">
          <InputGroup>
            <LeftAddon>+234</LeftAddon>
            <InputField className="relative z-[1] rounded-none" sizes="lg" />
            <RightAddon>
              <MagnifyingGlassIcon className="dark:text-secondary-200 h-5 w-5 text-black" />
            </RightAddon>
          </InputGroup>
        </FieldControl>
      </div>
    </Grid>
  );
}
