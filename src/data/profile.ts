export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile = {
  name: "김기선",
  bio: "땀흘리는 삶을 지향하고\n독서로 사색하는 인생을 지향하는 평범한 직장인",
  image: "/profile.jpg",
};

export const links: LinkItem[] = [
  {
    id: "youtube",
    title: "▶️ 유튜브",
    url: "https://www.youtube.com/@%EC%B1%85%EB%B0%A9%EC%98%A4%EB%B9%A0",
  },
  { id: "github", title: "💻 깃허브", url: "https://github.com/ilb486" },
  { id: "blog", title: "✏️ 네이버 블로그", url: "https://blog.naver.com/ilb486" },
];
