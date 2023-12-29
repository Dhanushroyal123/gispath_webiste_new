import logo from '../../assets/logo_nobg.png'
import { useState } from 'react'
//import SearchIcon from '@material-ui/icons/Search'
//import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
//import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
//import LocalMallIcon from '@npm install @material-ui/icons'
//import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined'
import './nav.css'

const Navbar = () => {
  const links = ['MEN', 'WOMEN', 'KIDS', 'LIVING', 'OFFERS']

  const [val, setVal] = useState(false)

  return (
    <>
      <div className='navbar'>
        <div className='brand-logo'>
          <img src={logo} width='50px' alt='' />
        </div>
        <div className='menu'>
          {links.map((each) => {
            return (
              <a
                href='/menu'
                onMouseEnter={() => setVal(true)}
                onMouseLeave={() => setVal(false)}
              >
                {each}
              </a>
            )
          })}
        </div>
        <div className='search-bar'>
          <div className='search-bar-ins'>

            <input
              type='text'
              name=''
              id='search'
              placeholder='search for products'
            />
          </div>
          <div className='profile-icons'>
            <div className='ic1'>

              <span style={{ fontSize: '12px', fontWeight: '700' }}>
                Profile
              </span>
            </div>
            <div className='ic2'>

              <span style={{ fontSize: '12px', fontWeight: '700' }}>
                Wishlist
              </span>
            </div>
            <div className='ic3'>

              <span style={{ fontSize: '12px', fontWeight: '700' }}>Bag</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className='nav-hidden'
        style={{ display: val ? '' : 'none' }}
        onMouseEnter={() => setVal(true)}
        onMouseLeave={() => setVal(false)}
      >
        <div className='hid1'>
          <Menu />
        </div>
        <div className='hid1' style={{ backgroundColor: '#f8f8f8' }}>
          <Menu />
        </div>
        <div className='hid1'>
          <Menu />
        </div>
        <div className='hid1' style={{ backgroundColor: '#f8f8f8' }}>
          <Menu />
        </div>
        <div className='hid1'>
          <Menu />
        </div>
      </div>
    </>
  )
}

const Menu = (props) => {
  console.log(props.bcolor)
  return (
    <>
      <div
        style={{
          padding: '5px',
          margin: '5px 70px 5px 0px',
          borderBottom: '1px solid lightgray',
        }}
      >
        <span style={{ color: 'red', fontWeight: '700' }}>Topwear</span>
        <li>T-shirts</li>
        <li>Casual Shirts</li>
        <li>Formal Shirts</li>
        <li>SweatShirts</li>
        <li>Sweaters</li>
        <li>Jackets</li>
        <li>Blzers & coats</li>
        <li>Suits</li>
        <li>Rain Jackets</li>
      </div>
      <div style={{ padding: '5px', margin: '5px 0px 5px 0px' }}>
        <span style={{ color: 'red', fontWeight: '700' }}>
          Indian & festive wear
        </span>
        <li>Jackets</li>
        <li>Blzers & coats</li>
        <li>Suits</li>
        <li>Rain Jackets</li>
      </div>
    </>
  )
}

export default Navbar