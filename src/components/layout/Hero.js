'use client'
import Right from "@/components/icons/Right";
import Image from "next/image";
import React from 'react';

export default function Hero() {
  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold text-left text-justify">
          Qualquer rolê<br/>
          é mais divertido<br/>
          se aliado com uma saborosa<br/>
          <span className='text-primary italic uppercase'>Pizza.</span>
        </h1>
        <p style={{ textIndent: '1.5em' }} className="my-6 text-gray-900 text-sm text-justify">
          A Buongiorno Pizzaria te oferece uma grande variedade de sabores, todos voltados para tornar ainda mais especial seus melhores momentos.
        </p>
        <div className="flex gap-4 text-sm">
          <button 
            className="border bg-primary flex items-center justify-center gap-2  text-white font-semibold  text-sm  px-3 py-2 rounded-full hover:bg-opacity-80 transition duration-300 hover:underline w-40"
          >
            Faça seu pedido
            <Right />
          </button>
          <button 
            className="border border-black bg-white flex items-center justify-center gap-2 text-gray-900 font-semibold text-justify text-sm text-justify px-3 py-2  rounded-full hover:bg-opacity-80 transition duration-300 hover:underline w-40"
          >
            Saiba mais
            <Right />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
      </div>
    </section>
  );
}
