import React from 'react'

export default function Pet(props) {

    return(
        <div className="Pet">
            <h1>{props.name}, {props.breed}</h1>
        </div>
    )
}