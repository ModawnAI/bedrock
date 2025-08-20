import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-korean",
  weight: ["300", "400", "500", "700"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: {
    default: "Bedrock Innovations - Custom AI Solutions for Service Industries",
    template: "%s | Bedrock Innovations"
  },
  description: "We build custom, end-to-end AI solutions for service industry leaders in landscaping, construction, and field services who are tired of clunky, overpriced systems that aren't innovating fast enough.",
  keywords: [
    "AI solutions",
    "custom software",
    "landscaping software",
    "construction software", 
    "field services",
    "business automation",
    "AI development",
    "service industry technology",
    "custom AI tools",
    "operational efficiency"
  ],
  authors: [{ name: "Bedrock Innovations Team" }],
  creator: "Bedrock Innovations",
  publisher: "Bedrock Innovations",
  metadataBase: new URL("https://bedrock-innovations.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bedrock-innovations.com",
    siteName: "Bedrock Innovations",
    title: "Bedrock Innovations - Custom AI Solutions for Service Industries",
    description: "We build custom, end-to-end AI solutions for service industry leaders in landscaping, construction, and field services who are tired of clunky, overpriced systems that aren't innovating fast enough.",
    images: [
      {
        url: "/og-image.png",
        width: 1280,
        height: 720,
        alt: "Bedrock Innovations - Custom AI Solutions for Service Industries",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bedrock Innovations - Custom AI Solutions for Service Industries",
    description: "We build custom, end-to-end AI solutions for service industry leaders in landscaping, construction, and field services who are tired of clunky, overpriced systems that aren't innovating fast enough.",
    images: ["/og-image.png"],
    creator: "@bedrockinnovations",
    site: "@bedrockinnovations",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.variable} ${notoSansKR.variable} antialiased light`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
