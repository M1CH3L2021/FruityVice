import { createContext, ReactNode, useState, useEffect, useContext } from 'react';
import { api } from '../services/api';
import { IFruit } from '../utils/types';

interface FruitsProviderProps {
  children: ReactNode;
}

interface FruitsContextData {
  fruits: IFruit[];
}

const FruitsContext = createContext({} as FruitsContextData)

export function FruitsProvider({ children }: FruitsProviderProps) {
  const [fruits, setFruits] = useState<IFruit[]>([])

  useEffect(() => {
    async function loadData() {
      api.get('/api/fruit/all')
        .then(response => setFruits(response.data))
    }

    loadData()
  }, [])

  return (
    <FruitsContext.Provider value={{ fruits }}>
      { children }
    </FruitsContext.Provider>
  )
}

export function useFruits() {
  return useContext(FruitsContext)
}