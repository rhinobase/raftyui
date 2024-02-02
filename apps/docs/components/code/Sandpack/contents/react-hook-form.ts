export const dependencies = {
  "react-hook-form": "^7.47.0",
  "@hookform/resolvers": "^3.3.1",
  zod: "3.22.4",
};

const AppFile = `import { useForm } from "react-hook-form";
import {
  FieldControl,
  Label,
  InputField,
  ErrorMessage,
  Button,
} from "@rafty/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const schema = z.object({
  name: z.string().min(4).max(50),
});

export default function App() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit((values) => console.log(values))}
      className="space-y-4 p-4"
    >
      <FieldControl name="name" isRequired>
        <Label>Name</Label>
        <InputField placeholder="Enter your Name" {...register("name")} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
      </FieldControl>
      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={() => reset()}>
          Reset
        </Button>
        <Button type="submit" colorScheme="primary" isLoading={isSubmitting}>
          Submit
        </Button>
      </div>
    </form>
  );
}
`;

export const files = {
  "App.js": AppFile,
};
