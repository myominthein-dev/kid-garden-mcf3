

import  React, { useEffect, useState } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import { motion } from "framer-motion"
import { Router, useNavigate, useSearchParams } from "react-router-dom"

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage()
  const nav = useNavigate();
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "mm" : "en")
     
  }

  return (
    <button
      onClick={toggleLanguage}
      className="relative bg-gray-200 z-30 rounded-md w-16 h-8 focus:outline-none "
      aria-label={`Switch to ${language === "en" ? "Myanmar" : "English"}`}
    >
      <motion.div
        className="absolute top-1 left-1 bg-white rounded-md w-6 h-6 flex items-center justify-center font-semibold text-xs"
        animate={{ x: language === "en" ? 0 : 32 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {language.toUpperCase()}
      </motion.div>
    </button>
  )
}

