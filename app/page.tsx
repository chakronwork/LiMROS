import React from 'react';
import Image from 'next/image';
import { Phone, MapPin } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  promo?: string;
  tag?: string;
  imageSrc: string;
}

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageSrc: string;
  alt: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "น้ำองุ่นสด",
    description: "หวานกรอบ เนื้อเน้นๆ เต็มแก้ว สดชื่นคลายร้อน",
    price: 35,
    tag: "ขายดี",
    imageSrc: "/images/องุ่น.jpg",
  },
  {
    id: 2,
    name: "น้ำลำไยสด ออร์แกนิค",
    description: "เนื้อลำไยตู้มๆ หวานหอมกลมกล่อม ชื่นใจตั้งแต่คำแรก",
    price: 30,
    imageSrc: "/images/ลำไย.jpg",
  },
  {
    id: 3,
    name: "ลำไยสดพร้อมทาน",
    description: "เนื้อลำไยแกะสดพร้อมทาน พกพาสะดวก กรอบ หวาน อร่อย",
    price: 20,
    imageSrc: "/images/ลำไย.jpg",
  },
  {
    id: 4,
    name: "พุดดิ้งนมสด วุ้นมะพร้าว",
    description: "หอม มัน นุ่มละมุนลิ้น รสชาติหวานกำลังดี",
    price: 15,
    promo: "3 ถ้วย 40 บาท",
    imageSrc: "/images/พุดดิ้ง.jpg",
  },
];

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "บรรยากาศหน้าร้าน LiMROS",
    category: "หน้าร้าน",
    imageSrc: "/images/shop.jpg",
    alt: "หน้าร้าน LiMROS น้ำผลไม้สด",
  },
  {
    id: 2,
    title: "โถน้ำลำไยสดและน้ำองุ่นสด",
    category: "วัตถุดิบสดใหม่",
    imageSrc: "/images/ลำไย.jpg",
    alt: "โหลใส่น้ำผลไม้สดเนื้อแน่น",
  },
  {
    id: 3,
    title: "พุดดิ้งนมสดและของหวาน",
    category: "ของหวานพร้อมทาน",
    imageSrc: "/images/พุดดิ้ง.jpg",
    alt: "พุดดิ้งนมสดวางเรียงหน้าร้าน",
  },
  {
    id: 4,
    title: "น้ำองุ่นสด หวานกรอบ",
    category: "เครื่องดื่มยอดนิยม",
    imageSrc: "/images/องุ่น.jpg",
    alt: "น้ำองุ่นสดเนื้อเน้นๆ เต็มแก้ว",
  },
];

