import React from 'react'
import person from '../assets/person.svg'
const ModeComponent = () => {
    return (
        <div>
            <span className="text-base">Click to change mode</span>
            <button className="bg-main-color text-white w-full rounded-lg mt-2">
                <div className="float-left">
                    <img src={person}/>
                </div>
                <div className="text-left text-2xl mt-6 font-bold">
                    VS Com
                </div>
            </button>
        </div>
    )
}

export default ModeComponent