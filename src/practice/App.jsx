import React from 'react'
import { info } from './info'

const App = () => {
    return (
        <div>
            {info.map((data) => {
                return <nav>
                    <ul>
                        <li>{data.title}</li>
                    </ul>
                    </nav>
                    })}
        </div>
    )
}

export default App;




