export function NoiseTexture() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70 mix-blend-soft-light"
      aria-hidden="true"
    >
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          numOctaves={4}
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  );
}
