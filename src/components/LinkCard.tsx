import type { LinkItem } from "@/data/profile";

type LinkCardProps = LinkItem & {
  count: number;
  onClick: () => void;
};

export default function LinkCard({ title, url, count, onClick }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative block w-full rounded-2xl border border-white/60 bg-white/40 px-12 py-4 text-center font-medium shadow-lg shadow-rose-900/5 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/60 dark:border-white/10 dark:bg-white/5 dark:shadow-black/20 dark:hover:bg-white/10"
    >
      {title}
      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-normal opacity-50">
        {count}회
      </span>
    </a>
  );
}
