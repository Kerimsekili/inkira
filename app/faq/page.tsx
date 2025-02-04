"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const faqs = [
  {
    question: "İnkira Nedir?",
    answer: [
      "İnkira, kiracılar, kiraya verenler ve emlak danışmanları için yenilikçi bir pazar yeri sunarak kira ödeme sürecini dijitalleştiren bir fintech platformudur.",
      "Kiraya verenler, taşınmazlarını listeleyerek yıllık kira gelirlerini peşin olarak alabilir.",
      "Kiracılar, uygun ödeme koşullarıyla konut kiralama avantajından faydalanabilir.",
      "Emlak danışmanları için ek gelir fırsatları sunar.",
      "İnkira, bir ödeme sistemi değil, bankalar ve lisanslı ödeme kurumlarıyla çalışan güvenilir bir platformdur.",
    ],
  },
  {
    question: "İnkira Nasıl Çalışır?",
    answer: [
      "Kiraya veren veya emlak danışmanı, taşınmaz ilanını inkira.com.tr'ye ekler.",
      "Kiracı, platformdan beğendiği evi seçerek kiraya verenle iletişime geçer.",
      "Kira sözleşmesi taraflarca imzalanır.",
      "Kiracı, kira bedelini kredi kartıyla 12 taksit halinde öder.",
      "Kiraya veren, bir iş günü içinde yıllık kira bedelini peşin olarak alır.",
    ],
  },
  {
    question:
      "İnkira ile kredi kartı bilgilerimin korunduğundan nasıl emin olabilirim?",
    answer: [
      "İnkira, Türk bankacılık sistemi altyapısını ve 3D güvenli ödeme sistemini kullanmaktadır.",
    ],
  },
  {
    question: "İnkira'da kredi kartı bilgilerim tutulur mu?",
    answer: ["Hayır. İnkira kredi kartı bilgilerinizi saklamaz."],
  },
  {
    question: "İnkira sistemini kullanmak için bir üst limit var mıdır?",
    answer: [
      "İnkira sistemini kullanacak bir kişi birden çok evi kiraya verebilir ya da birden çok taşınmazı kiralayabilir. Herhangi bir üst limit bulunmamaktadır.",
    ],
  },
  {
    question: "İnkira ile ev kiralamanın normal yöntemlerden farkı nedir?",
    answer: [
      "İnkira sistemi üzerinden gerçekleştirilen işlemler de kiracı ve kiraya veren arasındaki ilişki bağlamında Türk Borçlar Kanunu hükümlerine tabiidir. İnkira'nın alışılagelmiş kiralama yöntemlerinden farkı, İnkira'nın kiraya verenin kira bedelini toplu bir şekilde elde etmesine olanak tanıyan bir pazar yeri / fintech uygulaması olmasıdır.",
    ],
  },
  {
    question: "Ev sahibi kirasını ne zaman alır?",
    answer: [
      "Kiraya veren, kiracının kira bedeli ödemesini İnkira üzerinden yapmasını müteakip en geç bir (1) iş günü içinde almış olur.",
    ],
  },
  {
    question: "Kiracı evden erken çıkmak isterse ne olur?",
    answer: [
      "Kiracının, kira süresi bitimini beklemeden taşınmazı erken tahliye etmek istemesi durumunda taraflar, mümkünse konuyu sulh ile çözmelidir.",
      "Bu noktada uygulama, taşınmazın tahliyesini müteakip tekrar kiraya verilebileceği süre kadarki kira bedelinden erken tahliye eden kiracının sorumlu olması, kiraya verenin ise mümkün olan en kısa zamanda içerisinde taşınmaza yeni kiracı bulunmasını sağlaması yönünde ilerlemektedir.",
      "Bu hususta Türk Borçlar Kanunu hükümleri, içtihatlar ve yerel adet geçerli olup, İnkira bu ve benzeri anlaşmazlıklarda taraf değildir.",
    ],
  },
  {
    question: "Yıllık kira artış tutarı nasıl hesaplanır?",
    answer: [
      "Yıllık kira artış oranlarında öncelikle tarafların mutabakatına bakılmalı, elbette bu mutabakat için Türk Borçlar Kanunu hükümlerinin sınırları içerisinde kalınmasına dikkat edilmelidir.",
      "Bu çerçevede uygulamada, genellikle kiraya verenlerin kira sözleşmelerine Türk Borçlar Kanunu hükümlerinin üst sınırını teşkil eden, bir önceki kira yılına ait tüketici fiyat endeksindeki on iki aylık ortalamalar oranındaki artış oranını koydukları görülmektedir.",
      "Bu oran ve bunun altında belirlenecek olan oranlar geçerlidir.",
    ],
  },
  {
    question: "Kiracılardan komisyon kesilir mi?",
    answer: ["İnkira, kiracıdan herhangi bir komisyon tahsil etmez."],
  },
  {
    question: "Banka ve İnkira ev sahiplerinden ne kadar komisyon keser?",
    answer: [
      "Bankanın kestiği komisyon miktarı her ay yapılan Para Piyasası Kurulu toplantılarında belirlenir.",
      "TCMB sayfasında yayınlanan rakamlar doğrultusunda belirlenen oranlarda kesinti yapılır. Bu linkten ilgili rakamlara erişebilirsiniz.",
      "İnkira komisyon tutarı %2.5 olarak belirlenmiştir. Yapılan ödemelerden bu oranda ev sahibinden kesinti yapılmaktadır.",
    ],
  },
  {
    question: "İnkira sisteminde emlakçı ne kadar gelir kazanmaktadır?",
    answer: [
      "Emlak danışmanı, normal koşullarda gayrimenkul kiralama işinden kazanacağı emlak komisyonu tutarının yanı sıra; ödemenin İnkira aracılığı ile gerçekleştirilmesi halinde sistem tarafından tahsil edilecek olan %2.5'lik komisyon tutarının beşte birini yani yıllık kira bedelinin %0.5'ini ödeme olarak alacaktır.",
      "Yıllık kira bedellerinin bu şekilde ödenmeye devam ettiği her yıl için emlak danışmanı, bu oran üzerinden hesaplanacak olan bedeli almaya devam edecektir.",
      "Bu ödeme, kiraya veren veya kiracı tarafından yapılan bir ödeme olmayıp, doğrudan İnkira tarafından emlak danışmanına ödenen bir bedeldir.",
    ],
  },
  {
    question: "İnkira bir ödeme sistemi midir?",
    answer: [
      "İnkira, kiralık taşınmazların listelendiği bir pazar yeri uygulamasıdır.",
      "İnkira pazar yeri olmasının yanı sıra, kiraya vereni doğrudan temsilen kiracının ödediği kira bedellerini tahsil eder. Kiracının İnkira'ya kredi kartı bilgilerini girip ödemeyi yapmasıyla birlikte, kiracı kira bedelini ödeme borcundan kurtulmuş olur.",
      "Dolayısıyla İnkira bir ödeme sistemi ya da ödeme hizmetleri sağlayıcısı değildir.",
    ],
  },
  {
    question: "Kiracının hayatını kaybetmesi durumunda ne olur?",
    answer: [
      "Bu konuda Borçlar Kanunu hükümleri geçerlidir. İnkira bu hususta hukuki bir taraf değildir.",
    ],
  },
  {
    question:
      "Kredi kartı bilgilerim çalınarak, bahse konu bilgilerle İnkira üzerinden haberim olmadan işlem yapılmış. Bu durumda nasıl bir yol izlemeliyim?",
    answer: [
      "İnkira'da işlemler 3D Secure sistemi ile yapılır. Ancak buna rağmen, bu güvenlik aşaması da atlatılıp işlem yapılmışsa, bu durumda bankanıza kredi kartınıza ilişkin kayıp/çalıntı kart bildirimi yapmanız gerekir.",
      "Bankanızın yapacağı incelemeden sonra yapılan ödeme bankanızın şikayetinizi haklı bulması durumunda tarafınıza iade edilecektir.",
      "İnkira, bu durumda sistemdeki ödemenizi iptal eder ve ev sahibine kiracısının başka birisinin kredi kartı ile işlem yaptığını bildirir.",
      "İnkira, sistemin kötüye kullanılması nedeniyle kötüye kullanan kişiye karşı yasal haklarını saklı tutar.",
    ],
  },
  {
    question:
      "Haberim ve bilgim olmadan, benim kredi kartımla İnkira sistemi üzerinden ev kiralama işlemi gerçekleştirilmiş. Bu durumda ne yapmam gerekir?",
    answer: [
      "Öncelikle, ivedilikle bankanıza başvurmanız ve kayıp/çalıntı kart bildiriminde bulunmanız gerekmektedir.",
      "Bankanızın talebinizi ve itirazınızı haklı bulması halinde paranız kredi kartınıza iade olunacaktır.",
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-[#E4B7FF]/30 last:border-none"
      initial={false}
    >
      <button
        className="flex justify-between items-center w-full py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-semibold text-[#2D2D2D]">{question}</span>
        <span className="text-[#8C52FF] ml-4">
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="pb-6 text-[#666666] text-lg list-disc pl-6">
              {answer.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <main className="px-6 sm:px-8 lg:px-10">
        <SiteHeader />
        <section className="py-20 md:py-32">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#E4B7FF] to-[#8C52FF] text-transparent bg-clip-text">
                Sıkça Sorulan Sorular
              </h1>
              <p className="text-[#666666] text-lg">
                İnkira hakkında merak ettiğiniz tüm sorular ve yanıtları
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </section>
        <SiteFooter />
      </main>
    </div>
  );
}
