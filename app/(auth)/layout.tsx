export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container mx-auto px-4 md:px-6 min-h-dvh flex flex-col items-center justify-center">
      {children}
    </main>
  );
}
