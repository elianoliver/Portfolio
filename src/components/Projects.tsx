import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';

import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import ifcImage from '/public/ifc2.png';
import cezarImage from '/public/cezarImage.png';
import megImage from '/public/meg.png';

const PROJECTS = [
    {
        title: 'App Desktop para Gestão de Multas',
        description:
            'Sistema em PyQt6 para gestão de multas da biblioteca do IFC como TCC. Unifica relatórios Excel, exibe estatísticas e automatiza o envio de notificações.',
        image: ifcImage,
        technologies: ['Python', 'PyQT6'],
        github: 'https://github.com/elianoliver/Sistema-de-Cobranca-da-Biblioteca-IFC',
        demo: 'https://github.com/elianoliver/Sistema-de-Cobranca-da-Biblioteca-IFC',
    },
    {
        title: 'Cezar Funilaria e Pintura',
        description:
            'Landing page moderna e otimizada para conversão, desenvolvida com Angular e estilizada com Tailwind CSS.',
        image: cezarImage,
        technologies: ['Angular', 'TypeScript', 'Tailwind'],
        github: 'https://github.com/elianoliver/Cezar_Funilaria_e_Pintura',
        demo: 'https://plum-flamingo-170638.hostingersite.com/',
    },
    {
        title: 'Landing Page Comercial',
        description:
            'Um site profissional moderno para a divulgação de serviços elétricos da empresa Meg Soluções Elétricas.',
        image: megImage,
        technologies: ['React', 'TypeScript', 'Vite', 'Tailwind', 'EmailJS'],
        github: 'https://github.com/elianoliver/Meg-Solucoes-Eletricas',
        demo: 'https://megsolucoeseletricas.com.br/',
    },

] as const;

const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

export function Projects() {
    return (
        <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl mb-4">Projetos</h2>
                    <p className="text-foreground/70 max-w-2xl mx-auto mb-4">
                        Alguns dos meus últimos projetos que desenvolvi utilizando diferentes tecnologias
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {PROJECTS.map((project) => (
                        <motion.div
                            key={project.title}
                            variants={itemVariants}
                            className="flex flex-col"
                        >
                            <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-2 hover:border-primary/30 group">
                                <div className="overflow-hidden relative">
                                    <ImageWithFallback
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                        loading="lazy"
                                        decoding="async"
                                        width={400}
                                        height={192}
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
                                        {project.technologies.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="outline"
                                                className="hover:bg-primary/10 transition-colors"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="gap-2">
                                    <div className="flex-1">
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
                                    </div>
                                    <div className="flex-1">
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
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
