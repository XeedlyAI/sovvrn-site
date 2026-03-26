'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      locations: formData.get('locations'),
      message: formData.get('message'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text-card-title">
          Full Name
        </label>
        <Input
          id="name"
          name="name"
          required
          placeholder="Your name"
          className="h-11 border-border-subtle bg-background text-text-heading placeholder:text-text-muted"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text-card-title">
          Work Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="h-11 border-border-subtle bg-background text-text-heading placeholder:text-text-muted"
        />
      </div>

      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-text-card-title">
          Company
        </label>
        <Input
          id="company"
          name="company"
          placeholder="Your restaurant group or company"
          className="h-11 border-border-subtle bg-background text-text-heading placeholder:text-text-muted"
        />
      </div>

      <div>
        <label htmlFor="locations" className="mb-1.5 block text-sm font-medium text-text-card-title">
          Number of Locations
        </label>
        <Input
          id="locations"
          name="locations"
          placeholder="e.g. 5"
          className="h-11 border-border-subtle bg-background text-text-heading placeholder:text-text-muted"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text-card-title">
          Message (optional)
        </label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your operation or ask a question"
          className="border-border-subtle bg-background text-text-heading placeholder:text-text-muted"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full rounded-lg bg-accent-blue px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-110 hover:shadow-md disabled:opacity-50"
      >
        {status === 'submitting' ? 'Sending...' : 'Request a Demo'}
      </button>

      {status === 'success' && (
        <p className="text-sm text-success">Thank you! We will be in touch within one business day.</p>
      )}
      {status === 'error' && (
        <p className="text-sm text-warning">Something went wrong. Please try again or email us directly.</p>
      )}
    </form>
  )
}
