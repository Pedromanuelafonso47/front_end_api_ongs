'use client';
import { useState } from 'react';

type Ong = {
  id: number;
  nome: string;
  cidade: string;
  categoria: string;
  descricao?: string;
  imagem?: string;
  verified?: boolean;
};

export default function Filter() {
  const [showResults, setShowResults] = useState(true);
  const [cidade, setCidade] = useState('');
  const [categoria, setCategoria] = useState('');
  const [ongs, setOngs] = useState<Ong[]>([]); // ← armazenar os resultados da API

  // Listas fixas
  const cidadesDisponiveis = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Luanda'];
  const categoriasDisponiveis = ['Meio Ambiente', 'Educação', 'Assistência Social', 'Proteção Animal'];

  const [sugestoesCidade, setSugestoesCidade] = useState<string[]>([]);
  const [sugestoesCategoria, setSugestoesCategoria] = useState<string[]>([]);

  function handleChangeCidade(valor: string) {
    setCidade(valor);
    const filtradas = cidadesDisponiveis.filter((cidade) =>
      cidade.toLowerCase().includes(valor.toLowerCase())
    );
    setSugestoesCidade(valor.length > 0 ? filtradas : []);
  }

  function handleChangeCategoria(valor: string) {
    setCategoria(valor);
    const filtradas = categoriasDisponiveis.filter((cat) =>
      cat.toLowerCase().includes(valor.toLowerCase())
    );
    setSugestoesCategoria(valor.length > 0 ? filtradas : []);
  }

  // 🟦 Buscar ONGs na API ao clicar no botão
  async function buscarOngs() {
    try {
      const response = await fetch(
        `https://api-ong-research-9.onrender.com/ongs?cidade=${cidade}&categoria=${categoria}`
      );
      const data = await response.json();
      setOngs(data);
    } catch (error) {
      console.error('Erro ao buscar ONGs:', error);
    }
  }

  return (
    <div className="w-full max-w-xl flex flex-col items-center gap-4 relative">
      {/* Inputs */}
      <div className="flex gap-2 w-full relative">
        {/* Input Cidade */}
        <div className="flex-1 relative">
          <input
            type="text"
            value={cidade}
            onChange={(e) => handleChangeCidade(e.target.value)}
            placeholder="Cidade"
            className="border rounded-md p-2 w-full"
          />
          {sugestoesCidade.length > 0 && (
            <ul className="absolute bg-white border rounded-md shadow-md mt-1 w-full z-10">
              {sugestoesCidade.map((cidade, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setCidade(cidade);
                    setSugestoesCidade([]);
                  }}
                >
                  {cidade}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Input Categoria */}
        <div className="flex-1 relative">
          <input
            type="text"
            value={categoria}
            onChange={(e) => handleChangeCategoria(e.target.value)}
            placeholder="Categoria"
            className="border rounded-md p-2 w-full"
          />
          {sugestoesCategoria.length > 0 && (
            <ul className="absolute bg-white border rounded-md shadow-md mt-1 w-full z-10">
              {sugestoesCategoria.map((cat, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setCategoria(cat);
                    setSugestoesCategoria([]);
                  }}
                >
                  {cat}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Botão Buscar (agora com lógica) */}
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded-md w-full"
        onClick={buscarOngs}
      >
        Buscar
      </button>

      {/* Botão Ocultar / Visualizar Resultados */}
      <button
        className="border border-green-500 text-green-600 px-4 py-1 rounded-md"
        onClick={() => setShowResults(!showResults)}
      >
        {showResults ? 'Ocultar Resultados' : 'Visualizar Resultados'}
      </button>

      {/* Resultados */}
      {showResults && (
        <div className="mt-4 w-full space-y-4">
          {ongs.length === 0 && (
            <p className="text-gray-600">Nenhuma ONG encontrada.</p>
          )}

          {ongs.map((ong) => (
            <div
              key={ong.id}
              className="flex gap-4 items-start bg-gray-50 p-4 rounded-md shadow"
            >
              <img
                src={ong.imagem || '/img/logo.png'}
                alt={ong.nome}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800">{ong.nome}</h3>
                <p className="text-sm text-gray-600">
                  {ong.categoria} · {ong.cidade}
                </p>
                {ong.descricao && (
                  <p className="text-gray-700 mt-1 text-sm">{ong.descricao}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
