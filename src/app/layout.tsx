import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col max-w-6xl mx-auto px-4 sm:px-6">
        <header className="text-center p-4">
          <Link
            href="/"
            className="font-bold tracking-tight text-center text-2xl lg:text-4xl"
          >
            Gitlab dashboard
          </Link>
        </header>
        <main className="flex-1 flex flex-col">{children}</main>
        <footer className="text-center p-4">
          <Link href="#" target="_blank" className="underline">
            Github repo
          </Link>
          <p className="text-gray-500">(c) 2023</p>
        </footer>
      </body>
    </html>
  );
}
