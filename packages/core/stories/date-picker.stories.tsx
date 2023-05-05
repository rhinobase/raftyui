import { DatePicker, FieldControl } from "../src";

const config = {
  title: "New/Date Picker",
  component: DatePicker,
};
export default config;

export function Default() {
  return (
    <>
      <div className="w-[300px]">
        <FieldControl name="date">
          <DatePicker onSelect={(value) => console.log(value)} />
          <DatePicker picker="month" onSelect={(value) => console.log(value)} />
          <DatePicker picker="year" onSelect={(value) => console.log(value)} />
        </FieldControl>
      </div>
    </>
  );
}
