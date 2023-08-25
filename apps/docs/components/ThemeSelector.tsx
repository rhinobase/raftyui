import { useTheme } from "next-themes";
import {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuItem,
  classNames,
} from "@rafty/ui";
import { BsMoon, BsSun, BsTv } from "react-icons/bs";

const themes = [
  { name: "Light", value: "light", icon: BsSun },
  { name: "Dark", value: "dark", icon: BsMoon },
  { name: "System", value: "system", icon: BsTv },
];

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="hidden md:block">
      <Menu>
        <MenuTrigger size="icon" variant="ghost" aria-label="Theme">
          <BsSun className="stroke-[0.5] dark:hidden" size={18} />
          <BsMoon className="hidden stroke-[0.5] dark:block" size={18} />
        </MenuTrigger>
        <MenuContent className="!z-50">
          {themes.map((item) => (
            <MenuItem
              key={item.value}
              onClick={() => setTheme(item.value)}
              className={classNames(
                theme == item.value &&
                  "!bg-secondary-200/70 !text-primary-500 dark:!bg-secondary-700/60 dark:!text-primary-400",
              )}
            >
              <item.icon size={18} className="stroke-[0.5]" />
              {item.name}
            </MenuItem>
          ))}
        </MenuContent>
      </Menu>
    </div>
  );
}
