"use client"

import { motion } from 'framer-motion'

export default function LandlordPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#E4B7FF] via-[#B384FF] to-[#8C52FF] flex items-center justify-center">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold text-white text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Çok Yakında
      </motion.h1>
    </div>
  )
}

