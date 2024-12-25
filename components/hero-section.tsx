"use client";

import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#E4B7FF] via-[#B384FF] to-[#8C52FF] left-[50%] right-[50%] mx-[-50vw] w-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative min-h-screen flex flex-col justify-center py-20">
        <div className="grid lg:grid-cols-2 items-center gap-12 w-full">
          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="text-white block mb-2">
                Ev sahipleri, kiracılar
              </span>
              <span className="text-white block mb-2">
                ve emlak uzmanlarını
              </span>
              <span className="text-white block mb-2">bir araya getiren</span>
              <span className="text-white block">çözüm ortağı.</span>
            </h1>

            {/* QR Code and Button Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <div className="hidden md:block bg-white p-2 rounded-lg">
                <QRCodeSVG value="https://inkira.app/indir" size={100} />
              </div>
              <div className="w-full sm:w-auto md:hidden">
                <Button
                  variant="secondary"
                  size="default"
                  className="w-auto bg-white text-[#8C52FF] hover:bg-white/90 px-4 py-2 text-sm"
                  onClick={() =>
                    window.open("https://inkira.app/indir", "_blank")
                  }
                >
                  Uygulamaya Git
                </Button>
              </div>
              <p className="text-white text-sm md:text-base  whitespace-nowrap">
                <span className="hidden md:inline">
                  İnkira Uygulamasını İndir
                </span>
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative order-2 w-full">
            <div className="relative w-full aspect-[3/4] max-w-[1280px] mx-auto">
              <div className="absolute inset-0">
                <Image
                  src="/images/10.png"
                  alt="inKiRA Uygulama Ekran Görüntüsü 1"
                  fill
                  className="object-contain transform -translate-x-[10%] -rotate-12 z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
