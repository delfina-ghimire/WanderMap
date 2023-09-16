import { useContext } from "react";
import { createContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:8000";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error");
      } finally {
        setLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert("there was an error loading data ...");
    } finally {
      setLoading(false);
    }
  }

  return (
    <CitiesContext.Provider value={{ cities, loading, currentCity, getCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside of the Cities Provider");
  return context;
}

export { CitiesProvider, useCities };
