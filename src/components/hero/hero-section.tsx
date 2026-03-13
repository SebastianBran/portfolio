import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { ParticleCanvas } from "./particle-canvas";
import { GradientText } from "@/components/effects/gradient-text";
import { SocialLinks } from "@/components/social/social-links";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import {
  staggerContainer,
  fadeInUp,
  defaultTransition,
} from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-3.5rem)] items-center justify-center overflow-hidden">
      <ParticleCanvas />
      <motion.div
        className="relative z-10 flex flex-col items-center gap-6 text-center"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={fadeInUp} transition={defaultTransition}>
          <GradientText
            as="h1"
            className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
          >
            {SITE_CONFIG.name}
          </GradientText>
        </motion.div>

        <motion.p
          className="text-lg text-[var(--muted-foreground)] sm:text-xl"
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.1 }}
        >
          {SITE_CONFIG.title}
        </motion.p>

        <motion.p
          className="max-w-md text-sm text-[var(--muted-foreground)]"
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.2 }}
        >
          {SITE_CONFIG.tagline}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.3 }}
        >
          <SocialLinks />
        </motion.div>

        <motion.div
          className="flex gap-3"
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.4 }}
        >
          <Button asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>

        <motion.div
          className="mt-8"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-5 text-[var(--muted-foreground)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
