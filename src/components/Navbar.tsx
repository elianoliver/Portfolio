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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="32" width="32" viewBox="0 0 640 640"
                                className={`h-14 w-auto shrink-0 `}
                            ><path fill={theme === 'light' ? 'currentColor' : '#fff'} d="M216.1 272.3C212.2 269.4 208.3 268 204.5 268L187.1 268L187.1 372.5L204.5 372.5C208.4 372.5 212.3 371.1 216.1 368.2C219.9 365.3 221.9 360.9 221.9 355.1L221.9 285.4C221.9 279.6 219.9 275.2 216.1 272.3zM500.1 96L139.9 96C115.7 96 96.1 115.6 96 139.8L96 500.2C96.1 524.4 115.7 544 139.9 544L500.1 544C524.3 544 543.9 524.4 544 500.2L544 139.8C543.9 115.6 524.3 96 500.1 96zM250.2 355.2C250.2 374 238.6 402.5 201.8 402.5L155.4 402.5L155.4 237L202.8 237C238.2 237 250.2 265.5 250.2 284.3L250.2 355.2zM350.9 266.5L297.6 266.5L297.6 304.9L330.2 304.9L330.2 334.5L297.6 334.5L297.6 372.9L350.9 372.9L350.9 402.5L288.7 402.5C277.5 402.8 268.3 394 268 382.8L268 257.7C267.7 246.6 276.6 237.3 287.7 237L350.9 237L350.9 266.5zM454.5 381.8C441.3 412.5 417.7 406.4 407.1 381.8L368.6 237L401.2 237L430.9 350.7L460.5 237L493.1 237L454.6 381.8z" /></svg>
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
