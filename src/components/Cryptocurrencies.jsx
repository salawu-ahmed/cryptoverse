import React, { useState } from 'react'
import { useGetCryptoQuery } from '../services/crytpoApi'
import { Card, Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import millify from 'millify'

const Cryptocurrencies = () => {
    const { data: cryptosList, isFetching} = useGetCryptoQuery()
    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)
    console.log(cryptos);
  return (
    <>
        <Row gutter={[32,32]} className='crypto-card-container'>
            {cryptos.map((crypto) => (
                <Col xs={24} sm={12} lg={6} className='crypto-card' key={crypto.id}>
                    <Link to={`/crypto/${crypto.id}`}>
                        <Card
                        title={`${crypto.rank}. ${crypto.name}`}
                        extra={<img className='crypto-image' src={crypto.iconUrl} hoverable/>}>
                            <p>Price: {millify(crypto.price)}</p>
                            <p>Market Cap: {millify(crypto.marketCap)}</p>
                            <p>Daily Change: {millify(crypto.change)}%</p>
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
    </>
  )
}

export default Cryptocurrencies
