import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: reduced ? scrollYProgress : scaleX }}
      aria-hidden="true"
    />
  );
}
