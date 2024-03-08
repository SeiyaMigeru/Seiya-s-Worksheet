import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-around pb-40">
      <div className="text-center">
        <h1 className="text-4xl font-bold">My Worksheet</h1>
      </div>
      <div className="flex flex-col items-center justify-center mt-8">
        <h1 className="text-xl font-semibold mb-4">Activity 1</h1>
        <div className="flex flex-wrap justify-center">
          <Link href="/activity1.1">
            <button className="my-button">1</button>
          </Link>
          <Link href="/activity1.2">
            <button className="my-button">2</button>
          </Link>
          <Link href="/activity1.3">
            <button className="my-button">3</button>
          </Link>
          <Link href="/activity1.4">
            <button className="my-button">4</button>
          </Link>
          <Link href="/activity1.5">
            <button className="my-button">5</button>
          </Link>
          <Link href="/activity1.6">
            <button className="my-button">6</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
