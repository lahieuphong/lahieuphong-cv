import type { Metadata } from "next";
import type { ReactNode } from "react";
import SiteNavbar from "./components/SiteNavbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Hiểu Phong - 罗晓峰",
  description: "La Hiểu Phong - 罗晓峰",
};

const themeBootScript = `
(() => {
  try {
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDarkMode = storedTheme === "dark" || (!storedTheme && prefersDark);

    document.documentElement.classList.toggle("dark-mode", shouldUseDarkMode);
  } catch {
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body>
        <SiteNavbar />
        {children}
      </body>
    </html>
  );
}
