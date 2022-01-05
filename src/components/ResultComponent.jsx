import React from 'react'
import '../style/index.css'
import '../style/App.css'

const ResultComponent = (props) => {
    return(
        <div className="w-8/12 h-3/4 top-0 my-20 left-52 rounded-lg bg-white/80 backdrop-opacity-60 absolute border-solid border-2">
             <div className="text-center ml-60 mt-60">
             <span className="font-extrabold text-9xl">Win!</span>
             <p className="font-bold text-xl">Com Lose</p>
             </div>
            
           
        </div>
    )
}

export default ResultComponent
