import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css"; 

const kanit = Kanit({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin", "thai"],
});

export const metadata: Metadata = {
  title: "LiMROS ลิ้มรส - น้ำผลไม้สดและของหวานชื่นใจ",
  description: "น้ำองุ่นสด น้ำลำไยสดออร์แกนิค พุดดิ้งนมสด ชื่นใจ สดใหม่ทุกวัน โทร 087-1584685",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={kanit.className}>{children}</body>
    </html>
  );
}