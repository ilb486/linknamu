export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile = {
  name: "책방오빠",
  bio: "세상의 좋은 책을 소개시켜주는 남자",
  image: "/profile.svg",
};

export const links: LinkItem[] = [
  { id: "github", title: "Github", url: "https://github.com" },
  { id: "linkedin", title: "Linkedin", url: "https://linkedin.com" },
  { id: "blog", title: "Blog", url: "https://blog.naver.com" },
];
