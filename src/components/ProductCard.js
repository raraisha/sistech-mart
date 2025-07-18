import Image from "next/image";

export default function ProductCard({ product, onViewDetail }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border">
      <Image
        src={product.img}
        alt={product.title}
        width={400}
        height={400}
        className="object-cover w-full h-[250px]"
      />
      <div className="p-4">
        <h2 className="font-medium text-gray-800 text-sm mb-1 line-clamp-2">{product.title}</h2>
        <p className="text-pink-500 font-semibold text-sm mb-2">{product.price}</p>

        <button
          onClick={() => onViewDetail(product)}
          className="w-full text-center py-2 text-sm border border-pink-500 text-pink-500 rounded hover:bg-pink-500 hover:text-white transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
