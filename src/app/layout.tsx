import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 sm:px-6">
        <header className="p-4 text-center">
          <Link
            href="/"
            className="text-center text-2xl font-bold tracking-tight transition duration-200 hover:text-gray-600 lg:text-4xl"
          >
            Gitlab dashboard
          </Link>
        </header>
        <main className="flex flex-1 flex-col">{children}</main>
        <footer className="p-4 text-center">
          <Link
            href="https://github.com/bambie1/next-13-gitlab-dashboard"
            target="_blank"
            className="underline"
          >
            Github repo
          </Link>
          <p className="text-gray-500">(c) 2023</p>
        </footer>
      </body>
    </html>
  );
}
