import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <h1 className="text-xl font-bold text-pink-500">Sistech Mart</h1>
      <nav className="space-x-6 text-gray-700 font-medium">
        <Link href="/">Home</Link>
        <Link href="/">Shop</Link>
        <Link href="/">Contact</Link>
      </nav>
    </header>
  );
}
