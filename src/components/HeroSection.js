import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      <Image
        src="/banner.jpg"
        alt="Beauty Banner"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center text-white px-4">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">SISTECH Mart</h1>
          <p className="text-lg md:text-xl mb-6">Discover the newest trends in makeup & skincare.</p>
          <button className="bg-white text-pink-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
