import { useMemo } from "react";
import { motion } from "motion/react";

const gradientOrbs = [
    {
        className: "absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-xl",
        animate: { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] },
        transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
    },
    {
        className: "absolute top-1/3 -left-40 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-xl",
        animate: { scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] },
        transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
    },
    {
        className: "absolute bottom-20 right-1/4 w-72 h-72 bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-xl",
        animate: { scale: [1, 1.1, 1], opacity: [0.25, 0.45, 0.25] },
        transition: { duration: 12, repeat: Infinity, ease: "easeInOut" },
    },
];

function FloatingParticles() {
    const particles = useMemo(
        () => {
            const count = window.innerWidth < 768 ? 0 : 15;
            return Array.from({ length: count }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 4 + 2,
                duration: Math.random() * 10 + 20,
                delay: Math.random() * 5,
                xAmplitude: Math.random() * 20 - 10,
            }));
        },
        [] // intentionally empty — particles are generated once on mount
    );

    return particles.map((p) => (
        <motion.div
            key={p.id}
            className="absolute rounded-full bg-primary/20 dark:bg-primary/10"
            style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
            }}
            animate={{
                y: [0, -30, 0],
                x: [0, p.xAmplitude, 0],
                opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "easeInOut",
            }}
        />
    ));
}

export function AnimatedBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
            {gradientOrbs.map((orb, index) => (
                <motion.div
                    key={index}
                    className={orb.className}
                    animate={orb.animate}
                    transition={orb.transition}
                />
            ))}

            <FloatingParticles />

            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, rgba(209,213,219,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(209,213,219,0.04) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                }}
            />
        </div>
    );
}
