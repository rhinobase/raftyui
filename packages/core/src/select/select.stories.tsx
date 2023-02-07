import { HiChevronDown } from "react-icons/hi2";
import { Grid } from "@rhinobase/storybook/components";
import { Select, SelectContent, SelectGroup, SelectItem, SelectButton, SelectDivider } from "@rhinobase/ui";

export default {
  title: "New/Select",
  component: Select,
};

export function Default() {
  return (
    <Grid>
      <Select>
        <SelectButton aria-label="Food" placeholder="Select a fruit" icon={<HiChevronDown />} />
        <SelectContent>
          <SelectGroup>
            {["Apple", "Banana", "Blueberry", "Strawberry", "Grapes"].map((label) => (
              <SelectItem disabled={label === "Grapes"} key={label} value={label.toLowerCase()}>
                {label}
              </SelectItem>
            ))}
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
        <SelectButton aria-label="Food" placeholder="Select a fruit" icon={<HiChevronDown />} />
        <SelectContent>
          <SelectGroup>
            {["Apple", "Banana", "Blueberry", "Strawberry", "Grapes"].map((label) => (
              <SelectItem disabled={label === "Grapes"} key={label} value={label.toLowerCase()}>
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectDivider />
          <SelectGroup>
            {["Red", "Green", "Blue", "Orange", "Brown"].map((label) => (
              <SelectItem disabled={label === "Blue"} key={label} value={label.toLowerCase()}>
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Grid>
  );
}
