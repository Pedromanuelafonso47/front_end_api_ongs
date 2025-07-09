// components/Header.tsx
import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
    <Logo /> 

        {/* Navegação */}
        <nav className="space-x-6">
          <Link href="#inicio" className="text-gray-800 hover:text-blue-500">Início</Link>
          <Link href="#sobre" className="text-gray-800 hover:text-blue-500">Sobre</Link>
          <Link href="#contactos" className="text-gray-800 hover:text-blue-500">Contactos</Link>
        </nav>
      </div>
    </header>
  );
}
