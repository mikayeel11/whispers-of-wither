// app/layout.tsx
export const metadata = {
  title: 'Whispers of Wither',
  description: 'Your site description here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
