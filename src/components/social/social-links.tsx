import { socialLinks } from "@/data/social";
import { Button } from "@/components/ui/button";

export function SocialLinks() {
  return (
    <div className="flex items-center gap-1">
      {socialLinks.map((link) => (
        <Button key={link.name} variant="ghost" size="icon" asChild>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
          >
            <link.icon className="size-4" />
          </a>
        </Button>
      ))}
    </div>
  );
}
