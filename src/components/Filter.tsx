'use client';
import { useState } from 'react';

export default function Filter() {
  const [showResults, setShowResults] = useState(true);

  const [cidade, setCidade] = useState('');
  const [categoria, setCategoria] = useState('');

  // Por enquanto listas fixas, depois vamos puxar da API
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

      {/* Botão Buscar */}
      <button className="bg-blue-600 text-white px-6 py-2 rounded-md w-full">
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
        <div className="mt-4 w-full p-4 border rounded-md text-gray-700">
          <p>Resultados aparecerão aqui...</p>
        </div>
      )}
    </div>
  );
}
