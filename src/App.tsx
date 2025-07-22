import './App.css'
import { ColorProvider } from './context/ColorContext';
import { LanguageProvider } from './context/LanguageContext';
import LanguageToggle from './components/LanguageToggle'
import Home from './pages/Home'

function App() {
  return (
    <LanguageProvider>
    <ColorProvider>
      <div>
        <main>
          <LanguageToggle/>
          <Home/>
        </main>
      </div>
    </ColorProvider>
    </LanguageProvider>
  )   
}

export default App
