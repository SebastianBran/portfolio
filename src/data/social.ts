import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";

export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/SebastianBran",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/estefano-sebastian-bran-zapata-b577961b8/?locale=en_US",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:sebastianbranzapata@gmail.com",
    icon: Mail,
  },
];
