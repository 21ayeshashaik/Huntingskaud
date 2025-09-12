import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hunting Skaud",
  description: "Recruitment Consulting ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
