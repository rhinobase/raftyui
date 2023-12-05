import { Fields } from "@fibr/react";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

type PageNumberField = { page: number };

// PageNumberField component for updating the form context with the page number
export function PageNumberField({ page }: PageNumberField) {
  // Get the form context and the setValue function from react-hook-form
  const { setValue } = useFormContext();

  // Update the form context with the current page value whenever it changes
  useEffect(() => {
    // Set the value of the "page" field in the form context
    setValue("page", page);
  }, [page, setValue]);

  // Render the Fields
  return <Fields />;
}
