import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Techistry Integrated - Technology Solutions",
  description: "Leading technology company providing innovative solutions for modern businesses",
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
