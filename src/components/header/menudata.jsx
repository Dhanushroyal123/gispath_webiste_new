import { useState } from 'react'
import mdata from './menublockdata'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'


const MenuData=({ id })=>{
    const data = mdata.filter((each)=>each.id==id)
    return (<div className='menudivinner'>
        <div className='minner1'>
           {data[0]['b1']['name']}
        </div>
        <div className='minner2'></div>
        <div className='minner3'></div>

    </div>)
}

export default MenuData