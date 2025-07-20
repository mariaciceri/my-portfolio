import './App.css'
import { LanguageProvider } from './context/LanguageContext';
import LanguageToggle from './components/LanguageToggle'
import Home from './pages/Home'

function App() {
  return (
    <LanguageProvider>
      <div>
        <main>
          <LanguageToggle/>
          <Home/>
        </main>
      </div>
    </LanguageProvider>
  )   
}

export default App
