import { motion } from "motion/react";
import { Github, Linkedin, Mail, Code2, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
        >
            {/* Decorative Elements */}
            <motion.div
                className="absolute top-20 left-10 text-primary/10"
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, 10, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <Code2 size={60} />
            </motion.div>
            <motion.div
                className="absolute bottom-20 right-10 text-primary/10"
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, -10, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <Sparkles size={50} />
            </motion.div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-block mb-6"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse" />
                            <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm">
                                Full Stack Developer
                            </div>
                        </div>
                    </motion.div>

                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Olá! Eu sou Elian Oliveira 👋
                    </motion.h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg sm:text-xl text-foreground/80 mb-6 max-w-2xl mx-auto"
                >
                    <p>
                        Sou um desenvolvedor <span className="text-primary font-semibold">Full Stack</span> de 25 anos, formado em Bacharelado em Sistemas de Informação pelo Instituto Federal Catarinense de Camboriú. Sou apaixonado por tecnologia e sempre busco soluções inovadoras.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-wrap gap-4 justify-center items-center mb-8"
                >
                    <Button asChild size="lg">
                        <a href="#projects">Ver Projetos</a>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <a href="#contact">Entrar em Contato</a>
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="flex gap-4 justify-center"
                >
                    <motion.a
                        href="https://github.com/elianoliver"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative p-3 rounded-full bg-secondary hover:bg-accent transition-colors group"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                        <Github size={24} className="relative z-10" />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/elian-oliveira/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative p-3 rounded-full bg-secondary hover:bg-accent transition-colors group"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                        <Linkedin size={24} className="relative z-10" />
                    </motion.a>
                    <motion.a
                        href="mailto:elian.dev@proton.me"
                        className="relative p-3 rounded-full bg-secondary hover:bg-accent transition-colors group"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                        <Mail size={24} className="relative z-10" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
