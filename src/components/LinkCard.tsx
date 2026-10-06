import type { LinkItem } from "@/data/profile";

export default function LinkCard({ title, url }: LinkItem) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
    >
      {title}
    </a>
  );
}
