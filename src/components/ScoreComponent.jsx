import React from 'react'
import '../style/index.css'
import '../style/App.css'

const ScoreComponent = (props) => {
    return (
        <div className="text-center">
            <span className="text-xl font-bold">{props.status}</span>
            <div className="w-20 rounded-lg p-8 border-2 mx-auto">
                <span className="text-lg">{props.score}</span>
            </div>
        </div>

    )
}

export default ScoreComponent