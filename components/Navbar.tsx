"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Settings, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Serviços", href: "#services" },
        { name: "Sobre", href: "#about" },
        { name: "Contato", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-charcoal/90 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative">
                        <Settings className="w-8 h-8 text-safety-orange transition-transform duration-700 group-hover:rotate-180" />
                    </div>
                    <span className="text-2xl font-bold font-heading tracking-wide text-white">
                        AUTO<span className="text-safety-orange">FIX</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-safety-orange transition-colors font-medium text-sm uppercase tracking-wider"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/5519995828604?text=Olá, gostaria de agendar um horário."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-safety-orange hover:bg-orange-600 text-white px-6 py-2 rounded font-bold uppercase tracking-wider transition-colors text-sm"
                    >
                        Agendar Agora
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-charcoal border-t border-gray-800 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-safety-orange text-lg font-medium"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="https://wa.me/5519995828604?text=Olá, gostaria de agendar um horário."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-safety-orange text-white px-6 py-3 rounded font-bold uppercase tracking-wider w-full text-center block"
                            >
                                Agendar Agora
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
