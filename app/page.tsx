import React from 'react';
import Image from 'next/image';
import { Phone, MapPin, Sparkles, Droplets, Heart, Clock, ShoppingBag, Camera } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  promo?: string;
  tag: string;
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
    tag: "ยอดนิยม",
    imageSrc: "/images/องุ่น.jpg",
  },
  {
    id: 2,
    name: "น้ำลำไยสด ออร์แกนิค",
    description: "เนื้อลำไยตู้มๆ หวานหอมกลมกล่อม ชื่นใจตั้งแต่คำแรก",
    price: 30,
    tag: "แนะนำ",
    imageSrc: "/images/ลำไย.jpg",
  },
  {
    id: 3,
    name: "ลำไยสดพร้อมทาน",
    description: "เนื้อลำไยแกะสดพร้อมทาน พกพาสะดวก กรอบ หวาน อร่อย",
    price: 20,
    tag: "กล่องละ 20 บาท",
    imageSrc: "/images/ลำไย.jpg",
  },
  {
    id: 4,
    name: "พุดดิ้งนมสด วุ้นมะพร้าว",
    description: "หอม มัน นุ่มละมุนลิ้น รสชาติหวานกำลังดี",
    price: 15,
    promo: "3 ถ้วย เพียง 40 บาท",
    tag: "โปรโมชั่น",
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
    <div className="min-h-screen bg-[#FAF9F6] text-stone-700 font-sans pb-20 sm:pb-0">
      <header className="sticky top-0 z-40 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-rose-100/70">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between xs-container">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-xl sm:text-2xl font-black tracking-wider bg-gradient-to-r from-rose-400 to-emerald-500 bg-clip-text text-transparent">
              LiMROS
            </span>
            <span className="text-[10px] sm:text-xs bg-rose-100/80 text-rose-700 px-2 py-0.5 rounded-full font-medium">
              ลิ้มรส
            </span>
          </div>
          <a
            href={`tel:${rawPhone}`}
            className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-rose-400 to-emerald-400 hover:from-rose-500 hover:to-emerald-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm transition-all active:scale-95 min-h-[36px]"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span className="hidden sm:inline">โทรสั่ง</span>
            <span>{phoneNumber}</span>
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden pt-5 pb-8 sm:pt-12 sm:pb-16 bg-gradient-to-b from-rose-100/40 via-emerald-50/50 to-[#FAF9F6]">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 xs-container">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/80 shadow-sm border border-emerald-100 text-emerald-800 text-[11px] sm:text-sm font-medium mb-3 sm:mb-6 max-w-full truncate">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500 shrink-0" />
              <span className="truncate">สดชื่นแท้จากธรรมชาติ เนื้อผลไม้เน้นๆ ทุกแก้ว</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-800 tracking-tight leading-tight mb-2 sm:mb-4 xs-title">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-emerald-500">
                LiMROS ลิ้มรส
              </span>
              <br />
              <span className="text-lg sm:text-3xl md:text-4xl font-bold text-stone-700 xs-subtitle">
                น้ำผลไม้สดและของหวานชื่นใจ
              </span>
            </h1>

            <p className="text-stone-600 text-xs sm:text-base md:text-lg mb-5 sm:mb-8 leading-relaxed max-w-2xl mx-auto xs-desc">
              สัมผัสรสชาติความสดชื่นจากผลไม้แท้ คัดสรรอย่างดี หวานกลมกล่อม พร้อมเนื้อผลไม้เต็มคำ ในราคาเริ่มต้นเพียง 15 บาท
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-4 mb-6 sm:mb-12">
              <a
                href="#menu"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold shadow-sm transition-all text-xs sm:text-base xs-btn min-h-[44px]"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>ดูรายการเมนู</span>
              </a>
              <a
                href="#gallery"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200/60 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold shadow-sm transition-all text-xs sm:text-base xs-btn min-h-[44px]"
              >
                <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500 shrink-0" />
                <span>ดูรูปภาพหน้าร้าน</span>
              </a>
            </div>
          </div>

          <div className="relative rounded-xl sm:rounded-3xl overflow-hidden shadow-md border-2 sm:border-4 border-white max-w-4xl mx-auto aspect-[4/3] sm:aspect-[16/9]">
            <Image
              src="/images/shop.jpg"
              alt="หน้าร้าน LiMROS ลิ้มรส น้ำผลไม้สด"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 360px) 100vw, (max-width: 640px) 100vw, 896px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent flex items-end p-3 sm:p-6 md:p-8">
              <div className="text-white">
                <span className="bg-rose-400 text-white text-[9px] sm:text-xs font-semibold px-2 py-0.5 rounded-full inline-block mb-1 sm:mb-2">
                  ภาพถ่ายหน้าร้านจริง
                </span>
                <p className="text-xs sm:text-lg md:text-xl font-bold leading-snug">
                  แวะมาอุดหนุนหน้าร้าน ลำไยสด องุ่นสด ตักให้แบบเน้นๆ
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mt-4 sm:mt-12 max-w-4xl mx-auto">
            <div className="bg-white/90 p-2.5 sm:p-4 rounded-lg sm:rounded-2xl border border-emerald-100/80 shadow-sm flex flex-col items-center text-center">
              <Droplets className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-500 mb-1 sm:mb-2 shrink-0" />
              <div className="font-bold text-[11px] sm:text-sm md:text-base text-stone-800">ผลไม้สดแท้</div>
              <div className="text-[9px] sm:text-xs text-stone-500">คัดสรรสะอาด</div>
            </div>
            <div className="bg-white/90 p-2.5 sm:p-4 rounded-lg sm:rounded-2xl border border-rose-100/80 shadow-sm flex flex-col items-center text-center">
              <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-rose-400 mb-1 sm:mb-2 shrink-0" />
              <div className="font-bold text-[11px] sm:text-sm md:text-base text-stone-800">เนื้อแน่นเต็มแก้ว</div>
              <div className="text-[9px] sm:text-xs text-stone-500">เคี้ยวเพลินทุกคำ</div>
            </div>
            <div className="bg-white/90 p-2.5 sm:p-4 rounded-lg sm:rounded-2xl border border-emerald-100/80 shadow-sm flex flex-col items-center text-center">
              <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-500 mb-1 sm:mb-2 shrink-0" />
              <div className="font-bold text-[11px] sm:text-sm md:text-base text-stone-800">สูตรออร์แกนิค</div>
              <div className="text-[9px] sm:text-xs text-stone-500">หวานละมุน ชื่นใจ</div>
            </div>
            <div className="bg-white/90 p-2.5 sm:p-4 rounded-lg sm:rounded-2xl border border-rose-100/80 shadow-sm flex flex-col items-center text-center">
              <Clock className="w-4 h-4 sm:w-6 sm:h-6 text-rose-400 mb-1 sm:mb-2 shrink-0" />
              <div className="font-bold text-[11px] sm:text-sm md:text-base text-stone-800">สดใหม่วันต่อวัน</div>
              <div className="text-[9px] sm:text-xs text-stone-500">สะอาด ปลอดภัย</div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-8 sm:py-16 max-w-6xl mx-auto px-3 sm:px-6 xs-container">
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-stone-800 mb-1.5 sm:mb-3">
            เมนูเครื่องดื่มและของหวาน
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm md:text-base">
            รสหวานละมุน ชื่นใจ มีให้เลือกทั้งแบบแก้วและแบบถ้วย
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl sm:rounded-3xl p-3.5 sm:p-5 border border-rose-100/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between xs-card"
            >
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                    {item.tag}
                  </span>
                  {item.promo && (
                    <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-100">
                      {item.promo}
                    </span>
                  )}
                </div>

                <div className="relative w-full h-32 sm:h-36 md:h-40 rounded-lg sm:rounded-2xl overflow-hidden mb-3 bg-stone-100 shadow-inner xs-card-image">
                  <Image
                    src={item.imageSrc}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 360px) 100vw, (max-width: 640px) 100vw, 25vw"
                  />
                </div>

                <h3 className="text-base sm:text-xl font-bold text-stone-800 mb-1">{item.name}</h3>
                <p className="text-xs sm:text-sm text-stone-500 mb-3 leading-relaxed xs-desc">{item.description}</p>
              </div>

              <div className="flex items-end justify-between pt-2.5 border-t border-rose-50">
                <div>
                  <span className="text-[9px] sm:text-xs text-stone-400 block">ราคา</span>
                  <span className="text-lg sm:text-2xl font-black text-stone-800">{item.price}</span>
                  <span className="text-xs sm:text-sm text-stone-500 ml-1">บาท</span>
                </div>
                <a
                  href={`tel:${rawPhone}`}
                  className="bg-emerald-50 hover:bg-rose-50 text-emerald-700 hover:text-rose-600 p-2 sm:p-2.5 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="py-8 sm:py-16 bg-white/70 border-y border-rose-100/60">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 xs-container">
          <div className="text-center mb-6 sm:mb-12">
            <span className="text-[10px] sm:text-xs font-semibold text-emerald-700 tracking-wider uppercase bg-emerald-100/60 px-2.5 py-0.5 rounded-full border border-emerald-200/50">
              Gallery
            </span>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-stone-800 mt-1.5 mb-1.5 sm:mb-3">
              ภาพบรรยากาศหน้าร้านและสินค้า
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm md:text-base">
              ภาพถ่ายจริงจากหน้าร้าน LiMROS สดใหม่ สะอาด น่ารับประทาน
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {galleryItems.map((photo) => (
              <div
                key={photo.id}
                className="group relative rounded-lg sm:rounded-2xl overflow-hidden border border-emerald-100/80 shadow-sm bg-stone-100 aspect-[4/3]"
              >
                <Image
                  src={photo.imageSrc}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 360px) 100vw, (max-width: 640px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent flex flex-col justify-end p-2.5 sm:p-4 text-white">
                  <span className="text-[9px] sm:text-xs text-rose-200 font-medium mb-0.5">
                    {photo.category}
                  </span>
                  <p className="font-bold text-xs sm:text-sm md:text-base leading-snug">{photo.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-3 sm:px-6 py-8 sm:py-16 xs-container">
        <div className="bg-gradient-to-r from-rose-200 via-pink-200 to-emerald-200 rounded-xl sm:rounded-3xl p-4 sm:p-8 md:p-12 text-stone-800 shadow-sm border border-white flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="text-center md:text-left">
            <span className="bg-white/80 text-rose-600 text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full mb-1.5 sm:mb-3 inline-block border border-rose-100">
              โปรโมชั่นพิเศษ
            </span>
            <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold mb-1 sm:mb-2 text-stone-800 leading-snug">
              พุดดิ้งนมสด 3 ถ้วย เพียง 40 บาท (ปกติ 45 บาท)
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm md:text-base">
              หวานหอมนุ่มละมุน คละรสชาติได้ สดชื่น อิ่มอร่อยจุใจ
            </p>
          </div>
          <a
            href={`tel:${rawPhone}`}
            className="w-full md:w-auto text-center whitespace-nowrap bg-white text-emerald-700 hover:bg-emerald-50 px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full font-bold shadow-sm transition-all active:scale-95 border border-emerald-100 text-xs sm:text-base min-h-[44px] flex items-center justify-center xs-btn"
          >
            โทรสั่งเลย {phoneNumber}
          </a>
        </div>
      </section>

      <section className="bg-white border-t border-rose-100/60 py-6 sm:py-12">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-6 xs-container">
          <div className="flex items-center gap-2.5 sm:gap-4 text-left w-full md:w-auto">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-rose-50 flex items-center justify-center text-rose-400 border border-rose-100 shrink-0">
              <MapPin className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-base text-stone-800">แวะมาอุดหนุนที่หน้าร้าน</h4>
              <p className="text-[10px] sm:text-sm text-stone-500">จำหน่ายที่ตลาดนัดและงานกิจกรรมต่างๆ รับจัดเลี้ยงนอกสถานที่</p>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <a
              href={`tel:${rawPhone}`}
              className="w-full md:w-auto flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-sm min-h-[44px] xs-btn"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>โทรสอบถามที่ตั้ง {phoneNumber}</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-stone-800 text-stone-300 py-4 sm:py-6 text-center text-[10px] sm:text-xs px-3">
        <p>© {new Date().getFullYear()} LiMROS (ลิ้มรส) น้ำผลไม้สด ขอบพระคุณที่อุดหนุน</p>
      </footer>

      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-md border-t border-rose-200/80 px-3 py-2 flex items-center justify-between shadow-lg safe-bottom">
        <div className="flex flex-col">
          <span className="text-[9px] text-stone-500 font-medium">สั่งซื้อหรือสอบถาม</span>
          <span className="text-xs font-bold text-stone-800">{phoneNumber}</span>
        </div>
        <a
          href={`tel:${rawPhone}`}
          className="flex items-center gap-1 bg-gradient-to-r from-rose-400 to-emerald-400 text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-sm active:scale-95 min-h-[44px]"
        >
          <Phone className="w-3 h-3 shrink-0" />
          <span>กดโทรสั่งเลย</span>
        </a>
      </div>
    </div>
  );
}