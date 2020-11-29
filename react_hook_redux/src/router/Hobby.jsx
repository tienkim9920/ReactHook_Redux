import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addNewHobby, deleteHobby, setActiveHobby } from '../action/hobby';
import HobbyList from '../component/HobbyList';

Hobby.propTypes = {
    
};

function Hobby(props) {

   const hobbyList = useSelector(state => state.hobbys.list)
   const activeList = useSelector(state => state.hobbys.active)

   const dispatch = useDispatch()

   console.log("New Hobby: ", hobbyList)


   const [hobby, setHobby] = useState('')
//    console.log(hobby)

    function handlerChange(e){
        setHobby(e.target.value)
    }

    function handlerSubmit(e){

        const action = addNewHobby(hobby)
        dispatch(action)

        setHobby('')

        e.preventDefault()
    }

    function onActive(active){
        console.log("Active: ", active.id)

        const action = setActiveHobby(active.id)
        dispatch(action)
    }

    function onDelete(data){
        console.log("Delete: ", data)

        const action = deleteHobby(data)
        dispatch(action)
        
    }

    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <input type="text" placeholder="Enter Here!" onChange={handlerChange} value={hobby}/>
            </form>
            
            <HobbyList HobbyList={hobbyList} ActiveList={activeList} onActive={onActive} onDelete={onDelete}/>
        </div>
    );
}

export default Hobby;