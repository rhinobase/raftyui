import {
  Children,
  type ReactElement,
  type ReactNode,
  isValidElement,
} from "react";

/**
 * Gets only the valid children of a component,
 * and ignores any nullish or falsy child.
 *
 * @param children the children
 */
export function getValidChildren(children: ReactNode) {
  return Children.toArray(children).filter(
    (child) => isValidElement(child),
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  ) as ReactElement<any, any>[];
}
