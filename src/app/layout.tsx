import type { Metadata } from "next";
import { brandTypeface } from "@/styles/typography";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tien Vo",
  description:
    "Welcome to Tien Hoang Vo's personal website, showcasing my projects, experiences, and insights as a React.js Developer.",
  keywords: [
    "Tien Vo",
    "Tien Hoang Vo",
    "React.js",
    "Web Development",
    "Portfolio",
    "Blog",
    "Next.js",
    "Tailwind CSS",
    "Typescript",
  ],
  authors: { name: "Tien Vo", url: "https://github.com/tienvodev" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          brandTypeface.variable,
          "antialiased font-brand min-h-screen flex items-center justify-center"
        )}
      >
        {children}
      </body>
    </html>
  );
}
