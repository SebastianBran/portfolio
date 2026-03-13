import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export function ContactSection() {
  return (
    <SectionWrapper
      id="contact"
      title="Get in Touch"
      subtitle="Have a project in mind? Let's talk."
    >
      <div className="mx-auto max-w-lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const name = (form.elements.namedItem("name") as HTMLInputElement)
              .value;
            const email = (form.elements.namedItem("email") as HTMLInputElement)
              .value;
            const message = (
              form.elements.namedItem("message") as HTMLTextAreaElement
            ).value;
            window.location.href = `mailto:hello@estefanobran.dev?subject=Contact from ${name}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
          }}
          className="space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm text-[var(--muted-foreground)]"
              >
                Name
              </label>
              <Input id="name" name="name" placeholder="Your name" required />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm text-[var(--muted-foreground)]"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-sm text-[var(--muted-foreground)]"
            >
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              rows={5}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            <Send className="size-4" />
            Send Message
          </Button>
        </form>
      </div>
    </SectionWrapper>
  );
}
