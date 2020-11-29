import React from 'react';
import PropTypes from 'prop-types';
import './HobbyList.css'

HobbyList.propTypes = {
    HobbyList: PropTypes.array,
    onActive: PropTypes.func,
    ActiveList: PropTypes.string,
    onDelete: PropTypes.func
};

HobbyList.defaultProps = {
    HobbyList: [],
    onActive: null,
    ActiveList: '',
    onDelete: null
}

function HobbyList(props) {

    const { HobbyList, ActiveList, onActive, onDelete } = props

    const handlerClick = (hobby) => {
        
        if (!onActive){
            return
        }

        onActive(hobby)

    }

    const handlerDelete = (hobby) => {

        if (!onDelete){
            return
        }

        var id = hobby.id

        var index = HobbyList.findIndex(value => {
            return value.id === id
        })

        onDelete(hobby)

        console.log(index)

    }

    return (
        <div className="group_Hobby">
            {HobbyList.map(value => (
                <div key={value.id}>
                    <li
                    className={value.id === ActiveList ? 'active' : ''}
                    onClick={() => handlerClick(value)}
                    >
                    {value.name}
                    </li>
                    <button className="waves-effect waves-light btn red accent-2" type="submit" onClick={() => handlerDelete(value)} value={value.id}>X</button>
                </div>
            ))}
        </div>
    );
}

export default HobbyList;