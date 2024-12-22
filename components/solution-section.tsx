import { Card, CardContent } from "@/components/ui/card";
import { Check, Home, Users, Building2 } from "lucide-react";

export function SolutionSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center text-[#2D2D2D] mb-16">
          Tüm paydaşlar için daha iyi bir çözüm
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-[#E4B7FF]/5 to-[#8C52FF]/5 border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-r from-[#E4B7FF] to-[#8C52FF] rounded-lg p-2">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2D2D2D]">
                  Mülk Sahipleri
                </h3>
              </div>
              <p className="text-[#666666] mb-6">
                İnkira sayesinde kira gelirinizin yüksek enflasyon karşısında
                değerini koruyacaksınız.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#8C52FF] mt-0.5" />
                  <span className="text-[#666666]">
                    İnkira sayesinde alacağınız toplu ödeme ile paranızı başka
                    yatırım ortamlarında değerlendirebilirsiniz.
                  </span>
                </li>
                <li className="flex items-start gap-2">
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
                </li>
              </ul>
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
                Ağrısız kiraya merhaba deyin! İnkira ile bir yıllık kiranı kredi
                kartı ile hiçbir komisyon ödemeden 12 taksitle ödeyebilirsin.
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
                  Çözümler
                </h3>
              </div>
              <p className="text-[#666666]">
                Inkira, ev sahiplerinin bir yıllık kira gelirlerini enflasyon
                karşısında erimeden peşin almalarına imkan tanıyan bir fintech
                uygulamasıdır. Kiracılar da inkira sayesinde evden çıkarılma ya
                da hukuksuz kira artışı baskısına maruz kalmadan evlerinde
                güvenle ikamet edebilirler
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
