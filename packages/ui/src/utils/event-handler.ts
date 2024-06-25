import type { BaseSyntheticEvent } from "react";

/**
 * A utility function for handling mouse click and keyboard events, specifically triggered by the Enter key.
 * This function wraps the provided callback and ensures it is only invoked when the criteria are met.
 *
 * @param {function} func - The callback function to be executed when the conditions are met.
 * @returns {function} An event handler function that filters and processes events accordingly.
 */
export function eventHandler(func: (event: BaseSyntheticEvent) => void) {
  return (event: BaseSyntheticEvent) => {
    // On keyboard, work only when enter is pressed
    if ("key" in event && event.key !== "Enter") return;

    // Prevent the default browser behavior for the event
    event.preventDefault();
    // Stop the event from propagating to parent elements
    event.stopPropagation();

    // Call the function
    func(event);
  };
}
