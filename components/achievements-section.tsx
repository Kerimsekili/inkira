import { Card, CardContent } from "@/components/ui/card"
import { Award } from 'lucide-react'
import Image from "next/image"

export function AchievementsSection() {
  const achievements = [
    {
      logo: "/placeholder.svg?height=80&width=200",
      title: "Recognized as Future100 Company for 2023",
      logoAlt: "Future 100 Logo"
    },
    {
      logo: "/placeholder.svg?height=80&width=200",
      title: "Awarded Dubai Land Department's REES Initiative 2024",
      logoAlt: "Dubai Land Department Logo"
    },
    {
      logo: "/placeholder.svg?height=80&width=200",
      title: "Property investment solution of the year",
      subtitle: "Tech Innovation Awards 2022",
      logoAlt: "Tech Innovation Awards Logo"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2D2D2D] mb-16">
          Başarılarımız
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-[#F2EEFF] text-[#2D2D2D] border-none relative overflow-hidden shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="absolute top-4 right-4">
                  <Award className="h-6 w-6 text-[#8C72AB]" />
                </div>
                <div className="h-20 relative">
                  <Image
                    src={achievement.logo}
                    alt={achievement.logoAlt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{achievement.title}</h3>
                  {achievement.subtitle && (
                    <p className="text-[#A6A6A6] text-sm">{achievement.subtitle}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

