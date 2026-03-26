'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface StatCounterProps {
  value: string
  label: string
  prefix?: string
  suffix?: string
}

export function StatCounter({ value, label, prefix = '', suffix = '' }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    if (!isInView) return

    const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10)
    if (isNaN(numericValue)) {
      setDisplayValue(value)
      return
    }

    const duration = 1500
    const steps = 40
    const stepDuration = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += 1
      const progress = current / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.round(eased * numericValue)

      if (numericValue >= 1000) {
        setDisplayValue(currentValue.toLocaleString())
      } else {
        setDisplayValue(currentValue.toString())
      }

      if (current >= steps) {
        clearInterval(timer)
        setDisplayValue(value)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <div ref={ref} className="text-center">
      <motion.p
        className="font-mono text-4xl font-bold tracking-tight text-accent-gold md:text-5xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {prefix}{displayValue}{suffix}
      </motion.p>
      <p className="mt-2 text-sm font-medium text-text-secondary">{label}</p>
    </div>
  )
}
