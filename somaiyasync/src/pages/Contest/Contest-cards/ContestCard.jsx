import React from 'react'
import "./ContestCard.css"
const ContestCard = (props) => {
  return (
    <div>
      <div className="ContestCard">
        <div className="ContestCard-header"><h2>{props.Name}</h2></div>
        </div>
    </div>
  )
}

export default ContestCard