import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
}

export function AnimatedBackground() {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const newParticles: Particle[] = [];
        for (let i = 0; i < 30; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 4 + 2,
                duration: Math.random() * 10 + 20,
                delay: Math.random() * 5,
            });
        }
        setParticles(newParticles);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
            {/* Gradient Orbs */}
            <motion.div
                className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-xl will-change-transform will-change-opacity"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute top-1/3 -left-40 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-xl will-change-transform will-change-opacity"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-20 right-1/4 w-72 h-72 bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-xl will-change-transform will-change-opacity"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.25, 0.45, 0.25],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Floating Particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-primary/20 dark:bg-primary/10 hidden md:block"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Grid Pattern */}
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
