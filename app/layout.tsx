import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HabitStreak — Share Streaks with Accountability Partners',
  description: 'Track habits and share progress with chosen accountability partners. Get encouragement or shame notifications to stay on track.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7800ea89-b961-4f4a-8d14-141029aaa88d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
