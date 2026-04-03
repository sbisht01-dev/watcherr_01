import "./globals.css";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import SmoothScroll from "@/components/providers/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";
import Cursor from "@/components/Cursor";
import PageTransition from "@/components/PageTransition";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["800"], // Explicitly load the heavy weight for headings
  variable: "--font-bricolage", // This must be exactly this
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bricolage.variable} ${inter.variable} antialiased`}>
        <ScrollToTop />
        <Cursor />
        <SmoothScroll>
          <PageTransition>
            {children}
          </PageTransition></SmoothScroll>
      </body>
    </html>
  );
}