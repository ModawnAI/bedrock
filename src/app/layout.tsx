import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
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
  description: "We design custom, easy-to-use AI tools for leaders in landscaping, construction, and field services that help them cut costs, save time, and smooth operations.",
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
    description: "We design custom, easy-to-use AI tools for leaders in landscaping, construction, and field services that help them cut costs, save time, and smooth operations.",
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
    description: "We design custom, easy-to-use AI tools for leaders in landscaping, construction, and field services that help them cut costs, save time, and smooth operations.",
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
      <body className={`${inter.variable} antialiased light`}>
        {children}
      </body>
    </html>
  );
}
