import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

// Fonts
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Regular → Bold
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Regular → Bold
});

// Metadata
export const metadata: Metadata = {
  title: "Woman of Difference –  Equipping Individuals Through Transformation",
  description:
    "Transform your life through mindset coaching, premium cleaning services, and empowering events with Woman of Difference. Join a supportive community of women committed to growth and transformation.",
  keywords: [
    "woman empowerment",
    "mindset coaching",
    "personal growth",
    "premium cleaning",
    "women community",
    "transformation",
    "R.O.O.T.S Framework",
  ],
  authors: [{ name: "Woman of Difference", url: "https://womanofdifference.com" }],
  openGraph: {
    title: "Woman of Difference – Equipping Individuals Through Transformation",
    description:
      "Transform your life through mindset coaching, premium cleaning services, and empowering events with Woman of Difference.",
    url: "https://womanofdifference.com",
    siteName: "Woman of Difference",
    images: [
      {
        url: "https://womanofdifference.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Woman of Difference – Equipping Individuals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
