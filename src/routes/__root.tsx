import {
  createRootRoute,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GridBackground } from "@/components/effects/grid-background";
import { MorphingBlob } from "@/components/effects/morphing-blob";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="relative min-h-screen">
      <GridBackground />
      <MorphingBlob />
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
