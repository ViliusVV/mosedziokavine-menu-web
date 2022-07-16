import { useState } from 'react'
import logo from './logo.svg'
import './App.scss'
import menu from "./assets/menu.json"
import MenuSection from "./components/MenuSection"

const allLangs = {
  "lt": { flag: "🇱🇹"},
  "en": { flag: "🇺🇸"}
}

function App() {
  const [lang, setLang] = useState("en")
  const [count, setCount] = useState(0)
  
  const toggleLang = () => {
    const lKeys = Object.keys(allLangs)
    const langIdx = lKeys.indexOf(lang);

    if(langIdx === lKeys.length - 1){
      setLang(lKeys[0])
    } else {
      setLang(lKeys[langIdx + 1])
    }
  }

  return (
    <div className="App">
      { Object.keys(menu).map(key => <MenuSection key={key} section={menu[key]} lang={lang}/> )}

      <button className='shadow-4 lang-button' type='button' onClick={toggleLang}>{allLangs[lang].flag}</button>
    </div>
  )
}

export default App
