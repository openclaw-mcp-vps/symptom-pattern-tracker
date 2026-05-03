import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Symptom Pattern Tracker — Track health symptoms and find patterns',
  description: 'Daily symptom logging with weather, food, sleep, and activity correlation to identify triggers and patterns over time.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="245faa54-2018-4266-af29-759a59cf8111"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
