import React, { useState } from 'react'
import { info } from './info'
import "./practice.css"
const App = () => {
    const[activeId , setActiveId] = useState(null)
    const handleClick=(id)=>{
        setActiveId(id)
    }
    
    return (
        <div className='practice'>
            {info.map((data) => {
                return <nav>
                    <ul>
                        <li key={data.id} onClick={()=>{handleClick(data.id)}} className={`${data.id===activeId? "active": null}`} >{data.title}</li>
                    </ul>
                    </nav>
                    })}
        </div>
    )
}

export default App;




