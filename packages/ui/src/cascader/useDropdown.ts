"use client";
import { useEffect } from "react";
import { useBoolean } from "../hooks";

export const useDropdown = (dropdownRef: React.RefObject<HTMLElement>) => {
  const [isDropdownVisible, toggleDropdownVisible] = useBoolean();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      )
        toggleDropdownVisible(false);
    };

    document.addEventListener("click", onClickOutside);
    return () => {
      document.removeEventListener("click", onClickOutside);
    };
  }, [dropdownRef]);

  return { isDropdownVisible, toggleDropdownVisible };
};
