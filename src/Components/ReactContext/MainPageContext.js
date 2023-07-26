import React, {useState} from 'react'
import LanguageContext from "./Context/LanguageContext"
import Header from "./ContextPassingComponents/Header"
import LandingSection from "./ContextPassingComponents/LandingSection"
import FeaturesSection from "./ContextPassingComponents/FeaturesSection"

const MainPageContext = () => {
    const [activeLanguage, setActiveLanguage] = useState("EN")
    const changeLanguage = activeLanguage => {
        setActiveLanguage(activeLanguage)
    }

  return (
   <LanguageContext.Provider value = {{
    activeLanguage,
    changeLanguage,
   }}>
   <Header 
      // activeLanguage = {activeLanguage}
      // changeLanguage = {changeLanguage}
   />
   <LandingSection  
  //  activeLanguage = {activeLanguage}
   />
   <FeaturesSection 
  //  activeLanguage = {activeLanguage}
   />
   </LanguageContext.Provider>
  )
}

export default MainPageContext