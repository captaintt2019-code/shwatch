import type { ReactNode } from "react";
import type { Metadata } from "next";

import { siteContent } from "@/lib/i18n";

import "./globals.css";

const defaultContent = siteContent["zh-CN"];

export const metadata: Metadata = {
  title: defaultContent.metaTitle,
  description: defaultContent.metaDescription,
  applicationName: defaultContent.brandName,
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
