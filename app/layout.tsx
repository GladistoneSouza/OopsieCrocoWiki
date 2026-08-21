import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oopsie Croco Wiki",
  description: "Guia prático de equipamentos, gemas, builds, heróis e modos de jogo.",
  openGraph: {
    title: "Oopsie Croco Wiki",
    description: "Equipamentos, gemas, builds e Co-op.",
    images: [{ url: "/og.png", width: 1200, height: 625, alt: "Oopsie Croco Wiki" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oopsie Croco Wiki",
    description: "Equipamentos, gemas, builds e Co-op.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
