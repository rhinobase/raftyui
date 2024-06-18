import {
  Button,
  FieldControl,
  InputField,
  Label,
  PasswordField,
  Text,
} from "@rafty/ui";
import { BsGithub, BsGoogle } from "react-icons/bs";

export function CreateAnAccountExample() {
  return (
    <div className="space-y-4">
      <div>
        <Text className="text-[1.5rem] font-semibold leading-[2.5rem] leading-snug">
          Create an account
        </Text>
        <Text className="text-[0.875rem] leading-[1.5rem] leading-snug opacity-60">
          Enter your email below to create your account
        </Text>
      </div>
      <form className="space-y-3">
        <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
          <Button
            variant="outline"
            leftIcon={<BsGithub size={18} />}
            className="w-full"
          >
            Github
          </Button>
          <Button
            variant="outline"
            leftIcon={<BsGoogle size={18} />}
            className="w-full"
          >
            Google
          </Button>
        </div>
        <div className="relative flex w-full items-center justify-center">
          <div className="bg-secondary-300 dark:bg-secondary-700 absolute -z-[1] h-px w-full" />
          <Text className="dark:text-secondary-500 text-secondary-400 dark:bg-secondary-950 bg-white px-2 text-center text-[0.75rem] leading-[1rem]">
            OR CONTINUE WITH
          </Text>
        </div>
        <FieldControl name="email" isRequired>
          <Label>Email</Label>
          <InputField type="email" aria-label="Fill Email" />
        </FieldControl>
        <FieldControl name="password" isRequired>
          <Label>Password</Label>
          <PasswordField
            autoComplete="new-password"
            aria-label="Enter the Strong Passwrod"
          />
        </FieldControl>
        <Button
          variant="solid"
          colorScheme="primary"
          className="w-full"
          type="button"
        >
          Create Account
        </Button>
      </form>
    </div>
  );
}
