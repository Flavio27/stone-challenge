import React, { useState, createContext, useContext, useEffect } from 'react';

const dataContext = createContext()

export default function Clients({ children }) {
  const [data, setData] = useState([])

  useEffect(async => {

    async function getClients() {
      const response = await fetch('https://60020a1208587400174db8f0.mockapi.io/api/v1/cliente')
      const data = await response.json();
      setData(data)
    } getClients();

  },[])

  return (
    <dataContext.Provider value={{ data, setData }}>
      {children}
    </dataContext.Provider>
  )
}

export function useClienteData() {
  const clientContext = useContext(dataContext);
  if (!clientContext) throw new Error("useClienteData must be used within a Clients provider");
  const { data, setData } = clientContext;
  return { data, setData }
}
