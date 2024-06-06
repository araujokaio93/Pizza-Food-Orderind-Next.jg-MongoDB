import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="hidden md:flex items-center justify-between">
        <nav className="flex items-center gap-8 text-black font-semibold">
          <Link className="text-2xl md:text-3xl italic font-semibold text-primary px-5 py-2 rounded-lg whitespace-no-wrap" href={'/'}>
            Buongiorno Pizzaria
          </Link>
          <Link className="hover:underline" href={'/'}>Home</Link>
          <Link className="hover:underline" href={'/menu'}>Cardápio</Link>
          <Link className="hover:underline" href={'/about'}>Sobre</Link>
          <Link className="hover:underline" href={'/contact'}>Contato</Link>
          <Link href={'/login'} className="mr-4 hover:underline"> {/* Adicionei margem à direita */}
            Login
          </Link>
          <Link href={'/register'} className="bg-primary rounded-full text-white px-3 py-2 hover:bg-opacity-80 transition duration-300 hover:underline">
            Registro
          </Link>
        </nav>
      </div>
    </header>
  );
}





