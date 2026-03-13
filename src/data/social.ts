import { Github, Linkedin, Twitter, Mail, type LucideIcon } from "lucide-react";

export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/estefanobran",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/estefanobran",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/estefanobran",
    icon: Twitter,
  },
  {
    name: "Email",
    href: "mailto:hello@estefanobran.dev",
    icon: Mail,
  },
];
