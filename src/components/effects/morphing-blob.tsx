import { motion } from "framer-motion";

const blobs = [
  {
    className:
      "left-[10%] top-[20%] h-96 w-96 bg-gradient-to-r from-accent-500/15 to-amber-500/10",
    animate: {
      x: [0, 80, -40, 0],
      y: [0, -60, 40, 0],
      scale: [1, 1.15, 0.9, 1],
      borderRadius: [
        "30% 70% 70% 30% / 30% 30% 70% 70%",
        "70% 30% 30% 70% / 70% 70% 30% 30%",
        "50% 50% 70% 30% / 30% 70% 50% 50%",
        "30% 70% 70% 30% / 30% 30% 70% 70%",
      ],
    },
    duration: 25,
  },
  {
    className:
      "right-[5%] top-[60%] h-72 w-72 bg-gradient-to-br from-orange-500/10 to-yellow-500/10",
    animate: {
      x: [0, -60, 30, 0],
      y: [0, 50, -70, 0],
      scale: [1, 0.85, 1.1, 1],
      borderRadius: [
        "70% 30% 30% 70% / 70% 70% 30% 30%",
        "30% 70% 70% 30% / 30% 30% 70% 70%",
        "50% 50% 30% 70% / 70% 30% 50% 50%",
        "70% 30% 30% 70% / 70% 70% 30% 30%",
      ],
    },
    duration: 30,
  },
  {
    className:
      "left-[40%] top-[80%] h-64 w-64 bg-gradient-to-tl from-accent-600/10 to-amber-400/10",
    animate: {
      x: [0, 50, -60, 0],
      y: [0, -80, 30, 0],
      scale: [1, 1.2, 0.95, 1],
      borderRadius: [
        "50% 50% 70% 30% / 30% 70% 50% 50%",
        "30% 70% 70% 30% / 30% 30% 70% 70%",
        "70% 30% 30% 70% / 70% 70% 30% 30%",
        "50% 50% 70% 30% / 30% 70% 50% 50%",
      ],
    },
    duration: 20,
  },
];

export function MorphingBlob() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute blur-3xl ${blob.className}`}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
