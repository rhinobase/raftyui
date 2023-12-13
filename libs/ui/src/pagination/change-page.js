/**
 * Changes the page based on given parameters.
 * @param {Object} params - The parameters object.
 * @param {number} [params.value] - The value representing the page number.
 * @param {number} params.pages - The total number of pages.
 * @param {number} params.pageLimit - The number of items per page.
 * @param {Function} [params.onChange] - The function to be called on page change.
 */
export function changePage(params) {
  const { value, pages, pageLimit, onChange } = params;

  if (onChange && value !== undefined && !isNaN(value)) {
    if (value > pages) {
      onChange(pages, pageLimit);
    } else if (value < 1) {
      onChange(1, pageLimit);
    } else {
      onChange(value, pageLimit);
    }
  }
}
