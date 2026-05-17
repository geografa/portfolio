import { notFound } from "next/navigation";
import { ExampleFrame } from "@/components/examples/ExampleFrame";
import { getLocalExample, getLocalHtmlSlugs } from "@/lib/examples";

export function generateStaticParams() {
  return getLocalHtmlSlugs().map((slug) => ({ slug }));
}

export default async function ExamplePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ex = getLocalExample(slug);
  if (!ex) notFound();
  return <ExampleFrame example={ex} />;
}
