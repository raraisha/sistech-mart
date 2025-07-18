import Image from "next/image";

export default function Modal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-[90%] max-w-sm relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">✕</button>
        <Image
          src={product.img}
          width={400}
          height={400}
          alt={product.title}
          className="rounded-lg w-full object-cover mb-4"
        />
        <h2 className="font-semibold text-lg text-gray-800">{product.title}</h2>
        <p className="text-pink-500 font-bold mt-1">{product.price}</p>
        <p className="text-gray-600 mt-2 text-sm">{product.summary}</p>
      </div>
    </div>
  );
}
