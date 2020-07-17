import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink, Router } from 'react-router-dom'

import { getSmurfs, addSmurf } from '../actions/smurfActions'
import { Smurf } from '../components/Smurf'

 const SmurfsList = props => {
    const newSmurfValues =
        {
            name: '',
            height: '',
            age: 0,
            id: new Date()
        }

    const [newSmurf, setSmurfValues] = useState(newSmurfValues)
    

    const fetchSmurfs = e => {
        e.preventDefault();
        props.getSmurfs();
    }

    const handleChanges = e => {
         const { name } = e.target
        setSmurfValues({
            ...newSmurf,
            [name]: e.target.value
        })
        console.log(newSmurf)
    }

    const addNewSmurf = e => {
        e.preventDefault();
        props.addSmurf(newSmurf)
        setSmurfValues(newSmurfValues)
        // props.getSmurfs();
    }

    // useEffect(() => {
    //     props.getSmurfs();
    // },[props.smurfs.length])


        return(
            <div className='app-body'>
                <h2 className='meet' onClick={fetchSmurfs}>Meet the Smurfs!</h2>
                <form onSubmit={addNewSmurf}>
                    <h4>Add a smurf to the village:</h4>
                    <label>Name&nbsp;
                        <input
                            type='text'
                            name='name'
                            value={newSmurf.name}
                            onChange={handleChanges}
                            />
                    </label>
                    <label>Height&nbsp;
                        <input
                            type='text'
                            name='height'
                            value={newSmurf.height}
                            onChange={handleChanges}
                            />
                    </label>
                    <label>Age&nbsp;
                        <input
                            type='text'
                            name='age'
                            value={newSmurf.age}
                            onChange={handleChanges}
                            /> 
                    </label>
                    <button>Add Smurf</button>
                </form>
                

                {props.isFetching && <h4>Loading Smurfs</h4>}
                {props.error && <p className='error'>Error while looking for the smurfs</p>}
                {props.smurfs.length ? (
                    <div className='smurfs-list'>
                        {props.smurfs.map(smurf => (
                            <Smurf smurf={smurf} />
                        ))}
                    </div>
                ) : (
                    <p>^Click Meet The Smurfs Button^</p>
                )}
            </div>
        );
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error,
    }
}

export default connect (
    mapStateToProps,
    { getSmurfs, addSmurf }
)(SmurfsList)

