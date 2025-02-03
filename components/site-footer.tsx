import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/3.png"
                alt="inKiRA Logo"
                width={200} // Increased from 140
                height={57} // Increased proportionally from 40
                className="h-36 w-auto" // Increased from h-10
              />
            </Link>
            <div id="contact" className="space-y-4">
              <h3 className="text-xl font-semibold text-[#2D2D2D]">
                İletişime Geçin
              </h3>
              <div className="space-y-2">
                <p className="text-[#8C52FF] font-medium">+0212 706 7687</p>
                <Link
                  href="mailto:merhaba@inkira.com"
                  className="block text-[#666666] hover:text-[#8C52FF]"
                >
                  merhaba@inkira.com
                </Link>
                <p className="text-[#666666]">
                  Maslak Mah. Maslak Meydan Sk. Beybi Giz Plaza A Blok
                  <br />
                  Sarıyer/İstanbul
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#2D2D2D]">
                Inkira uygulamasını şimdi indirin!
              </h3>
              <div className="flex flex-wrap gap-4">
                <Link href="#" className="inline-block">
                  <Image
                    src="/images/googleplay.png"
                    alt="Google Play'den İndir"
                    width={270}
                    height={80}
                    className="h-20 w-auto"
                    priority
                  />
                </Link>
                <Link href="#" className="inline-block">
                  <Image
                    src="/images/appstore.png"
                    alt="App Store'dan İndir"
                    width={270}
                    height={80}
                    className="h-20 w-auto"
                    priority
                  />
                </Link>
              </div>
            </div>
            <nav className="space-y-4">
              <div className="flex flex-wrap gap-4">
                {/* <Link
                  href="/ev-sahibi"
                  className="text-[#8C52FF] hover:text-[#8C52FF]/80 text-sm"
                >
                  Mülk Sahibi
                </Link>
                <Link
                  href="/kiraci"
                  className="text-[#8C52FF] hover:text-[#8C52FF]/80 text-sm"
                >
                  Kiracılar
                </Link>
                <Link
                  href="#contact"
                  className="text-[#8C52FF] hover:text-[#8C52FF]/80 text-sm"
                >
                  İletişim
                </Link> */}
                <Link
                  href="/kullanim-sartlari"
                  className="text-[#8C52FF] hover:text-[#8C52FF]/80 text-sm"
                >
                  Kullanım Şartları
                </Link>
                <Link
                  href="/gizlilik-politikasi"
                  className="text-[#8C52FF] hover:text-[#8C52FF]/80 text-sm"
                >
                  Gizlilik Politikası
                </Link>
                <Link
                  href="/faq"
                  className="text-[#8C52FF] hover:text-[#8C52FF]/80 text-sm"
                >
                  FAQ
                </Link>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="text-[#8C52FF] border-[#8C52FF]"
                  >
                    Şartlar ve Koşullar <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/genel-sartlar">Genel Şartlar</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/cerez-politikasi">Çerez Politikası</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
            <div className="flex gap-4">
              <Link href="#" className="text-[#8C52FF] hover:text-[#8C52FF]/80">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#8C52FF] hover:text-[#8C52FF]/80">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#8C52FF] hover:text-[#8C52FF]/80">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#8C52FF] hover:text-[#8C52FF]/80">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#8C52FF] hover:text-[#8C52FF]/80">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-sm text-[#666666]">
          © 2024 Tüm hakları saklıdır Inkira
        </div>
      </div>
    </footer>
  );
}
