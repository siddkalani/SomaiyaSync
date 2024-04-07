import React from 'react'
import ContentTop from '../../components/ContentTop/ContentTop'
import { useLocation } from 'react-router-dom'
import Sidebar from '../../layout/Sidebar/Sidebar'
const Inbox = () => {
  // const locate = useLocation();
  // const topName = locate.state.topName
  return (
    <div className='whole-main'>
    <div className='app'>
    <Sidebar />
    <div className='main-content'>
      <ContentTop />
      Inbox
    </div>
    </div>
    </div>
  )
}

export default Inbox