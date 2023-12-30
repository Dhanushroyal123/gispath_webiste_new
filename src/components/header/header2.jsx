import './header2.css'
import logo from '../../assets/logo_nobg.png'
import Hamburger from 'hamburger-react'
import MenuData from './menudata'
import { useState } from 'react'

const Navbar = () => {
  const menuItems = [
    { id: 1, name: 'Home', status: false },
    { id: 2, name: 'What We Do', status: false },
    { id: 3, name: 'About Us', status: false },
    { id: 4, name: 'Careers', status: false },
    { id: 5, name: 'Blog', status: false },
    { id: 6, name: 'Contact', status: false },
  ]

  const [id, setId] = useState('')

  const [val, setVal] = useState(false)

  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <div className='navbar'>
        <div className='brand-logo'>
          <img id='logo' src={logo} alt='' />
        </div>
        <div className='menu'>
          {menuItems.map((each) => {
            const { name } = each
            return (
              <a
                onMouseEnter={() => {
                  if (each.id !== 1) {
                    setId(each.id)
                    setVal(true)
                  } else {
                    setId(1)
                  }
                }}
                onMouseLeave={() => setVal(false)}
                key={each.id}
              >
                {name}
              </a>
            )
          })}
        </div>
        <div className='hamburger-icon'>
          <Hamburger id='hg' toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      <>
        <MenuData id={id} val={val} setFun={setVal} />
      </>
      {isOpen ? (
        <div
          style={{ display: 'flex', flexDirection: 'column' }}
          className='navhidden-mobile'
        >
          {menuItems.map((each) => {
            const { name } = each
            return (
              <div
                style={{
                  flex: '1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid lightgray',
                  fontWeight: '700',
                  color: '#0d016b',
                }}
                key={name}
              >
                {name}
              </div>
            )
          })}
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Navbar
