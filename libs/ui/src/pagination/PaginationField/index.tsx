import f from "@fibr/core";
import raftyFibrPlugin from "@fibr/rafty";
import { FibrForm, FibrProvider } from "@fibr/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, Resolver } from "react-hook-form";
import toast from "react-hot-toast";
import z from "zod";
import { PageNumberField } from "./PageNumberField";
import { Toast } from "../../toast";

// Define a zod schema for validation
const paginationSchema = z.object({
  page: z.number().min(0),
});

// Define the structure of the PaginationField component props
type PaginationField = {
  page?: number;
  onPageChange: (page: number) => void;
};

// PaginationField component for handling page navigation
export function PaginationField({ onPageChange, page = 1 }: PaginationField) {
  return (
    // Container for the pagination field with flex layout and styling
    <span className="flex items-center gap-2 font-semibold">
      {/* Label for the pagination field */}
      Page :{/* FibrProvider for managing form state with Rafty plugin */}
      <FibrProvider plugins={[raftyFibrPlugin]}>
        {/* FibrForm for creating a form with zod schema validation */}
        <FibrForm
          className="!w-16"
          blueprint={f.form<
            z.infer<typeof paginationSchema>,
            Resolver<FieldValues>
          >({
            validation: zodResolver(paginationSchema),
            default_values: { page },
            fields: {
              page: f.number({}),
            },
          })}
          // Handle form submission
          onSubmit={({ page }) => onPageChange(page)}
          // Handle form validation errors
          onError={(errors) => {
            console.error(errors);

            // Display a custom toast notification for validation errors
            toast.custom((t) => (
              <Toast
                visible={t.visible}
                severity="error"
                title="Credentials are invalid"
              />
            ));
          }}
        >
          {/* Custom component for rendering the page number field */}
          <PageNumberField page={page} />
        </FibrForm>
      </FibrProvider>
    </span>
  );
}
