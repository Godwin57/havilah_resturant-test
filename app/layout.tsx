import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/theme/Theme-provider";
import Dropdown from "@/components/nav/Dropdown";
import { ModalProvider } from "@/context/ModalContext";
import Navbar from "@/components/nav/Navbar";

export const metadata: Metadata = {
  title: "Havilah test",
  description: "Developed by Godwin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-[#FBFEFD] dark:bg-[#1D2521] normal-text px-4`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div>
            <ModalProvider>
              <div className="relative mb-[50px]">
                <Navbar />
              </div>
              <div className="relative">
                <Dropdown />
              </div>
            </ModalProvider>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
