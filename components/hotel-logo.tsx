import Image from "next/image"
import Link from "next/link"

interface HotelLogoProps {
  className?: string
  showText?: boolean
  size?: "small" | "medium" | "large"
}

export function HotelLogo({ className = "", showText = true, size = "medium" }: HotelLogoProps) {
  const sizes = {
    small: { width: 100, height: 50 },
    medium: { width: 150, height: 75 },
    large: { width: 200, height: 100 },
  }

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="relative">
      <Image
        src="/images/logo.png"
        alt="Hotel Del Ángel Logo"
        width={sizes[size].width}
        height={sizes[size].height}
        priority
        className="object-contain"
      />
      </div>
      {showText && <span className="sr-only">Hotel Del Ángel</span>}
    </Link>
  )
}

