import './header2.css'
import logo from '../../assets/logo_nobg.png'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Hamburger from 'hamburger-react'
import MenuData from './menudata'
import { useState } from 'react'

const Navbar = () => {
  const menuItems = [
    { id: 1, name: 'Home', status: false, arrow: false, data: [] },
    {
      id: 2,
      name: 'What We Do',
      status: false,
      arrow: false,
      data: [
        'Staffing',
        'Immigrations',
        'IT Recuritment',
        'Customer Experience & Design',
        'Digital Products Engineering',
      ],
      blockHeight: 280,
    },
    {
      id: 3,
      name: 'About Us',
      status: false,
      arrow: false,
      data: ['Overview', 'Leardership', 'Newsroom'],
      blockHeight: 150,
    },
    {
      id: 4,
      name: 'Careers',
      status: false,
      arrow: false,
      data: ['Overview', 'Open Positions'],
      blockHeight: 100,
    },
    {
      id: 5,
      name: 'Blog',
      status: false,
      arrow: false,
      data: [
        'Staffing',
        'Immigrations',
        'IT Recuritment',
        'Customer Experience & Design',
        'Digital Products Engineering',
      ],
    },
    {
      id: 6,
      name: 'Contact',
      status: false,
      arrow: false,
      data: [
        'Staffing',
        'Immigrations',
        'IT Recuritment',
        'Customer Experience & Design',
        'Digital Products Engineering',
      ],
    },
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
            const { id, name, arrow, data, blockHeight } = each
            return (
              <>
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
                      paddingLeft: '20px',
                      fontWeight: '700',
                      color: arrow ? '#a20fb7' : '#0d016b',
                    }}
                  >
                    {name}
                  </div>

                  <div
                    onClick={() => setArrowStatus(id)}
                    style={{ flex: '10%' }}
                  >
                    {arrow ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </div>
                </div>
                {arrow && data.length ? (
                  <div
                    style={{
                      width: '100%',
                      height: blockHeight,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {data.map((each) => {
                      return (
                        <div
                          style={{
                            flex: '1',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '10px 10px 10px 20px',
                            borderBottom: '1px solid lightgray',
                            fontWeight: '500',
                            color: '#0d016b',
                          }}
                        >
                          {each}
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  ''
                )}
              </>
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
