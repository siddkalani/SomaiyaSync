import React from 'react'
import ContentTop from '../../components/ContentTop/ContentTop'
import { useLocation } from 'react-router-dom'
import Sidebar from '../../layout/Sidebar/Sidebar'
  

const Setting = () => {
  const locate = useLocation();
  const topName = locate.state.topName
  return (
    <div className="">
    <div className='whole-main'>
    <div className='app'>
    <Sidebar />
    <div className='main-content'>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      <ContentTop/>
      Settings
      </div>
=======
=======
>>>>>>> Stashed changes
      <ContentTop topName={topName
      }/>
      Settinfrg
>>>>>>> Stashed changes
      </div>
      </div>
      </div>
      </div>
      </div>
  )
}

export default Setting