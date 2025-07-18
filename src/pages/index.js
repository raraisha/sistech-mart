import { useState } from "react";
import contents from "@/data/contents";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import ProductGrid from "@/components/ProductGrid";
import Tag from "@/components/Tag";
import Modal from "@/components/Modal";

export default function Home() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleFilter = (tag) => setSelectedTag(tag);

  const filteredContents =
    selectedTag === "All"
      ? contents
      : contents.filter((item) => item.tag === selectedTag);

  const uniqueTags = ["All", ...new Set(contents.map((item) => item.tag))];

  return (
    <Layout>
      <HeroBanner />

      <section id="products" className="bg-[#fff8f9] py-14 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">New Arrivals</h2>

        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {uniqueTags.map((tag, idx) => (
            <Tag key={idx} label={tag} onClick={() => handleFilter(tag)} active={selectedTag === tag} />
          ))}
        </div>

        <ProductGrid products={filteredContents} onViewDetail={setSelectedProduct} />
      </section>

      <Modal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </Layout>
  );
}
