
import { createContext, useState, useContext } from "react"

const LanguageContext = createContext(undefined)

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en")
  
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

