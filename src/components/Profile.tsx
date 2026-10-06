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
        width={160}
        height={160}
        priority
        className="h-40 w-40 rounded-full object-cover ring-4 ring-emerald-100 dark:ring-emerald-900"
      />
      <h1 className="mt-4 text-2xl font-bold">{name}</h1>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{bio}</p>
    </section>
  );
}
