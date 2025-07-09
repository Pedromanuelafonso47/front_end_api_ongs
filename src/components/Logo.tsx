'use client';
import Image from 'next/image';


export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      {/* Logo redonda */}
      <Image
        src="/img/logo.png"
        alt="Doações seguras. Mudanças reais."
        width={200}
        height={40}
        className="rounded-full"
      />
      <span className="text-xl font-bold text-gray-800">Doações seguras</span>
    </div>
  );
}
