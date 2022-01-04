import React from 'react'
import person from '../assets/person.svg'

const XOComponent = (props) => {
    return (
        <div className="w-20 rounded-lg p-8 mx-auto container-xo float-left mr-10">
            <img src={props.image} width="48px" alt={props.title}/>
        </div>
    )
}

export default XOComponent