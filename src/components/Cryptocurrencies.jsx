import React, { useEffect, useState } from 'react'
import { useGetCryptoQuery } from '../services/crytpoApi'
import { Card, Col, Input, Row } from 'antd'
import { Link } from 'react-router-dom'
import millify from 'millify'

const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100
    const { data: cryptosList, isFetching } = useGetCryptoQuery(count)
    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)
    const [searchTerm, setSearchTerm] = useState('')
    console.log(cryptos);
    useEffect(() => {
        const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setCryptos(filteredData)
    }, [cryptosList, searchTerm])
    if (isFetching) return `Loading...`
    return (
        <>
            {
            !simplified &&
                <div className="search-crypto">
                    <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
            }
            <Row gutter={[32, 32]} className='crypto-card-container'>
                {cryptos?.map((crypto) => (
                    <Col xs={24} sm={12} lg={6} className='crypto-card' key={crypto.id}>
                        <Link to={`/crypto/${crypto.id}`}>
                            <Card
                                title={`${crypto.rank}. ${crypto.name}`}
                                extra={<img className='crypto-image' src={crypto.iconUrl} hoverable />}>
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
