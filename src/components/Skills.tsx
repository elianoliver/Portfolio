import { motion } from "motion/react";
import { Code, Database, GitBranch, Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function Skills() {
    const skillCategories = [
        {
            title: "Desenvolvimento Web",
            icon: Code,
            skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind", "Bootstrap"],
            color: "text-blue-500",
        },
        {
            title: "Backend",
            icon: Database,
            skills: ["Node.js", "PostgreSQL", "Express.js", "APIs REST"],
            color: "text-green-500",
        },
        {
            title: "Versionamento",
            icon: GitBranch,
            skills: ["Git", "GitHub", "Colaboração em Equipe"],
            color: "text-orange-500",
        },
        {
            title: "Metodologias Ágeis",
            icon: Layers,
            skills: ["Scrum", "Kanban", "Gestão de Projetos"],
            color: "text-purple-500",
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
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section id="skills" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl mb-4">Competências</h2>
                    <p className="text-foreground/70 max-w-2xl mx-auto">
                        Tecnologias e metodologias que utilizo no desenvolvimento de soluções
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {skillCategories.map((category, index) => (
                        <motion.div key={category.title} variants={item}>
                            <Card className="h-full hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border-2 hover:border-primary/20 group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 relative z-10">
                                        <motion.div
                                            className={`${category.color} p-2 rounded-lg bg-secondary/50`}
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <category.icon size={28} />
                                        </motion.div>
                                        {category.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.div
                                                key={skill}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: skillIndex * 0.05 }}
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Badge variant="secondary" className="cursor-pointer hover:bg-primary/10">
                                                    {skill}
                                                </Badge>
                                            </motion.div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
