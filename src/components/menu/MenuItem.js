export default function MenuItem() {
    return(
      <div className="bg-gray-200 p-4 rounded-lg text-center hover:shadow-md hover:shadow-black/25 hover:bg-white transition-all">
        <div className="text-center max-h-8">
          <img src="/pizza.png" className="max-h-auto max-h-24 block mx-auto" alt="pizza"/>
        </div>
       
        <div className="font-semibold text-xl mt-16">
          Pizza de Pepperoni
        </div>
        <p style={{ textIndent: '1.5em' }}  className="text-gray-900 text-justify text-sm text-justify line-clamp-2 mt-2">
          Descubra a combinação perfeita de sabores com nossa irresistível Pizza de Pepperoni! A base começa com uma massa artesanal, assada até atingir a textura ideal: crocante por fora e macia por dentro. Sobre a massa, espalhamos um molho de tomate rico e saboroso, preparado com tomates italianos frescos e temperos especiais.
          Cada fatia é generosamente coberta com uma camada de queijo mussarela derretido, que se estica em fios suculentos a cada mordida. E, claro, a estrela do show: fatias finas de pepperoni, levemente picantes e incrivelmente saborosas, distribuídas uniformemente para garantir um toque de sabor em cada pedaço.
          O pepperoni, com seu sabor distintamente apimentado e defumado, contrasta perfeitamente com o queijo cremoso e o molho de tomate ligeiramente adocicado, criando uma explosão de sabores que vai satisfazer todos os amantes de pizza. Assada até a perfeição, nossa Pizza de Pepperoni apresenta bordas douradas e crocantes, com o queijo borbulhante e o pepperoni levemente tostado no topo.
          Ideal para compartilhar com amigos e familiares, nossa Pizza de Pepperoni é uma escolha clássica que nunca sai de moda. Perfeita para qualquer ocasião, seja uma noite de cinema em casa, uma festa ou simplesmente quando você quer um pedaço do paraíso em forma de pizza.
          Venha experimentar e se deliciar com cada mordida!
        </p>
        <button className="bg-primary text-white rounded-full px-8 py-2 mt-4 text-justify text-sm text-justify ">Adicione aos Pedidos R$ 50</button>
      </div>
    );
}
