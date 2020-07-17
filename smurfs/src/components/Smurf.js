import React from 'react'
import {connect} from 'react-redux'
import { NavLink, Route } from 'react-router-dom'

export const Smurf = props => {

    return(
    // <NavLink to='/'{...props.smurf.id}>
        <div className='smurf'>
            <h4>Name: {props.smurf.name}</h4>
            <p>Height: {props.smurf.height}</p>
            <p>Age: {props.smurf.age}</p>
        </div>
    // </NavLink>
    )
}
