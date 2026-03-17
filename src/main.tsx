import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { routeTree } from "./routeTree.gen";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "@/styles/globals.css";

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <ThemeProvider>
          <Analytics />
          <SpeedInsights />
          <RouterProvider router={router} />
        </ThemeProvider>
      </HelmetProvider>
    </React.StrictMode>,
  );
}
