import axios from 'axios';
import { useState, useEffect } from 'react';

const API_KEY = import.meta.env.VITE_POKEMON_API_KEY;
const BASE_URL = "https://api.pokemontcg.io/v2/cards";

const useFetchPocketCards = (setId = "sv1", page = 1, pageSize = 30) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${BASE_URL}`, {
          headers: {
            'X-Api-Key': API_KEY
          },
          params: {
            q: `set.id:${setId}`,
            page: page,
            pageSize: pageSize
          }
        });
        setCards(res.data.data);
        console.log(res.data.data);
        setTotalCount(res.data.totalCount);
      } catch (error) {
        console.error("Error fetching cards:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [setId, page, pageSize]);

  return { cards, loading, totalCount };

};

export default useFetchPocketCards;
