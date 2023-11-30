import { PropsWithChildren } from "react";
import { Layout } from "../../components/Layout";

export default function DocsLayout({ children }: PropsWithChildren) {
  return <Layout>{children}</Layout>;
}
