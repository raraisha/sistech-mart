import ProductCard from "./ProductCard";

export default function ProductGrid({ products, onViewDetail }) {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onViewDetail={onViewDetail} />
      ))}
    </div>
  );
}
