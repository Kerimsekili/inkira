"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function RealEstatePage() {
  return (
    <div className="max-w-7xl mx-auto">
      <main className="px-6 sm:px-8 lg:px-10">
        <SiteHeader />
        <div className="relative min-h-screen bg-gradient-to-r from-[#E4B7FF] via-[#B384FF] to-[#8C52FF] left-[50%] right-[50%] mx-[-50vw] w-screen relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative min-h-screen flex flex-col justify-center py-20">
            <div className="grid lg:grid-cols-2 items-center gap-14 w-full">
              {/* Text Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-white leading-tight">
                    Daha hızlı kiralama,
                    <br />
                    daha yüksek kazanç!
                  </h1>

                  <div className="space-y-4 md:space-y-6">
                    {[
                      "🏡 Gelişmiş portföy yönetimi: Tüm ilanlarınızı tek bir panelden yönetin, zamandan tasarruf edin.",
                      "📊 Akıllı analizler: Piyasa trendlerini takip edin, en iyi fiyatlandırma stratejisini belirleyin.",
                      "🔗 Güvenli sözleşme ve ödeme sistemi: Tüm işlemleri dijital ortamda tamamlayarak süreci hızlandırın.",
                    ].map((text, index) => (
                      <motion.p
                        key={index}
                        className="text-lg md:text-xl text-white/90"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 * (index + 1) }}
                      >
                        {text}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              </div>
              {/* Image Section */}
              <div className="relative order-2 w-full">
                <div className="relative w-full aspect-[3/4] max-w-[1280px] mx-auto">
                  <div className="absolute inset-0">
                    <Image
                      src="/images/11.png"
                      alt="Ev Sahipleri için Kiralama"
                      fill
                      className="object-contain z-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SiteFooter />
      </main>
    </div>
  );
}
