import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div id="header-title" className="text-2xl font-bold">
        Thomas Barney
      </div>
      <nav className="container mx-auto flex justify-between items-center">
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}