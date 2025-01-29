import SignInPage from "@/app/(auth)/signIn/page"
import Navbar from "@/components/Navbar";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A Cool Looking Dashboard",
  description: "With this you have the best way to check your analytics !",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableColorScheme
          enableSystem={false}
          storageKey="dashboard-theme"
        >
          <div>
          <Navbar />
              <div className="p-5 w-full md:max-w-[1140px]">{children}</div>
            </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

