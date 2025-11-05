import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Contact() {
    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            value: "elian.dev@proton.me",
            href: "mailto:elian.dev@proton.me",
        },
        {
            icon: Phone,
            title: "Telefone",
            value: "+55 (47) 99921-7767",
            href: "https://wa.me/5547999217767",
        },
        {
            icon: MapPin,
            title: "Localização",
            value: "Blumenau, SC - Brasil",
            href: "#contact",
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
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 },
    };

    return (
        <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-4xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl mb-4">Vamos Conversar?</h2>
                    <p className="text-foreground/70 max-w-2xl mx-auto">
                        Estou sempre aberto a novos projetos e oportunidades. Entre em contato comigo!
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {contactInfo.map((contact) => (
                        <motion.div key={contact.title} variants={item}>
                            <motion.a
                                href={contact.href}
                                target={contact.href.includes('wa.me') ? '_blank' : undefined}
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Card className="h-full hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer border-2 hover:border-primary/30 group relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <CardContent className="flex flex-col items-center justify-center p-6 text-center relative z-10">
                                        <motion.div
                                            className="mb-4 p-3 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg"
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <contact.icon size={24} />
                                        </motion.div>
                                        <h3 className="mb-2 group-hover:text-primary transition-colors">{contact.title}</h3>
                                        <p className="text-sm text-foreground/70">{contact.value}</p>
                                    </CardContent>
                                </Card>
                            </motion.a>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-foreground/60">
                        © 2025 Elian Oliveira. Desenvolvido com React, Vite e Tailwind CSS.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
