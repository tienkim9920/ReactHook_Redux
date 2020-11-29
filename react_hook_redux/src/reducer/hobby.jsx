const initialState = {
    list: [],
    active: null
}


const hobbyReducer = (state = initialState, action) => {

    switch(action.type){

        case 'ADD_HOBBY':
            console.log("New Hobby: ", action.data)

            const dataHobby = {
                id: Math.random().toString(),
                name: action.data
            }

            const newList = [...state.list]
            newList.push(dataHobby)

            return {
                ...state,
                list: newList
            }
        
        case 'SET_ACTIVE_HOBBY':
            
            const newActive = action.data

            return {
                ...state,
                active: newActive
            }

        case 'DELETE_HOBBY':
            
            const newListDelete = [...state.list]
            newListDelete.splice(action.data, 1)
            
            return {
                ...state,
                list: newListDelete
            }

        
        default:
            return state
            
    }

}

export default hobbyReducer