import type { LinkItem } from "@/data/profile";

export default function LinkCard({ title, url }: LinkItem) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-white/60 bg-white/40 px-5 py-4 text-center font-medium shadow-lg shadow-rose-900/5 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/60 dark:border-white/10 dark:bg-white/5 dark:shadow-black/20 dark:hover:bg-white/10"
    >
      {title}
    </a>
  );
}
