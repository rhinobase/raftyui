import { Children, ReactElement, ReactNode, isValidElement } from "react";

/**
 * Gets only the valid children of a component,
 * and ignores any nullish or falsy child.
 *
 * @param children the children
 */
export function getValidChildren(children: ReactNode) {
  return Children.toArray(children).filter(
    (child) => isValidElement(child),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) as ReactElement<any, any>[];
}
