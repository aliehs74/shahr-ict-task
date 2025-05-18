import Header from "@/components/organisms/Header";
import ProductsColumn from "@/components/organisms/ProductsColumn";

export default function Home() {

  return (
    <main className="bg-gray-50 dark:bg-gray-900 ">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4 md:gap-8 py-5 px-10   ">

        <ProductsColumn />
        <ProductsColumn />
        <ProductsColumn />

      </div>
    </main>
  );
}