type SocialLink = {
  label: string;
  href: string;
  iconSrc: string;
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}

export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=hieuphong144@gmail.com",
    iconSrc: withBasePath("/icons/mail.svg"),
  },
  {
    label: "GitHub",
    href: "https://github.com/lahieuphong",
    iconSrc: withBasePath("/icons/github.svg"),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/la-hieu-phong-04359a362/",
    iconSrc: withBasePath("/icons/linkedin.svg"),
  },
];

export const navLinks = [
  {
    label: "Giới thiệu",
    href: withBasePath("/about"),
  },
  {
    label: "Công bố",
    href: withBasePath("/publication"),
  },
  {
    label: "CV",
    href: withBasePath("/cv"),
  },
];
