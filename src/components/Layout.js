export default function Layout({ children }) {
  const handleScrollToProducts = () => {
    const section = document.getElementById("products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <header className="flex justify-between items-center py-4 px-8 bg-white shadow sticky top-0 z-50">
        <div className="text-pink-500 font-bold text-lg">SISTECH MART</div>
        <nav className="flex gap-5 text-sm text-gray-600">
          <button onClick={handleScrollToProducts} className="hover:text-pink-500 transition">Shop</button>
          <button className="hover:text-pink-500 transition">Contact</button>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="text-center text-xs text-gray-400 py-4 mt-10">
  © 2025 SISTECH MART. Made with 💖 by Raisha Afiqah for your flawless look.
</footer>

    </div>
  );
}
