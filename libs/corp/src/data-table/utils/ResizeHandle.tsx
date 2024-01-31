// Define the props for the ResizeHandle component
type ResizeHandle = {
  onResize: (event: unknown) => void; // Event handler for resizing
};

// ResizeHandle component for rendering a handle used for column resizing
export function ResizeHandle({ onResize }: ResizeHandle) {
  return (
    <div
      // Trigger the onResize callback when the user initiates a mouse click on the handle
      onMouseDown={onResize}
      // Trigger the onResize callback when the user initiates a touch start on the handle
      onTouchStart={onResize}
      className="absolute -right-0.5 top-0 h-full w-2 cursor-ew-resize touch-auto select-none transition-all ease-in-out"
    />
  );
}
