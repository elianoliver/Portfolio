import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function Projects() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "Plataforma completa de e-commerce com carrinho de compras, sistema de pagamento e painel administrativo.",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop",
            technologies: ["React", "Node.js", "PostgreSQL", "Tailwind"],
            github: "https://github.com",
            demo: "https://example.com",
        },
        {
            title: "Task Management App",
            description: "Aplicação de gerenciamento de tarefas com metodologia Kanban, permitindo organização de projetos e colaboração em equipe.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
            technologies: ["Next.js", "Express.js", "PostgreSQL"],
            github: "https://github.com",
            demo: "https://example.com",
        },
        {
            title: "Weather Dashboard",
            description: "Dashboard interativo que exibe previsões meteorológicas com gráficos e estatísticas detalhadas.",
            image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=400&fit=crop",
            technologies: ["React", "API Integration", "Bootstrap"],
            github: "https://github.com",
            demo: "https://example.com",
        },
        {
            title: "Portfolio CMS",
            description: "Sistema de gerenciamento de conteúdo para portfólios, com editor WYSIWYG e customização de temas.",
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop",
            technologies: ["Next.js", "Node.js", "Tailwind", "PostgreSQL"],
            github: "https://github.com",
            demo: "https://example.com",
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl mb-4">Projetos</h2>
                    <p className="text-foreground/70 max-w-2xl mx-auto">
                        Alguns dos projetos que desenvolvi utilizando diferentes tecnologias
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {projects.map((project, index) => (
                        <motion.div key={project.title} variants={item}>
                            <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-2 hover:border-primary/30 group">
                                <div className="overflow-hidden relative">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.4 }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <CardHeader>
                                    <CardTitle className="group-hover:text-primary transition-colors">
                                        {project.title}
                                    </CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <motion.div
                                                key={tech}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: techIndex * 0.05 }}
                                            >
                                                <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                                                    {tech}
                                                </Badge>
                                            </motion.div>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="gap-2">
                                    <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Button asChild variant="outline" size="sm" className="w-full">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2"
                                            >
                                                <Github size={16} />
                                                Código
                                            </a>
                                        </Button>
                                    </motion.div>
                                    <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Button asChild size="sm" className="w-full">
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2"
                                            >
                                                <ExternalLink size={16} />
                                                Demo
                                            </a>
                                        </Button>
                                    </motion.div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
