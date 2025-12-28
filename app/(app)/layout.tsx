import { NavBar } from "@/components/navigation/NavBar";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({ headers: await headers() });
  return (
    <>
      <NavBar session={session} />
      <main className="container mx-auto min-h-[calc(100dvh-4rem)] max-md:px-4 py-8">
        {children}
      </main>
    </>
  );
}
