import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/theme/Theme-provider";
import Dropdown from "@/components/nav/Dropdown";
import { ModalProvider } from "@/context/ModalContext";
import Navbar from "@/components/nav/Navbar";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Havilah test",
  description: "Developed by Godwin",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-[#FBFEFD] dark:bg-[#1D2521] normal-text ${poppins.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div>
            <ModalProvider>
              <div className="relative">
                <Navbar />
              </div>
              <div className="relative">
                <Dropdown />
              </div>
            </ModalProvider>
            <div className="px-7 md:px-20 w-[100%] flex-center">
              {" "}
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
