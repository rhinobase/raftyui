import {
  Button,
  FieldControl,
  InputField,
  Label,
  PasswordField,
} from "@rafty/ui";
import { BsGithub, BsGoogle } from "react-icons/bs";

export function CreateAnAccountExample() {
  return (
    <form className="space-y-4">
      <h1 className="text-2xl font-semibold">Create an account</h1>
      <h5 className="text-sm dark:text-secondary-500 text-secondary-400">
        Enter your email below to create your account
      </h5>
      <div className="flex gap-4 justify-center">
        <Button
          variant="outline"
          leftIcon={<BsGithub size={18} />}
          className="!w-full"
        >
          Github
        </Button>
        <Button
          variant="outline"
          leftIcon={<BsGoogle size={18} />}
          className="!w-full"
        >
          Google
        </Button>
      </div>
      <div className="relative w-full flex items-center justify-center">
        <div className="h-px w-full bg-secondary-300 absolute -z-[1] dark:bg-secondary-700" />
        <h5 className="text-xs dark:text-secondary-500 text-secondary-400 text-center px-2 bg-white dark:bg-secondary-950">
          OR CONTINUE WITH
        </h5>
      </div>
      <FieldControl name="email" isRequired>
        <Label>Email</Label>
        <InputField type="email" />
      </FieldControl>
      <FieldControl name="password" isRequired>
        <Label>Password</Label>
        <PasswordField autoComplete="new-password" />
      </FieldControl>
      <Button
        variant="solid"
        colorScheme="primary"
        className="!w-full"
        type="button"
      >
        Create Account
      </Button>
    </form>
  );
}
