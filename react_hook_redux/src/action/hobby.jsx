
export const addNewHobby = (data) => {
    return {
        type: 'ADD_HOBBY',
        data
    }
}

export const setActiveHobby = (data) => {
    return {
        type: 'SET_ACTIVE_HOBBY',
        data
    }
}

export const deleteHobby = (data) => {
    return {
        type: 'DELETE_HOBBY',
        data
    }
}