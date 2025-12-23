"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

export function ComingSoonPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 90)

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setEmail("")
        setIsSubmitted(false)
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#3b4e4a] via-[#2d3d39] to-[#3b4e4a] animate-gradient" />

      <div className="absolute inset-0">
        <Image
          src="/luxury-hotel-lobby-chandelier.png"
          alt="Luxury Hotel Lobby"
          fill
          className="object-cover opacity-30 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3b4e4a] via-transparent to-[#3b4e4a]/80" />
      </div>

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#eed4b9]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#eed4b9]/5 rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Logo Section */}
        <header className="pt-12 px-8 md:px-16">
          <div
            className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 border-2 border-[#eed4b9]/60 bg-gradient-to-br from-[#eed4b9]/20 to-transparent flex items-center justify-center backdrop-blur-sm overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Velora logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <h1 className="font-serif text-[#eed4b9] text-2xl font-light tracking-wider">VELORA</h1>
                <p className="text-[#eed4b9]/60 text-xs tracking-[0.3em] uppercase">Hotel</p>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-8 md:px-16 py-8">
          <div className="max-w-6xl w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-12">
                <div
                  className={`space-y-8 transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Sparkles className="w-5 h-5 text-[#eed4b9]" />
                      <p className="text-[#eed4b9]/70 text-sm tracking-[0.3em] uppercase font-light">Arriving Soon</p>
                    </div>
                    <h2 className="font-serif text-5xl md:text-7xl text-[#eed4b9] font-light leading-tight">
                      A New Era of
                      <br />
                      <span className="bg-gradient-to-r from-[#eed4b9] via-[#f5e5cd] to-[#eed4b9] bg-clip-text text-transparent animate-gradient">
                        Luxury
                      </span>
                    </h2>
                  </div>
                  <p className="text-[#eed4b9]/80 text-lg max-w-xl font-light leading-relaxed">
                    Experience the future of hospitality. Velora Hotel is redefining elegance with architectural
                    innovation, curated experiences, and unparalleled service.
                  </p>
                </div>

                {/* Countdown Timer */}
                <div
                  className={`transition-all duration-1000 delay-400 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { value: timeLeft.days, label: "Days" },
                      { value: timeLeft.hours, label: "Hours" },
                      { value: timeLeft.minutes, label: "Minutes" },
                      { value: timeLeft.seconds, label: "Seconds" },
                    ].map((item, index) => (
                      <div key={item.label} className="relative group" style={{ animationDelay: `${index * 100}ms` }}>
                        <div className="relative border border-[#eed4b9]/30 bg-gradient-to-br from-[#eed4b9]/10 to-transparent backdrop-blur-md p-4 transition-all duration-300 group-hover:border-[#eed4b9]/50 group-hover:from-[#eed4b9]/20">
                          <span className="font-serif text-3xl md:text-4xl text-[#eed4b9] font-light tabular-nums block">
                            {String(item.value).padStart(2, "0")}
                          </span>
                          <span className="text-[#eed4b9]/60 text-xs tracking-widest uppercase mt-1 block">
                            {item.label}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Email Signup */}
                <div
                  className={`transition-all duration-1000 delay-600 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#eed4b9]/40" />
                      <p className="text-[#eed4b9]/70 text-xs tracking-[0.3em] uppercase font-light">
                        Be the First to Know
                      </p>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                      <div className="relative flex-1">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#eed4b9]/50" />
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-12 h-12 bg-[#eed4b9]/10 backdrop-blur-md border-[#eed4b9]/30 text-[#eed4b9] placeholder:text-[#eed4b9]/50 focus:border-[#eed4b9]/60 transition-all"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="h-12 px-8 bg-gradient-to-r from-[#eed4b9] to-[#d4c4a9] text-[#3b4e4a] hover:from-[#f5e5cd] hover:to-[#eed4b9] font-light tracking-wider group transition-all shadow-lg shadow-[#eed4b9]/20"
                        disabled={isSubmitted}
                      >
                        {isSubmitted ? "Subscribed" : "Notify Me"}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                    {isSubmitted && (
                      <p className="text-[#eed4b9]/80 text-sm font-light">Thank you. We will keep you updated.</p>
                    )}
                  </div>
                </div>
              </div>

              <div
                className={`relative transition-all duration-1000 delay-400 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"} hidden lg:block`}
              >
                <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-[#eed4b9]/30">
                  <Image
                    src="/elegant-hotel-room-with-luxury-bedding.jpg"
                    alt="Luxury Hotel Room"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3b4e4a] via-transparent to-transparent" />
                  {/* Decorative frame corners */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#eed4b9]/60" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#eed4b9]/60" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#eed4b9]/60" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#eed4b9]/60" />
                </div>
                {/* Accent gradient glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#eed4b9]/20 to-transparent blur-2xl -z-10" />
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="pb-12 px-8 md:px-16">
          <div
            className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all duration-1000 delay-800 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <p className="text-[#eed4b9]/50 text-sm font-light">2025 Velora Hotel. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-[#eed4b9]/50 hover:text-[#eed4b9] text-sm font-light transition-colors">
                Instagram
              </a>
              <a href="#" className="text-[#eed4b9]/50 hover:text-[#eed4b9] text-sm font-light transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-[#eed4b9]/50 hover:text-[#eed4b9] text-sm font-light transition-colors">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
