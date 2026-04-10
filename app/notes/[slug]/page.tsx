import { notFound } from "next/navigation";

import { NoteArticlePage } from "@/components/note-article-page";
import { isNoteSlug, noteSlugs } from "@/lib/notes";

export function generateStaticParams() {
  return noteSlugs.map((slug) => ({ slug }));
}

export default async function NoteDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!isNoteSlug(slug)) {
    notFound();
  }

  return <NoteArticlePage slug={slug} />;
}
