export default function CategoryGrid() {
  const categories = ["Foundation", "Lip Velvet", "Blush", "Skincare", "Accessories"];

  return (
    <div className="flex justify-center gap-4 mt-10 flex-wrap">
      {categories.map((cat, idx) => (
        <button
          key={idx}
          className="bg-white px-5 py-2 rounded-full border text-gray-700 hover:bg-primary hover:text-white transition shadow"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
