"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Home, User, Building } from 'lucide-react'

const steps = [
  {
    label: "Ev Sahibi",
    title: "Ev sahibi ve kiracı İnkira sistemini kullanmayı kabul eder.",
    icon: Home
  },
  {
    label: "Kiracı",
    title: "Kiracı, İnkira sistemi üzerinden kredi kartı ile 1 yıllık kirayı öder.",
    icon: User
  },
  {
    label: "İnkira",
    title: "İnkira, küçük banka komisyonunu ve piyasa koşullarına göre belirlenen kendi komisyonunu düşer ve kalan parayı ertesi gün toplu olarak ev sahibinin hesabına aktarır.",
    icon: Building
  },
]

function ExpandableCard({ label, title, icon: Icon }: { label: string; title: string; icon: any }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="w-full"
      onHoverStart={() => setIsOpen(true)}
      onHoverEnd={() => setIsOpen(false)}
    >
      <Card className="bg-gradient-to-br from-[#E4B7FF]/5 to-[#8C52FF]/5 border-none shadow-lg overflow-hidden cursor-pointer h-full">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-gradient-to-r from-[#E4B7FF] to-[#8C52FF]">
              <Icon className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-[#8C52FF]">{label}</span>
          </div>
          <motion.div
            className="flex-grow"
            initial={false}
            animate={{ height: isOpen ? 'auto' : '0' }}
          >
            <AnimatePresence>
              {isOpen && (
                <motion.p
                  className="text-[#666666]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {title}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function HowInkiraWorks() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container">
        <motion.h2
          className="text-4xl font-bold text-center text-[#2D2D2D] mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          İnkira nasıl çalışır?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step) => (
            <ExpandableCard 
              key={step.label} 
              label={step.label} 
              title={step.title}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

