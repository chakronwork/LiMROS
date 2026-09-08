import type { Metadata } from "next";
import { Kanit, Fraunces } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin", "thai"],
  variable: "--font-kanit",
});

const fraunces = Fraunces({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://limros.vercel.app"),
  title: "LiMROS ลิ้มรส - น้ำผลไม้สดและของหวานชื่นใจ",
  description: "น้ำองุ่นสด น้ำลำไยสดออร์แกนิค พุดดิ้งนมสด ชื่นใจ สดใหม่ทุกวัน โทร 087-1584685",
  openGraph: {
    title: "LiMROS ลิ้มรส - น้ำผลไม้สดและของหวานชื่นใจ",
    description: "น้ำองุ่นสด น้ำลำไยสดออร์แกนิค พุดดิ้งนมสด ชื่นใจ สดใหม่ทุกวัน โทร 087-1584685",
    url: "/",
    siteName: "LiMROS",
    images: [
      {
        url: "/images/shop.jpg",
        width: 1200,
        height: 630,
        alt: "หน้าร้าน LiMROS น้ำผลไม้สดและของหวาน",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LiMROS ลิ้มรส - น้ำผลไม้สดและของหวานชื่นใจ",
    description: "น้ำองุ่นสด น้ำลำไยสดออร์แกนิค พุดดิ้งนมสด ชื่นใจ สดใหม่ทุกวัน โทร 087-1584685",
    images: ["/images/limros.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${kanit.variable} ${fraunces.variable}`}>
      <body className={kanit.className}>{children}</body>
    </html>
  );
}