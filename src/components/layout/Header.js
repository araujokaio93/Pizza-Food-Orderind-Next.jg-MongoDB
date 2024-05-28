import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <Link className='text-2xl md:text-3xl italic font-semibold text-primary px-5 py-2 rounded-lg' href="/">
          Buongiorno Pizzaria 
        </Link>
        <nav className="hidden md:flex gap-8 text-gray-700 font-semibold items-center">
          <Link className='hover:underline' href="/">Página Principal</Link>
          <Link className='hover:underline' href="/menu">Menu</Link>
          <Link className='hover:underline' href="/sobre">Sobre</Link>
          <Link className='hover:underline' href="/contato">Contato</Link>
          <Link className='hover:underline' href="/login">Login</Link>
        </nav>
      </header>
      <div className="h-16"></div> {/* Espaço abaixo do header */}
    </>
  );
}
