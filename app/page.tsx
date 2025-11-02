import Image from "next/image";

export default function Home() {
  return (
    <article className="flex flex-col mx-3 my-20">
      <Image
        src="/image-product-mobile.jpg"
        alt="Product Image"
        width={700}
        height={684}
      />
      <section className="flex flex-col gap-6 bg-white p-8">
        <div className="flex flex-col gap-6">
          <span>PERFUME</span>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
        </div>
        <div>
          <span>$149.99</span>
          <span>$169.99</span>
        </div>
        <button>Add to Cart</button>
      </section>
    </article>
  );
}
