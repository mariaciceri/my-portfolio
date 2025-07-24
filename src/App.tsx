import './App.css'
import { ColorProvider } from './context/ColorContext';
import { LanguageProvider } from './context/LanguageContext';
import LanguageToggle from './components/LanguageToggle'
import Home from './pages/Home'
import Header from './components/Header';

function App() {
  return (
    <LanguageProvider>
    <ColorProvider>
      <div>
        <main>
          <Header>
            <LanguageToggle/>
          </Header>
          <Home/>
        </main>
      </div>
    </ColorProvider>
    </LanguageProvider>
  )   
}

export default App
