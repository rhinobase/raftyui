import { Textarea } from "../src/textarea/Textarea";
import { FieldControl } from "../src/field";

const config = {
  title: "Forms/Textarea",
  component: Textarea,
};
export default config;

export function Default() {
  return (
    <>
      <div className="flex w-[640px] flex-col gap-6 dark:text-white">
        <h4>Textarea</h4>
        <FieldControl name="">
          <Textarea placeholder="abc" />
        </FieldControl>

        <h4>Textarea Invalid</h4>
        <FieldControl name="" invalid>
          <Textarea placeholder="abc" />
        </FieldControl>
      </div>
    </>
  );
}
