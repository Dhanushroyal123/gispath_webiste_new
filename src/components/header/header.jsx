import { useState } from 'react'
import logo from '../../assets/logo.png'
import Hamburger from 'hamburger-react'
import MenuData from './menudata'
import './header.css'

const Header = () => {
  const menuItems = [
    { id: 1, name: 'home', status: false },
    { id: 2, name: 'what we do', status: false },
    { id: 3, name: 'about us', status: false },
    { id: 4, name: 'careers', status: false },
    { id: 5, name: 'blog', status: false },
    { id: 6, name: 'contact', status: false },
  ]

  const [id, setId] = useState('')

  const [hideMenu, setHideMenu ] = useState(false)

  return <>
  <div className='header'>
      <div className='logo' style={{flex:'1', display:'flex'}}>
        <div style={{marginRight:'140px'}}>
          <img src={logo} alt="" width='150px' height='100px'/>
        </div>
      </div>
      <div style={{display:'flex', flex:'1'}}>
         {
          menuItems.map((each)=>{
            return <div id="menuItem" onMouseEnter={()=>{
              if(each.id !==1){
                setId(each.id)
                setHideMenu(true)
              }else{
                setId(1)
              }
            }} onMouseLeave={()=>setHideMenu(false)} key={each.id} style={{padding:'10px 20px 10px 20px', height:'80px', display:'flex', alignItems:'center', borderBottom: each.id==id?'2px solid red':'2px solid white'}}>{each.name}</div>
          })
         }
      </div>
  </div>
  {hideMenu?<div className='menudiv' onMouseEnter={()=>setHideMenu(true)} onMouseLeave={()=>setHideMenu(false)}>
         <MenuData id={id}/>
  </div>:''}
  </>

}

export default Header

