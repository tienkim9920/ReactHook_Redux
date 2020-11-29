

const userReducer = (state = {}, action) => {

    switch (action.type) {
        
        case 'ADD_USER':
            return state

        case 'DELETE_USER':
            return state

        default: 
            return state
            
    }

}

export default userReducer