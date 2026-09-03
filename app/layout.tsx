import type { Metadata, Viewport } from "next";
import { Baloo_2, Nunito, Caveat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { contactData } from "@/data/contact";

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-heading",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-sans",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
});

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
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "B-Tech Company",
  image: "https://btech-company.com/images/logoBtechcompany.png",
  url: "https://btech-company.com",
  telephone: contactData.phone,
  email: contactData.email,
  address: {
    "@type": "PostalAddress",
    addressCountry: "MG",
  },
  description:
    "B-Tech Company conçoit des solutions digitales modernes, performantes et sur-mesure : sites web, applications mobiles, logiciels métiers et design graphique.",
  priceRange: "$$",
  sameAs: [
    contactData.socials.facebook,
    contactData.socials.linkedin,
    contactData.socials.github,
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`min-h-full flex flex-col font-sans bg-background text-foreground selection:bg-blue-600 selection:text-white transition-colors duration-200 ${baloo.variable} ${nunito.variable} ${caveat.variable}`}>
        <ThemeProvider defaultTheme="dark">
          <Navbar />
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
          <WhatsAppButton />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
