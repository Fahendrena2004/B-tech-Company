import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://btech-company.com"),
  title: {
    default: "B-Tech Company | Solutions numériques, Web, Mobile & Design",
    template: "%s | B-Tech Company",
  },
  description:
    "B-Tech Company accompagne les entreprises et les particuliers dans la création de sites web, applications mobiles, logiciels et solutions digitales sur mesure.",
  keywords: [
    "B-Tech Company",
    "Développement Web",
    "Développement Mobile",
    "Création de sites web",
    "Logiciels sur mesure",
    "Design Graphique",
    "Solutions Numériques",
    "Next.js",
    "React",
    "Laravel",
    "Madagascar",
  ],
  authors: [{ name: "B-Tech Company" }],
  creator: "B-Tech Company",
  publisher: "B-Tech Company",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://btech-company.com",
    title: "B-Tech Company | Solutions numériques, Web, Mobile & Design",
    description:
      "B-Tech Company conçoit des solutions digitales modernes, performantes et adaptées aux besoins des entreprises et des particuliers.",
    siteName: "B-Tech Company",
    images: [
      {
        url: "/images/Acceuil.jpeg",
        width: 1200,
        height: 630,
        alt: "B-Tech Company - Solutions Numériques",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B-Tech Company | Solutions numériques, Web, Mobile & Design",
    description:
      "B-Tech Company conçoit des solutions digitales modernes, performantes et adaptées aux besoins des entreprises et des particuliers.",
    images: ["/images/Acceuil.jpeg"],
  },
  icons: {
    icon: "/images/logoBtechcompany-removebg-preview.png",
    shortcut: "/images/logoBtechcompany-removebg-preview.png",
    apple: "/images/logoBtechcompany-removebg-preview.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className="h-full scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground selection:bg-blue-600 selection:text-white transition-colors duration-200">
        <ThemeProvider defaultTheme="dark">
          <Navbar />
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
