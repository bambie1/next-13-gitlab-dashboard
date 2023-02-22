import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import Link from "next/link";

import "../app/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SWRConfig
        value={{
          refreshInterval: 5000,
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 sm:px-6">
          <header className="p-4 text-center">
            <Link
              href="/"
              className="text-center text-2xl font-bold tracking-tight transition duration-200 hover:text-gray-600 lg:text-4xl"
            >
              Gitlab dashboard
            </Link>
          </header>
          <main className="flex flex-1 flex-col">
            <Component {...pageProps} />
          </main>
          <footer className="p-4 text-center">
            <Link href="#" target="_blank" className="underline">
              Github repo
            </Link>
            <p className="text-gray-500">(c) 2023</p>
          </footer>
        </div>
      </SWRConfig>
    </>
  );
}

export default MyApp;
