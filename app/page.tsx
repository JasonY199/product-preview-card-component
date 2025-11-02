import Image from "next/image";

export default function Home() {
  return (
    <article className="flex flex-col mx-3 my-20">
      <Image
        src="/image-product-mobile.jpg"
        alt="Product Image"
        width={700}
        height={684}
        className="rounded-t-lg"
      />
      <section className="flex flex-col gap-6 bg-white p-8">
        <div className="flex flex-col gap-6">
          <span className="text-preset-4">PERFUME</span>
          <h1 className="text-preset-1 text-black">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="text-preset-3">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-preset-1 text-green-500">$149.99</span>
          <span className="text-preset-5 line-through">$169.99</span>
        </div>
        <button>Add to Cart</button>
      </section>
    </article>
  );
}
