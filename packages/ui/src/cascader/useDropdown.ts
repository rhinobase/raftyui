"use client";
import { useCallback, useEffect, useState } from "react";

export const useDropdown = (dropdownRef: React.RefObject<HTMLDivElement>) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setVisible(false);
      }
    };

    document.addEventListener("click", onClickOutside);
    return () => {
      document.removeEventListener("click", onClickOutside);
    };
  }, [dropdownRef]);

  const showDropdownMenu = useCallback(() => setVisible(true), []);
  const hideDropdownMenu = useCallback(() => setVisible(false), []);

  return { visible, showDropdownMenu, hideDropdownMenu };
};
