import Image from "next/image";
import { Building2, Lightbulb } from "lucide-react";

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/images/20.png"
              alt="İnkira Ekibi"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-[#2D2D2D]">Biz Kimiz?</h2>
              <p className="text-lg text-[#666666] leading-relaxed">
                Finans, pazarlama ve hukuk alanlarından çok değerli
                profesyonellerden oluşan yetkin ve deneyimli ekibimizle sizlere
                hizmet etmek için buradayız.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-[#E4B7FF] to-[#8C52FF] flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#2D2D2D]">
                    Güvenilir Çözüm Ortağı
                  </h3>
                  <p className="text-[#666666]">
                    Mülk sahipleri ve kiracılar için güvenilir, şeffaf ve
                    yenilikçi çözümler sunuyoruz.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-[#E4B7FF] to-[#8C52FF] flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#2D2D2D]">
                    Yenilikçi Teknoloji
                  </h3>
                  <p className="text-[#666666]">
                    Modern teknoloji altyapımız ile gayrimenkul sektörüne yeni
                    bir soluk getiriyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
