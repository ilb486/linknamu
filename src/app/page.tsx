import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 py-8">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      <div className="mt-4">
        <Profile {...profile} />
      </div>
      <ul className="mt-8 flex flex-col gap-5">
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard {...link} />
          </li>
        ))}
      </ul>
    </main>
  );
}
