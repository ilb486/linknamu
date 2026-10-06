import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-10 sm:px-8">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      <div className="mt-6">
        <Profile {...profile} />
      </div>
      <ul className="mt-12 flex flex-col gap-4">
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard {...link} />
          </li>
        ))}
      </ul>
    </main>
  );
}
