import React, { createContext, useState } from "react";

import { themeSchema } from '../theme-schema/theme-schema.js'

export const ContextData = createContext()

export const ContextProvider = ({ children }) => {

  const [ theme, setTheme ] = useState(themeSchema)

  return (
    <ContextData.Provider value={{
      theme,
      setTheme
    }}>
      { children }
    </ContextData.Provider>
  )
}