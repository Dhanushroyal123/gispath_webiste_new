import './header2.css'
import logo from '../../assets/logo_nobg.png'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Hamburger from 'hamburger-react'
import MenuData from './menudata'
import { useEffect, useState, useRef } from 'react'

const Navbar = () => {
  const menuItems = [
    { id: 1, name: 'Home', status: false, arrow: false },
    { id: 2, name: 'What We Do', status: false, arrow: false },
    { id: 3, name: 'About Us', status: false, arrow: false },
    { id: 4, name: 'Careers', status: false, arrow: false },
    { id: 5, name: 'Blog', status: false, arrow: false },
    { id: 6, name: 'Contact', status: false, arrow: false },
  ]

  const [id, setId] = useState('')

  const [val, setVal] = useState(false)

  const [isOpen, setOpen] = useState(false)

  const [menu, setMenu] = useState(menuItems)

  const [width, setWidth] = useState(1080)

  const setArrowStatus = (id) => {
    setMenu(
      menu.map((each) => {
        if (each.id === id) {
          each.arrow = !each.arrow
        }
        return each
      })
    )
  }

  return (
    <>
      <div className='navbar'>
        <div className='brand-logo'>
          <img id='logo' src={logo} alt='' />
        </div>
        <div className='menu'>
          {menu.map((each) => {
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
        <div className='hamburger-icon' onClick={() => setMenu(menuItems)}>
          <Hamburger id='hg' toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      <>
        <MenuData id={id} val={val} setFun={setVal} />
      </>
      <div
        className='navhidden-mobile-out'
        style={{ display: width >= 1080 ? 'none' : '' }}
      >
        {isOpen ? (
          <div
            style={{ display: 'flex', flexDirection: 'column' }}
            className='navhidden-mobile'
          >
            {menu.map((each) => {
              const { id, name, arrow } = each
              return (
                <div
                  style={{
                    flex: '1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid lightgray',
                  }}
                  key={name}
                >
                  <div
                    style={{
                      flex: '95%',
                      display: 'flex',
                      justifyContent: 'center',
                      fontWeight: '700',
                      color: '#0d016b',
                    }}
                  >
                    {name}
                  </div>
                  <div
                    style={{
                      flex: '5%',
                      display: 'flex',
                      justifyContent: 'center',
                      paddingRight: '10px',
                    }}
                    onClick={() => setArrowStatus(id)}
                  >
                    {arrow ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default Navbar
