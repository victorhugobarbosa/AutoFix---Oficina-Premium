"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-charcoal" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-white mb-6 leading-tight uppercase tracking-tight">
                        Manutenção de <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety-orange to-orange-500">
                            Alta Performance
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light"
                >
                    Diagnóstico computadorizado, peças originais e garantia total.
                    <br className="hidden md:block" /> A oficina que seu carro merece.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <a
                        href="https://wa.me/5519995828604?text=Olá, gostaria de solicitar um orçamento."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-safety-orange hover:bg-orange-600 text-white text-lg px-8 py-4 rounded font-bold uppercase tracking-wider transition-all flex items-center gap-2 mx-auto hover:scale-105 w-fit"
                    >
                        Solicitar Orçamento via WhatsApp
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
