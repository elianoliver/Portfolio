import { Code, Database, GitBranch, Layers } from 'lucide-react';
import { motion } from 'motion/react';

import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const SKILL_CATEGORIES = [
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
] as const;

const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export function Skills() {
    return (
        <section id="skills" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl mb-4">Competências</h2>
                    <p className="text-foreground/70 max-w-2xl mx-auto mb-4">
                        Tecnologias e metodologias que utilizo no desenvolvimento de soluções
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {SKILL_CATEGORIES.map((category) => (
                        <motion.div key={category.title} variants={itemVariants}>
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
                                        {category.skills.map((skill) => (
                                            <Badge
                                                key={skill}
                                                variant="secondary"
                                            >
                                                {skill}
                                            </Badge>
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
