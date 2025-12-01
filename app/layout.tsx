import type { Metadata } from "next";
import { Inter, Teko } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AutoFix - Oficina Mecânica Premium",
  description: "Manutenção de alta performance para seu veículo. Diagnóstico computadorizado e garantia total.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${teko.variable} antialiased bg-charcoal text-white`}
      >
        {children}
      </body>
    </html>
  );
}
