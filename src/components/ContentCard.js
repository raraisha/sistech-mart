import Image from "next/image";

export default function ContentCard({ content, onViewDetail }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition-all border border-gray-200">
      <Image
        src={content.img}
        width={300}
        height={300}
        alt={content.title}
        className="rounded-lg object-cover w-full"
      />
      <h2 className="text-md font-semibold mt-4 text-gray-900">{content.title}</h2>
      <p className="text-pink-500 font-bold mt-1">{content.price}</p>
      <p className="text-sm text-gray-500 mt-1">{content.summary}</p>

      <button
        onClick={() => onViewDetail(content)}
        className="mt-3 inline-block px-4 py-2 text-sm bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
      >
        View Details
      </button>
    </div>
  );
}
