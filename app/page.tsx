import Image from "next/image";

export default function Home() {
  return (
    <article className="flex flex-col mx-3 my-20 md:flex-row md:max-w-[600px] md:mx-0 md:my-0">
      <Image
        src="/image-product-mobile.jpg"
        alt="Product Image"
        width={700}
        height={684}
        className="rounded-t-lg object-cover md:hidden w-full h-auto"
      />
      <Image
        src="/image-product-desktop.jpg"
        alt="Product Image"
        width={600}
        height={900}
        className="hidden md:block rounded-l-lg md:flex-1"
      />
      <section className="flex flex-col gap-6 bg-white p-8 rounded-b-lg md:flex-1 md:rounded-r-lg md:rounded-bl-none">
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
        <button className="bg-green-500 text-preset-2 text-white flex gap-2 justify-center items-center rounded-lg py-4 px-8">
          <Image src="/icon-cart.svg" alt="" width={18} height={18} />
          <span>Add to Cart</span>
        </button>
      </section>
    </article>
  );
}
