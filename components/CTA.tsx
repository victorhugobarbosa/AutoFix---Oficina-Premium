"use client";

import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";

export default function CTA() {
    return (
        <section id="contact" className="py-20 bg-charcoal relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-safety-orange/5 skew-x-12 transform translate-x-1/4" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="bg-[#1a1a1a] rounded-2xl p-8 md:p-12 border border-gray-800 shadow-2xl max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4 uppercase">
                            Seu carro está fazendo barulho? <br />
                            <span className="text-safety-orange">Não arrisque.</span>
                        </h2>
                        <p className="text-gray-400">
                            Agende sua visita agora mesmo e garanta a segurança da sua família.
                        </p>
                    </div>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 uppercase tracking-wider font-bold">Nome</label>
                            <input
                                type="text"
                                placeholder="Seu nome completo"
                                className="w-full bg-charcoal border border-gray-700 rounded p-4 text-white focus:border-safety-orange focus:outline-none transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 uppercase tracking-wider font-bold">Telefone</label>
                            <input
                                type="tel"
                                placeholder="(00) 00000-0000"
                                className="w-full bg-charcoal border border-gray-700 rounded p-4 text-white focus:border-safety-orange focus:outline-none transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 uppercase tracking-wider font-bold">Modelo do Carro</label>
                            <input
                                type="text"
                                placeholder="Ex: Honda Civic 2020"
                                className="w-full bg-charcoal border border-gray-700 rounded p-4 text-white focus:border-safety-orange focus:outline-none transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 uppercase tracking-wider font-bold">Serviço Desejado</label>
                            <select className="w-full bg-charcoal border border-gray-700 rounded p-4 text-white focus:border-safety-orange focus:outline-none transition-colors appearance-none">
                                <option>Diagnóstico Geral</option>
                                <option>Revisão de Freios</option>
                                <option>Troca de Óleo</option>
                                <option>Outro</option>
                            </select>
                        </div>

                        <div className="md:col-span-2 mt-4">
                            <a
                                href="https://wa.me/5519995828604?text=Olá, gostaria de agendar uma visita."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-safety-orange hover:bg-orange-600 text-white text-lg font-bold py-4 rounded uppercase tracking-wider transition-all hover:shadow-[0_0_20px_rgba(255,107,0,0.3)] block text-center"
                            >
                                Agendar Visita via WhatsApp
                            </a>
                        </div>
                    </form>

                    <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-gray-400 text-sm">
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-safety-orange" />
                            <span>(11) 99999-9999</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-safety-orange" />
                            <span>Seg - Sex: 08h às 18h</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
