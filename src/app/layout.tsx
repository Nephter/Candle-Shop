import type { Metadata } from "next";
import { cn } from "@/src/lib/utils";
import { fontSans } from "@/styles/fonts";
import { ThemeProvider } from "@/src/components/providers/theme-provider";
import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";
import { ScrollToTop } from "@/src/components/ScrollToTop";


import "./globals.css";
import { siteConfig } from "@/src/config/site";

const { title, description } = siteConfig;

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />

            <div className="flex-1">{children}</div>
            <Footer />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
