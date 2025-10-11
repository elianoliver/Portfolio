import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../hooks/useTheme";
import Icon from "/public/vite.svg"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const navItems = [
        { name: "Início", href: "#home" },
        { name: "Competências", href: "#skills" },
        { name: "Projetos", href: "#projects" },
        { name: "Contato", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <a href="#home" className="flex items-center space-x-3 text-xl font-semibold">
                            <img
                                src={Icon}
                                alt="Elian.Dev"
                                className="h-14 w-auto"
                                loading="eager"
                            />
                            Elian.dev
                        </a>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                className="text-foreground/80 hover:text-foreground transition-colors"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {item.name}
                            </motion.a>
                        ))}

                        {/* Theme Toggle Button */}
                        <motion.button
                            onClick={toggleTheme}
                            className="p-2 rounded-full cursor-pointer bg-secondary hover:bg-accent transition-colors"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Alternar tema"
                        >
                            <AnimatePresence mode="wait">
                                {theme === "light" ? (
                                    <motion.div
                                        key="moon"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Moon size={20} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="sun"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Sun size={20} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>

                    {/* Mobile Menu and Theme Toggle */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-secondary hover:bg-accent transition-colors"
                            aria-label="Alternar tema"
                        >
                            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border"
                    >
                        <div className="px-4 pt-2 pb-4 space-y-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
