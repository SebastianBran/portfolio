export function GridBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        backgroundImage: `
          linear-gradient(var(--grid-color) 1px, transparent 1px),
          linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
        maskImage:
          "radial-gradient(ellipse at center, transparent 20%, black 70%)",
        WebkitMaskImage:
          "radial-gradient(ellipse at center, transparent 20%, black 70%)",
      }}
    />
  );
}
