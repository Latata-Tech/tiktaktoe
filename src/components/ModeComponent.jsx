import React from 'react'
import person from '../assets/person.svg'
import people from '../assets/people.svg'
const ModeComponent = (props) => {
    let mode = props.mode
    return (
        <div>
            <span className="text-base">Click to change mode</span>
            <button onClick={() => props.event(2)} className="bg-main-color text-white w-full rounded-lg mt-2">
                <div className="float-left">
                    <img src={mode === 1 ? person : people} alt="icon"/>
                </div>
                <div className="text-left text-2xl mt-6 font-bold">
                    {mode === 1 ? "1 Player" : "2 Player"}
                </div>
            </button>
        </div>
    )
}

export default ModeComponent