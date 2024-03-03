import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Providers from "@/components/providers";

const ibm_plex_sans = Lato({
  subsets:["latin"],
  weight: ["100","300","400","700","900"],
});

const title = "QS | Dashboard";
const description = "";
const url = "https://www.topuniversities.com/";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords:
    ["Rankings","Education"],
  authors: [{ name: "Quacquarelli Symonds" }],
  creator: "Quacquarelli Symonds",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={ibm_plex_sans.className} suppressHydrationWarning>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <Providers>
              {children}
            </Providers>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
