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
        <div
          className='hamburger-icon'
          onClick={() => {
            setMenu(menuItems)
            setOpen(!isOpen)
          }}
        >
          <Hamburger id='hg' toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      <>
        <MenuData id={id} val={val} setFun={setVal} />
      </>
      {isOpen ? (
        <div className='navhidden-mobile'>
          {menu.map((each) => {
            const { id, name, arrow } = each
            return (
              <div
                key={id}
                style={{
                  display: 'flex',
                  flex: '1',
                  alignItems: 'center',
                  borderBottom: '1px solid lightgray',
                }}
              >
                <div
                  style={{
                    flex: '90%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {name}
                </div>
                <div onClick={() => setArrowStatus(id)} style={{ flex: '10%' }}>
                  {arrow ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </div>
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
