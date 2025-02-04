import { Card, CardContent } from "@/components/ui/card";
import { Home, Users, Building2 } from "lucide-react";

export function SolutionSection() {
  return (
    <section className="py-5 bg-white mt-16">
      <div className="container">
        <div className="flex justify-center">
          <img
            src="/images/3.png"
            alt="Logo"
            className="w-96 h-96 object-contain"
          />
        </div>

        <div className="grid grid-cols-3 gap-12 mb-8 px-8">
          <img
            src="/images/7.png"
            alt="Ev Sahipleri"
            className="w-4/5 mx-auto"
          />
          <img src="/images/8.png" alt="Kiracılar" className="w-4/5 mx-auto" />
          <img src="/images/11.png" alt="Çözümler" className="w-4/5 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-[#E4B7FF]/5 to-[#8C52FF]/5 border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-r from-[#E4B7FF] to-[#8C52FF] rounded-lg p-2">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2D2D2D]">
                  Ev Sahipleri
                </h3>
              </div>
              <p className="text-[#666666] mb-6">
                İNKİRA, kiracıların ödemelerini Kredi Kartı ile PEŞİN olarak
                kabul eder ve ev sahiplerine toplu ödeme yapar. Bu sistem, hem
                pratik hem de güvenilirdir
              </p>
              <p className="text-[#666666] mb-6">
                Geleceğin kira yönetimi sistemi olan İNKİRA ile siz de kira
                gelirinizi güvence altına alın. Hem zamanınızı hem de finansal
                gücünüzü kontrol edin.
              </p>
              {/* <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#8C52FF] mt-0.5" />
                  <span className="text-[#666666]">
                    İnkira sayesinde, yıllık kiranızı, inkiranın küçük hizmet
                    bedeli dışında, neredeyse peşin alacaksınız.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#8C52FF] mt-0.5" />
                  <span className="text-[#666666]">
                    Tam kapsamlı mülk yönetimi deneyimi: Kiralama işlemlerini
                    baştan sonra biz halledeceğiz.
                  </span>
                </li> */}
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#E4B7FF]/5 to-[#8C52FF]/5 border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-r from-[#E4B7FF] to-[#8C52FF] rounded-lg p-2">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2D2D2D]">
                  Kiracılar
                </h3>
              </div>
              <p className="text-[#666666] mb-6">
                İNKİRA ile kira ödemeleriniz artık hem kolay hem de kazançlı.
                Daha fazla esneklik, daha az stres ve daha çok fayda için
                İNKİRA’yı tercih edin!
              </p>
              <p className="text-[#666666] mb-6">
                Kiracılar, artık ödemelerini ev sahibine değil, doğrudan bankaya
                yapar. Bu sistem, kiracıların ödeme stresini azaltırken yeni
                avantajlar sunar.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#E4B7FF]/5 to-[#8C52FF]/5 border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-r from-[#E4B7FF] to-[#8C52FF] rounded-lg p-2">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2D2D2D]">
                  Emlakçılar
                </h3>
              </div>
              <p className="text-[#666666] mb-6">
                İNKİRA ile emlakçılıkta yeni bir döneme adım atın. Kümülatif
                kazanç modelini benimseyin ve her yıl büyüyen düzenli bir gelir
                elde edin.
              </p>
              <p className="text-[#666666] mb-6">
                Bu yenilikçi platform sayesinde emlakçılar, ev sahibi ve
                kiracıları İNKİRA üzerinden ödeme yapmaya ikna ettiklerinde, her
                ödeme başına komisyon almaya devam ederler.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
