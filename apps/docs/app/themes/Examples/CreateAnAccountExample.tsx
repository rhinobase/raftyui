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
        <Text className="text-2xl font-semibold leading-snug">
          Create an account
        </Text>
        <Text className="text-sm opacity-60 leading-snug">
          Enter your email below to create your account
        </Text>
      </div>
      <form className="space-y-3">
        <div className="flex gap-4 justify-center flex-col sm:flex-row sm:gap-6">
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
          <Text className="text-xs dark:text-secondary-500 text-secondary-400 text-center px-2 bg-white dark:bg-secondary-950">
            OR CONTINUE WITH
          </Text>
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
    </div>
  );
}
