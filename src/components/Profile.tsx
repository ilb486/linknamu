import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  image: string;
};

export default function Profile({ name, bio, image }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      <Image
        src={image}
        alt={`${name} 프로필 사진`}
        width={150}
        height={150}
        priority
        className="h-[150px] w-[150px] rounded-full object-cover shadow-xl shadow-rose-900/20 ring-4 ring-white/70 dark:shadow-black/50 dark:ring-white/15"
      />
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-3 whitespace-pre-line text-[15px] leading-relaxed opacity-70">
        {bio}
      </p>
    </section>
  );
}
