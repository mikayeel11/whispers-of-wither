// app/layout.tsx

export const metadata = {
  title: 'Whispers of Wither',
  description: 'Welcome to the project.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
