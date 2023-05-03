/* eslint-disable react/no-unescaped-entities */
import Hero from '@/components/Hero'
import StrategicSection from '@/components/StrategicSection'
import ApproachSection from '@/components/ApproachSection'
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Hero />
      <StrategicSection />
      <ApproachSection />
      {/* Brand identity & web design: slider section */}
    </div>
  )
}