export default function Home() {
  const phoneNumber = "087-1584685";
  const rawPhone = "0871584685";

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] pb-20 sm:pb-0">

      {/* ── Header ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-[var(--bg)]/95 backdrop-blur-sm border-b border-[var(--line)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between xs-container">
          <span className="font-[family-name:var(--font-fraunces)] italic text-2xl sm:text-3xl text-[var(--ink)]">
            LiMROS
          </span>
          <a
            href={`tel:${rawPhone}`}
            className="flex items-center gap-2 text-sm sm:text-base font-medium text-[var(--pink)] hover:text-[var(--ink)] transition-colors min-h-[44px]"
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span>{phoneNumber}</span>
          </a>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="pt-10 pb-12 sm:pt-20 sm:pb-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto xs-container">
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 items-end">
            <div>
              <p className="text-[var(--pink)] font-medium mb-4">ลิ้มรส — น้ำผลไม้สดทุกวัน</p>
              <h1 className="xs-title text-4xl sm:text-6xl md:text-7xl leading-[1.02] font-medium tracking-tight mb-6 max-w-lg">
                หวานจากผลไม้จริง
                ไม่ใช่จากน้ำเชื่อม
              </h1>
              <p className="xs-desc text-base sm:text-lg text-[var(--ink-soft)] max-w-md mb-8">
                คัดสรรผลไม้สดทุกเช้า คั้นและแกะเนื้อเน้นๆ ไม่ผสมน้ำเชื่อม เริ่มต้นเพียง 15 บาท
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#menu"
                  className="xs-btn inline-flex items-center justify-center bg-[var(--ink)] text-[var(--bg)] px-6 py-3 text-sm sm:text-base font-medium hover:bg-[var(--pink)] transition-colors min-h-[44px]"
                >
                  ดูเมนูทั้งหมด
                </a>
                <a
                  href={`tel:${rawPhone}`}
                  className="xs-btn inline-flex items-center justify-center border border-[var(--line)] px-6 py-3 text-sm sm:text-base font-medium hover:border-[var(--pink)] hover:text-[var(--pink)] transition-colors min-h-[44px]"
                >
                  โทรสั่ง {phoneNumber}
                </a>
              </div>
            </div>

            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] bg-[var(--pink-tint)]">
              <Image
                src="/images/shop.jpg"
                alt="หน้าร้าน LiMROS ลิ้มรส น้ำผลไม้สด"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </div>

          {/* Menu-board style stat row instead of an icon feature grid */}
          <div className="flex flex-wrap gap-x-10 gap-y-5 mt-12 sm:mt-16 pt-8 border-t border-[var(--line)]">
            <div>
              <span className="block font-[family-name:var(--font-fraunces)] text-3xl sm:text-4xl">100%</span>
              <span className="text-sm text-[var(--ink-soft)]">ผลไม้แท้ ไม่ผสมน้ำเชื่อม</span>
            </div>
            <div>
              <span className="block font-[family-name:var(--font-fraunces)] text-3xl sm:text-4xl">฿15</span>
              <span className="text-sm text-[var(--ink-soft)]">ราคาเริ่มต้น</span>
            </div>
            <div>
              <span className="block font-[family-name:var(--font-fraunces)] text-3xl sm:text-4xl text-[var(--green)]">ทุกวัน</span>
              <span className="text-sm text-[var(--ink-soft)]">คั้นและแกะสดใหม่</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Menu — laid out like an actual menu board ─────────── */}
      <section id="menu" className="py-14 sm:py-20 px-4 sm:px-6 border-t border-[var(--line)]">
        <div className="max-w-5xl mx-auto xs-container">
          <div className="flex items-baseline justify-between mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-fraunces)]">เมนู</h2>
            <span className="text-sm text-[var(--ink-soft)]">4 รายการ</span>
          </div>

          <div>
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="group flex items-center gap-4 sm:gap-6 py-5 border-b border-[var(--line)] first:border-t"
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-[var(--pink-tint)] overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base sm:text-lg font-medium truncate">{item.name}</h3>
                    {item.tag && (
                      <span className="text-xs text-[var(--pink)] shrink-0">{item.tag}</span>
                    )}
                  </div>
                  <p className="xs-desc text-sm text-[var(--ink-soft)] mt-0.5 line-clamp-2">
                    {item.description}
                  </p>
                  {item.promo && (
                    <p className="text-xs text-[var(--green)] mt-1">{item.promo}</p>
                  )}
                </div>

                <div className="price-figure font-[family-name:var(--font-fraunces)] text-2xl sm:text-3xl shrink-0">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery — editorial strip, caption beneath the photo ─ */}
      <section id="gallery" className="py-14 sm:py-20 px-4 sm:px-6 bg-[var(--pink-tint)]/40 border-t border-[var(--line)]">
        <div className="max-w-5xl mx-auto xs-container">
          <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-fraunces)] mb-8 sm:mb-12">
            ที่ร้าน
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {galleryItems.map((photo) => (
              <figure key={photo.id}>
                <div className="relative aspect-[4/5] bg-[var(--pink-tint)] overflow-hidden">
                  <Image
                    src={photo.imageSrc}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <figcaption className="mt-2">
                  <p className="text-sm font-medium leading-snug">{photo.title}</p>
                  <p className="text-xs text-[var(--ink-soft)]">{photo.category}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Promo — same menu-board language, not a gradient banner ─ */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 border-t border-[var(--line)]">
        <div className="max-w-5xl mx-auto xs-container flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <p className="text-sm text-[var(--pink)] font-medium mb-1">โปรวันนี้</p>
            <p className="text-lg sm:text-xl font-medium">
              พุดดิ้งนมสด 3 ถ้วย 40 บาท <span className="text-[var(--ink-soft)] font-normal">(ปกติ 45 บาท)</span>
            </p>
          </div>
          <a
            href={`tel:${rawPhone}`}
            className="xs-btn inline-flex items-center justify-center bg-[var(--pink)] text-white px-6 py-3 text-sm sm:text-base font-medium hover:bg-[var(--ink)] transition-colors min-h-[44px] shrink-0"
          >
            โทรสั่งเลย {phoneNumber}
          </a>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-[var(--line)] py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto xs-container flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[var(--pink)] shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-sm">แวะมาอุดหนุนที่หน้าร้าน</p>
              <p className="text-sm text-[var(--ink-soft)]">
                จำหน่ายที่ตลาดนัดและงานกิจกรรมต่างๆ รับจัดเลี้ยงนอกสถานที่
              </p>
            </div>
          </div>
          <p className="text-xs text-[var(--ink-soft)]">
            © {new Date().getFullYear()} LiMROS (ลิ้มรส) — ขอบพระคุณที่อุดหนุน
          </p>
        </div>
      </footer>

      {/* ── Mobile sticky call bar ─────────────────────────── */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--bg)]/95 backdrop-blur-sm border-t border-[var(--line)] px-4 py-2.5 flex items-center justify-between safe-bottom">
        <div>
          <span className="block text-[10px] text-[var(--ink-soft)]">สั่งซื้อหรือสอบถาม</span>
          <span className="text-sm font-medium">{phoneNumber}</span>
        </div>
        <a
          href={`tel:${rawPhone}`}
          className="flex items-center gap-1.5 bg-[var(--pink)] text-white px-4 py-2 text-sm font-medium min-h-[44px]"
        >
          <Phone className="w-3.5 h-3.5 shrink-0" />
          <span>โทรเลย</span>
        </a>
      </div>
    </div>
  );
}