import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext(null);

export default function AppContextProvider({children}) {
  const [data, setData] = useState();
    return (
    <AppContext.Provider value={{data, setData}}>
        {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => { 
    const {data, setData} = useContext(AppContext);
    return { data, setData};
}
