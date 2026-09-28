import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/site/SmoothScroll";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Nicolas Barbosa — DevOps & Architecture Système",
  description:
    "Étudiant à l'École 42 Mulhouse (Expert en architecture informatique, RNCP 7). En recherche d'une alternance DevOps, Infrastructures et Systèmes dès janvier 2027.",
  metadataBase: new URL("https://portfolio-nicolasbarbosa.vercel.app"),
  openGraph: {
    title: "Nicolas Barbosa — DevOps & Architecture Système",
    description:
      "Linux (Debian), conteneurisation Docker, automatisation Bash/Python et bas niveau. Étudiant à 42 Mulhouse, recherche alternance dès janvier 2027.",
    locale: "fr_FR",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SmoothScroll />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}