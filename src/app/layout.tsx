import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IBDA3 LAB - Laboratoire d'innovation pour la jeunesse",
  description: "Un laboratoire d'innovation pour la jeunesse. Incubation, formation, mentorat et mise en réseau pour transformer une idée en projet structuré.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
