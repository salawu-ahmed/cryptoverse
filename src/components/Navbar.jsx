import React from 'react'
import { Avatar, Button, Menu, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { FundOutlined, HomeOutlined } from '@ant-design/icons'
import icon from '../../public/cryptocurrency.png'
import MenuItem from 'antd/es/menu/MenuItem'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className="logo-container">
        <Avatar src={icon} />
        <Typography.Title level={2} className='logo'>
            <Link to="/">Cryptoverse</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark">
        <MenuItem icon={<HomeOutlined/>}>
            <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem icon={<FundOutlined/>}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </MenuItem>
        <MenuItem icon={<HomeOutlined/>}>
            <Link to="/exchanges">Exchanges</Link>
        </MenuItem>
        <MenuItem icon={<HomeOutlined/>}>
            <Link to="/news">News</Link>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default Navbar
