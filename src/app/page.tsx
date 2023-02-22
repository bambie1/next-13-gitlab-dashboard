import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col justify-center text-center">
      <p className="mb-5 text-lg font-medium lg:text-2xl">
        A Next.js 13 demo with data fetching in RSCs
      </p>

      <div>
        <p className="tracking-wide lg:text-xl">Nothing to see here</p>
        <p className="text-gray-600">Just an exceptionally empty home page</p>

        <Link
          href="/dashboard"
          className="mt-6 inline-flex rounded-md bg-black py-4 px-6 font-medium text-white transition duration-200 hover:bg-gray-600 lg:text-xl"
        >
          View my dashboard
        </Link>
        <Link
          href="ssr-dashboard"
          className="mt-4 block underline transition duration-200 hover:text-gray-600 hover:no-underline lg:text-xl"
        >
          SSR Dashboard
        </Link>
      </div>
    </div>
  );
}
