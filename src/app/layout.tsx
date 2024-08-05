import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dash Fusion",
  description:
    "Dash Fusion is a responsive dashboard application with features like user management, analytics, and order tracking. It offers a clean interface and is highly customizable for various applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-black text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
