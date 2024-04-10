import { Layout, Space } from "antd"
import { Navbar, Home, Exchanges, CryptoDetails, News, Cryptocurrencies } from './components'
import './App.css'
import { Link, Route, Routes } from "react-router-dom"
import Typography from "antd/es/typography/Typography"

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
          <div className="footer">
            <Typography.Title level={5} style={{ color: 'white' }}>
              Cryptoverse <br />
              All rights reserved
            </Typography.Title>
            <Space>
              <Link to='/'>Home</Link>
              <Link to='/exchanges'>Exchanges</Link>
              <Link to='/news'>News</Link>
            </Space>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
