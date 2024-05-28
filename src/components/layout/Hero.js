import Image from 'next/image';

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="relative flex justify-center md:justify-end md:order-last">
        <div className="min-h-80 md:h-auto relative w-full max-w-md flex justify-center">
          <div className="w-3/4">
            <Image
              src={'/pngtree-pizza-pepperoni-food-png-image_11483543 (1).png'}
              layout='fill'
              objectFit='contain'
              alt='Pizza'
            />
          </div>
        </div>
      </div>
      <div className="text-center md:text-left md:order-first">
        <h1 className="text-4xl font-semibold">
          Qualquer rolê é mais divertido se aliado com uma saborosa pizza.
        </h1>
        <p className="my-4 text-gray-700">
          A Buongiorno Pizzaria te oferece uma grande variedade de sabores, todos voltados para tornar ainda mais especial seus melhores momentos.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <button className="bg-primary text-white mt-2 py-2 px-6 rounded-full hover:bg-opacity-80 transition duration-300">
            Faça já seu pedido
          </button>
          <button className="bg-primary text-white mt-2 py-2 px-6 rounded-full hover:bg-opacity-80 transition duration-300">
            Saiba mais
          </button>
        </div>
      </div>
    </section>
  );
}
