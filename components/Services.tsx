"use client";

import { motion } from "framer-motion";
import { Activity, Disc, Droplets, Gauge } from "lucide-react";

const services = [
    {
        icon: Activity,
        title: "Diagnóstico Eletrônico",
        description: "Análise completa dos sistemas eletrônicos do seu veículo com scanners de última geração.",
    },
    {
        icon: Disc,
        title: "Revisão de Freios",
        description: "Manutenção preventiva e corretiva do sistema de frenagem para sua segurança total.",
    },
    {
        icon: Droplets,
        title: "Troca de Óleo Premium",
        description: "Utilizamos apenas lubrificantes sintéticos de alta performance e filtros originais.",
    },
    {
        icon: Gauge,
        title: "Alinhamento 3D",
        description: "Tecnologia de ponta para garantir a estabilidade e durabilidade dos pneus.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-charcoal relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4 uppercase">
                        Nossos <span className="text-safety-orange">Serviços</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Soluções completas para manter seu veículo em perfeito estado de funcionamento.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 hover:border-safety-orange transition-colors duration-300"
                        >
                            <div className="mb-6">
                                <service.icon className="w-12 h-12 text-gray-500 group-hover:text-safety-orange transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold font-heading text-white mb-3 uppercase tracking-wide">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
