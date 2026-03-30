'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ScreenshotFrameProps {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
  perspective?: boolean
  className?: string
}

export function ScreenshotFrame({
  src,
  alt,
  width,
  height,
  priority = false,
  perspective = false,
  className,
}: ScreenshotFrameProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl border border-border-subtle/80',
        'shadow-[0_20px_60px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.04)]',
        perspective && 'md:[transform:perspective(1200px)_rotateX(4deg)]',
        className
      )}
    >
      {/* Browser chrome bar */}
      <div className="flex h-7 items-center gap-1.5 bg-[#f0f0f0] px-3 md:h-8">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
      </div>
      {/* Screenshot */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={90}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        className="block w-full"
      />
    </div>
  )
}
