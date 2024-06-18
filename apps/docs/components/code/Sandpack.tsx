export type Sandpack = {
  devbox: string;
};

export function Sandpack({ devbox }: Sandpack) {
  return (
    <iframe
      src={`https://codesandbox.io/p/devbox/${devbox}`}
      className="h-[500px] w-full overflow-hidden rounded border-0"
      title="Rafty UI Intergrations in Code Sandbox"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  );
}
