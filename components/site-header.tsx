"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { href: "/ev-sahibi", label: "Ev Sahibi", isScroll: false },
    { href: "/kiraci", label: "Kiracı", isScroll: false },
    { href: "/emlak-uzmani", label: "Emlak Uzmanı", isScroll: false },
    { href: "/#who-we-are", label: "Biz Kimiz", isScroll: true },
    { href: "/#contact", label: "Iletişim", isScroll: true },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: { href: string; isScroll: boolean }
  ) => {
    if (link.isScroll) {
      e.preventDefault();
      if (pathname !== "/") {
        router.push("/");
        setTimeout(() => {
          const sectionId = link.href.replace("/#", "");
          scrollToSection(sectionId);
        }, 100);
      } else {
        const sectionId = link.href.replace("/#", "");
        scrollToSection(sectionId);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 w-full ${
        isScrolled
          ? "bg-gradient-to-r from-[#E4B7FF] to-[#8C52FF] shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex h-20 md:h-24 items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="inKiRA Logo"
              width={350}
              height={100}
              className="h-16 w-auto sm:h-20 md:h-24"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center justify-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="text-white transition-colors hover:text-white/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              className="bg-white text-[#8C52FF] hover:bg-white/90"
              size="lg"
            >
              Başla
            </Button>
            <Button
              className="bg-white text-[#8C52FF] hover:bg-white/90"
              size="lg"
            >
              Giriş Yap
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menüyü aç</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>
                    <Image
                      src="/images/logo.png"
                      alt="inKiRA Logo"
                      width={350}
                      height={100}
                      className="h-20 w-auto"
                      priority
                    />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link)}
                      className="text-[#2D2D2D] transition-colors hover:text-[#2D2D2D]/80 text-lg"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col space-y-4 mt-8">
                  <Button
                    className="bg-gradient-to-r from-[#E4B7FF] to-[#8C52FF] text-white hover:opacity-90 w-full"
                    size="lg"
                  >
                    Başla
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-[#E4B7FF] to-[#8C52FF] text-white hover:opacity-90 w-full"
                    size="lg"
                  >
                    Giriş Yap
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
