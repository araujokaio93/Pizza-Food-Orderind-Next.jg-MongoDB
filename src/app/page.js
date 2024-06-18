import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import { FaPhone } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-12" id="about">
        <SectionHeaders
          subHeader={'A Nossa História :'}
          mainHeader={'Como tudo começou ...'}
        />
       <div className="text-gray-900 max-w-md mx-auto mt-4 flex flex-col gap-4 text-justify">
          <p style={{ textIndent: '1.5em' }}>
            A Pizzaria Buongiorno foi fundada em 1998 com o objetivo de trazer o autêntico sabor da pizza italiana para a nossa comunidade. Começamos como uma pequena pizzaria familiar, apaixonados pela arte de fazer pizzas com ingredientes frescos e receitas tradicionais passadas de geração em geração.
          </p>
          <p style={{ textIndent: '1.5em' }}>
            Ao longo dos anos, a Buongiorno se tornou um ponto de encontro para amigos e famílias, onde todos podem desfrutar de uma refeição deliciosa em um ambiente acolhedor. Nos orgulhamos de oferecer uma grande variedade de sabores, desde os clássicos até as criações exclusivas que refletem a inovação culinária.
          </p>
          <p style={{ textIndent: '1.5em' }}>
            Nosso objetivo é proporcionar uma experiência gastronômica memorável, com um serviço de qualidade e um compromisso constante com a satisfação dos nossos clientes. Continuamos a honrar nossas raízes italianas, enquanto incorporamos novas ideias para manter nosso cardápio fresco e excitante.
          </p>
        </div>
      </section>
      <section className="text-center mb-8" id="contact">
        <SectionHeaders
            subHeader={'A fome bateu ?'}
            mainHeader={`Faça já seu pedido, pelo telefone : `}
          />
        <div className="mt-4 flex items-center justify-center">
          <FaPhone className="text-4xl mr-4" /> {/* Aplicar classe para definir o tamanho do ícone e espaçamento */}
          <a className="text-4xl  text-black" href="tel:+3799976545">
             +37 9997-6545
          </a>
        </div>
      </section>
    </>
  );
}