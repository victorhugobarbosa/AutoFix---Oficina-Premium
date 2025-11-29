"use client";

import { MapPin, Settings } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black py-12 border-t border-gray-900">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Settings className="w-6 h-6 text-safety-orange" />
                            <span className="text-xl font-bold font-heading tracking-wide text-white">
                                AUTO<span className="text-safety-orange">FIX</span>
                            </span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Sua oficina de confiança para manutenção de alta performance.
                            Cuidamos do seu carro como se fosse nosso.
                        </p>
                    </div>

                    {/* Address */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-wider mb-4">Localização</h3>
                        <div className="flex items-start gap-3 text-gray-400 text-sm">
                            <MapPin className="w-5 h-5 text-safety-orange flex-shrink-0 mt-1" />
                            <p>
                                Av. das Nações Unidas, 1234<br />
                                São Paulo - SP<br />
                                CEP: 01234-567
                            </p>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-wider mb-4">Como Chegar</h3>
                        <div className="bg-gray-800 rounded h-32 w-full flex items-center justify-center text-gray-600 text-xs uppercase tracking-widest">
                            Mapa do Google
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-900 mt-12 pt-8 text-center text-gray-600 text-xs">
                    <p>&copy; {new Date().getFullYear()} AutoFix Oficina Premium. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
