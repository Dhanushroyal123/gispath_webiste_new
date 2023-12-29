import { useState } from 'react'
import mdata from './menublockdata'
import './header2.css'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'

const MenuData = ({ id, val, setFun }) => {
  const data = mdata.filter((each) => each.id === id)

  console.log('dhanush :', data)

  return (
    <div
      className='nav-hidden'
      style={
        data.length !== 0
          ? { display: val ? '' : 'none', height: data[0]['blockheight'] }
          : { display: val ? '' : 'none' }
      }
      onMouseEnter={() => setFun(true)}
      onMouseLeave={() => setFun(false)}
    >
      <div className='minner1'>
        {data.length !== 0 ? (
          <>
            <div style={{ flex: '0.5', padding: '20px 0px 20px 0px' }}>
              {data[0]['b1']['name']}
            </div>
            <div
              style={{
                flex: '2',
                padding: '10px 0px 10px 0px',
              }}
            >
              <h1
                style={{
                  fontWeight: '400',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  color: '#0D016B',
                }}
              >
                {data[0]['b1']['content']}
              </h1>
            </div>
            <div style={{ flex: '1', padding: '20px 0px 20px 0px' }}>
              {data[0]['b1']['name_exp']}
            </div>
            <div style={{ flex: '1' }}></div>
            <div style={{ flex: '1' }}></div>
          </>
        ) : (
          ''
        )}
      </div>
      <div className='minner2'>
        {data.length !== 0 ? (
          <>
            {data[0]['b2'].map((each) => {
              return (
                <div className='servicelist' key={each}>
                  <span id='service'>{each}</span>
                </div>
              )
            })}
          </>
        ) : (
          ''
        )}
      </div>
      <div className='minner3'>
        {data.length !== 0 ? (
          <>
            {data[0]['b3']['status'] ? (
              <div style={{ flex: '0.5' }}>
                <img
                  src={data[0]['b3']['image']}
                  width='300px'
                  height='180px'
                  alt=''
                />
              </div>
            ) : (
              ''
            )}
            <div
              style={{
                flex: '1',
                display: 'flex',
                alignItems: 'center',
                fontSize: '15px',
                fontWeight: '700',
                color: '#A20FB7',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontStretch: '100%',
                letterSpacing: '1px',
                padding: '20px 0px 20px 0px',
              }}
            >
              {data[0]['b3']['first_service'].toUpperCase()}
            </div>
            <div style={{ flex: '1' }}>
              <h1
                style={{
                  fontWeight: '400',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  color: '#0D016B',
                }}
              >
                {data[0]['b1']['content']}
              </h1>
            </div>
            <div style={{ flex: '1' }}></div>
            <div style={{ flex: '1' }}></div>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default MenuData
