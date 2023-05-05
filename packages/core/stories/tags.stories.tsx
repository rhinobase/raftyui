import { TagField } from "../src/tag-field/TagField";
import { FieldControl } from "../src/field";

const config = {
  title: "Forms/Tag Field",
  component: TagField,
};
export default config;

export function Default() {
  return (
    <>
      <FieldControl name="tag">
        <TagField />
      </FieldControl>
    </>
  );
}
