import Image from "next/image";

export default function HeroBanner() {
  const handleScroll = () => {
    const section = document.getElementById("products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      <Image
        src="/banner.jpg"
        alt="Beauty Banner"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
        <span className="bg-pink-300 text-pink-900 px-3 py-1 rounded-full text-xs mb-3">New Collection</span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Soft Beauty Collection</h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl">Discover the newest trends in makeup & skincare.</p>
        <button
          onClick={handleScroll}
          className="bg-gradient-to-r from-pink-500 to-pink-400 text-white px-8 py-3 rounded-full hover:brightness-110 transition"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}
