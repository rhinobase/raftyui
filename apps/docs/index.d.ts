declare module "*.svg" {
  // biome-ignore lint/suspicious/noExplicitAny: quick fix
  const content: any;
  // biome-ignore lint/suspicious/noExplicitAny: quick fix
  export const ReactComponent: any;
  export default content;
}
