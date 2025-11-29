"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
    "Mecânicos Certificados e Especializados",
    "Lounge de Espera Premium com Wi-Fi",
    "Serviço de Leva e Traz Gratuito",
    "Garantia de 1 Ano em Peças e Serviços",
    "Transparência Total no Orçamento",
];

export default function TrustSection() {
    return (
        <section id="about" className="py-20 bg-[#161616] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6 uppercase">
                                Por que escolher a <span className="text-safety-orange">AutoFix</span>?
                            </h2>
                            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                                Não somos apenas uma oficina. Somos um centro automotivo de alta performance dedicado a cuidar do seu veículo com a mesma paixão que você.
                            </p>

                            <ul className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex items-center gap-3 text-gray-300"
                                    >
                                        <CheckCircle2 className="w-6 h-6 text-safety-orange flex-shrink-0" />
                                        <span className="text-lg">{benefit}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: "url('https://images.unsplash.com/photo-1530046339160-71153320c746?auto=format&fit=crop&q=80')",
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
