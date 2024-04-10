import { Layout } from "antd"
import { Navbar, Home, Exchanges, CryptoDetails, News, Cryptocurrencies } from './components'
import './App.css'
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/exchanges' element={<Exchanges />} />
                <Route path='/news' element={<News />} />
                <Route path='/cryptodetails/:coinId' element={<CryptoDetails />} />
                <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
              </Routes>
            </div>
          </Layout>
        </div>
        <div className="footer"></div>
      </div>
    </>
  )
}

export default App
