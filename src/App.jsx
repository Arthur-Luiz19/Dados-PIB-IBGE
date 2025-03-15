import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EvolucaoPIB from './pages/grafico_de_evolucao_PIB'
import TabelaPIB from './pages/tabela_PIB_por_ano'
import FiltrarAnos from './pages/filtro_anos_PIB'
import { PIBProvider } from './context/PIBContext'

function App() {

  return (
    <>
      <PIBProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<FiltrarAnos />} />
            <Route path='/grafico' element={<EvolucaoPIB />} />
            <Route path='/tabela' element={<TabelaPIB />} />
          </Routes>
        </BrowserRouter>
      </PIBProvider>
    </>
  )
}

export default App
