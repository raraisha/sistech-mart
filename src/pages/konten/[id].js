import { useRouter } from "next/router";
import contents from "@/data/contents";
import Layout from "@/components/Layout";

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;

  const product = contents.find(p => p.id === parseInt(id));

  if (!product) return <Layout><p>Loading...</p></Layout>;

  return (
    <Layout>
      <img src={product.img} alt={product.title} className="w-full max-w-md mx-auto rounded-lg mb-6" />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-pink-500 font-semibold">{product.price}</p>
      <p className="mt-4 text-gray-600">{product.summary}</p>
    </Layout>
  );
}
