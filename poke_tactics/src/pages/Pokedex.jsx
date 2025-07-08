import { getAllCards } from "../services/tcgdexAPI";
import { useEffect, useState } from "react";

const Pokedex = () => {

  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCards = async () => {
      try {
        const data = await getAllCards();
        
        setCards(data.slice(0, 50));
        console.log("Datos", data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      } finally {
        setLoading(false);
      }
    };
    loadCards();
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Pokedex</h1>
      {loading ? (
        <p>Cargando cartas...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div key={card.id} className="bg-white rounded p-2 shadow text-black">
              <p className="mt-2 font-bold text-center">{card.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Pokedex