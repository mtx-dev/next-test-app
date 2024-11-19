import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Next.js App</h1>
        <div>
          <Link href="/" className="mr-4 hover:underline">
            Home
          </Link>
        </div>
      </nav>
    </header>
  );
}
