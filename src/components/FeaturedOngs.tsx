'use client'
import { useEffect, useState } from 'react'

export default function FeaturedOngs() {
  const [ongs, setOngs] = useState([])

  useEffect(() => {
    async function fetchOngs() {
      try {
        const res = await fetch('/api/ongs') // ajuste se sua rota for diferente
        const data = await res.json()

        // Embaralha e pega 5 aleatórias
        const aleatorias = data.sort(() => 0.5 - Math.random()).slice(0, 5)
        setOngs(aleatorias)
      } catch (error) {
        console.error('Erro ao carregar ONGs:', error)
      }
    }

    fetchOngs()
  }, [])

  return (
    <div className="bg-white p-4 rounded-xl shadow max-w-md mx-auto mt-10">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Destaques</h2>

      <div className="space-y-3">
        {ongs.map((ong, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
          >
            <div className="flex items-center gap-3">
              {/* Imagem da ONG */}
              <div className="w-10 h-10 bg-gray-300 rounded-md" />
              <div>
                <h3 className="font-medium text-sm text-gray-900">{ong.nome}</h3>
                <p className="text-xs text-gray-500">{ong.categoria} - {ong.cidade}</p>
              </div>
            </div>
            {ong.verificada && (
              <div className="flex items-center gap-1 text-xs text-blue-600 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.93 10.588 4.29 8.065l-.637.666L6.93 12l6.718-6.745-.637-.666z"/>
                </svg>
                Verificada
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
