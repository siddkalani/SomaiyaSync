import React from 'react'
import ContentTop from '../../components/ContentTop/ContentTop'
import { useLocation } from 'react-router-dom'

const Inbox = () => {
  const locate = useLocation();
  const topName = locate.state.topName
  return (
    <div>
      <ContentTop 
      topName={topName}/>
      Inbox
    </div>
  )
}

export default Inbox