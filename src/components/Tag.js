export default function Tag({ label, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 rounded-full text-sm font-medium border transition-all ${
        active
          ? "bg-pink-500 text-white border-pink-500"
          : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  );
}
