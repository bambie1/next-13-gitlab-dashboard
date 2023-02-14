import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center flex-1 flex flex-col justify-center">
      <p className="lg:text-2xl mb-5 text-lg font-medium">
        A Next.js 13 demo with data fetching in RSCs
      </p>

      <div>
        <p className="tracking-wide lg:text-xl">Nothing to see here</p>
        <p className="text-gray-600">Just an exceptionally empty home page</p>

        <Link
          href="/dashboard"
          className="bg-black lg:text-xl font-medium text-white py-4 mt-6 px-6 rounded-md inline-flex"
        >
          View my dashboard
        </Link>
      </div>
    </div>
  );
}
