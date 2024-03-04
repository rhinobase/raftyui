"use client";
import RaftyIcon from "@rafty/icons";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
  classNames,
} from "@rafty/ui";
import { useTheme } from "next-themes";

const THEMES = {
  light: "sun",
  dark: "moon",
  system: "tv",
} as const;

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  // Current theme icon
  const triggerIcon = THEMES[theme as keyof typeof THEMES];

  return (
    <Menu>
      <MenuTrigger
        size="icon"
        variant="ghost"
        aria-label="Change Theme"
        title="Change Theme"
        className="hidden md:block"
      >
        {triggerIcon && (
          <RaftyIcon
            type={triggerIcon}
            height={18}
            width={18}
            className="stroke-2"
          />
        )}
      </MenuTrigger>
      <MenuContent className="z-[60] gap-0.5">
        {Object.entries(THEMES).map(([name, icon]) => (
          <MenuItem
            key={name}
            onClick={() => setTheme(name)}
            className={classNames(
              theme === name &&
                "bg-secondary-200/70 text-primary-500 dark:bg-secondary-700/60 dark:text-primary-400",
              "capitalize",
            )}
          >
            <RaftyIcon
              type={icon}
              height={18}
              width={18}
              className="stroke-2"
            />
            {name}
          </MenuItem>
        ))}
      </MenuContent>
    </Menu>
  );
}
