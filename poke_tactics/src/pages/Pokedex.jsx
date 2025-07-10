import useFetchPocketCards from "../services/useFetchPocketCards";
import React, { useState } from "react";
import PokedexLayout from "../components/PokedexLayout";
import SetSelector from "../components/SetSelector";
import "../styles/Pokedex.css";

const Pokedex = () => {
  
  const [selectedSet, setSelectedSet] = useState({
    id: "sv1",
    name: "Scarlet & Violet",
    image: "Sets/SetSV.png"
  });
  const [page, setPage] = useState(1);
  const { cards, loading, totalCount } = useFetchPocketCards(selectedSet.id, page, 30);

  const totalPages = Math.ceil(totalCount / 30);

  const handleSetChange = (e) => {
    setSelectedSet(e.target.value);
    setPage(1);
  }

  return (
    <PokedexLayout>
      <div className="ml-10 mr-10">
        
        <div className="flex justify-between items-center mb-5 flex-col md:flex-row gap-2">
          <div className="flex items-center h-full">
            <h1 className="text-3xl font-bold text-black">Pokédex</h1>
          </div>
          <SetSelector selectedSet={selectedSet} setSelectedSet={setSelectedSet} />
        </div>

        {loading ? (
          <p>Cargando cartas...</p>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {cards.map((card) => (
                <div key={card.id} className="group perspective">
                  <div className="relative w-full h-72 transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                    {/* FRONT */}
                    <div className="absolute inset-0 bg-white/10 rounded-xl shadow-md p-2 backface-hidden flex flex-col items-center justify-center">
                      <img
                        src={card.images.small}
                        alt={card.name}
                        loading="lazy"
                        className="w-full max-w-[160px] h-auto rounded-md"
                      />
                      <p className="mt-2 text-sm font-semibold text-white truncate">{card.name}</p>
                    </div>

                    {/* BACK */}
                    <div className="absolute inset-0 bg-gray-800/90 rounded-xl p-4 backface-hidden rotate-y-180 flex flex-col justify-center text-white text-sm">
                      <p className="font-bold text-lg mb-2">{card.name}</p>
                      <p>Set: {card.set.name}</p>
                      <p>N°: {card.number}</p>
                      <p>Rareza: {card.rarity || "Desconocida"}</p>
                      <p className="font-bold">Tienes: {Math.floor(Math.random() * 20) + 1}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center mt-3 gap-4">
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Anterior
              </button>
              <span className="text-center">Página {page} de {totalPages}</span>
              <button
                onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={page === totalPages}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Siguiente
              </button>
            </div>
          </>
        )}
      </div>
    </PokedexLayout>
  );
};

export default Pokedex