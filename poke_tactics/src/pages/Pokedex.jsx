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

  return (
    <PokedexLayout>
      <div className="sm:m-5 ml-1 mr-1">
        
        <div className="flex justify-between items-center mb-5 flex-col md:flex-row gap-2">
          <div className="flex items-center h-full">
            <h1 className="text-3xl font-bold text-black">ACA VAN LOS FILTROS</h1>
          </div>
          <SetSelector selectedSet={selectedSet} setSelectedSet={setSelectedSet} />
        </div>

        {loading ? (
          <>
            <div className="flex flex-col items-center justify-center h-72">
              <div className="loader"></div>
              <p className="font-bold text-4xl">Loading Cards...</p>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
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
                    <div className="absolute inset-0 bg-gray-800/80 rounded-xl p-4 backface-hidden rotate-y-180 flex flex-col justify-between text-white text-sm shadow-inner">
                      <div>
                        <h2 className="text-lg font-extrabold text-yellow-400 mb-1 text-center">{card.name}</h2>
                        <p className="text-gray-300 text-xs text-center italic mb-4">{card.set.name}</p>

                        <ul className="space-y-1">
                          <li><span className="font-semibold text-[var(--blue-pri)]">N°:</span> {card.number}</li>
                          <li><span className="font-semibold text-[var(--blue-pri)]">Rareza:</span> {card.rarity || "Desconocida"}</li>
                          <li><span className="font-semibold text-[var(--blue-pri)]">Tipo:</span> {card.types?.join(", ") || "Desconocido"}</li>
                          <li><span className="font-semibold text-[var(--blue-pri)]">Precio Mercado:</span> ${card.cardmarket?.prices?.averageSellPrice ?? "Desconocido"}</li>
                        </ul>
                      </div>

                      <div className="text-center mt-4">
                        <p className="text-sm font-bold text-green-400 bg-white/10 px-2 py-1 rounded-full inline-block shadow">
                          Tienes: {Math.floor(Math.random() * 20) + 1}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center mt-3 gap-4">
                <div className="flex gap-2 mt-4">
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setPage(index + 1)}
                      className={`px-3 py-2 rounded ${
                        page === index + 1
                          ? 'bg-blue-600 font-black text-[var(--yellow-pri)]'
                          : 'bg-[#3763AF] font-bold text-[var(--yellow-pri)] hover:bg-[#232C5F]'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
            </div>
          </>
        )}
      </div>
    </PokedexLayout>
  );
};

export default Pokedex