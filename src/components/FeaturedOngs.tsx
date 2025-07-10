'use client';

import { useEffect, useState } from 'react';

type Ong = {
  id: number;
  nome: string;
  categoria: string;
  cidade: string;
  verified: boolean;
  imagem?: string;
};

export default function FeaturedOngs() {
  const [ongs, setOngs] = useState<Ong[]>([]);

  useEffect(() => {
    async function fetchOngs() {
      try {
        const response = await fetch('https://api-ong-research-9.onrender.com/ongs');
        const data = await response.json();
        setOngs(data);
      } catch (error) {
        console.error('Erro ao carregar ONGs:', error);
      }
    }

    fetchOngs();
  }, []);

  return (
    <section className="max-w-4xl mx-auto mt-12 px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">ONGs em Destaque</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ongs.map((ong) => (
          <div
            key={ong.id}
            className="bg-white shadow-md rounded-xl p-4 flex items-center gap-4 hover:shadow-lg transition-all"
          >
            <img
              src={ong.imagem || '/img/logo.png'}
              alt={ong.nome}
              className="w-16 h-16 object-cover rounded-md"
            />

            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                {ong.nome}
                {ong.verified && (
                  <span className="text-blue-500" title="ONG verificada">
                    ✔️
                  </span>
                )}
              </h3>
              <p className="text-sm text-gray-600">
                {ong.categoria} · {ong.cidade}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
