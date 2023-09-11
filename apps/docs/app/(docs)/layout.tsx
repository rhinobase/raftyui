import { Layout } from "../../components/Layout";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
