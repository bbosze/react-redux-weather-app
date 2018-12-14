const initialState = {
  collection: []
}

const addCollectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_COLLECTION':
            return ({
              collection: [...state.collection, action.city]
            })
        case 'DELETE_FULL_COLLECTION':
            return { ...state, collection: [] };
        case 'REMOVE_ITEM_FROM_COLLECTION':
            return { ...state, collection: state.collection.filter( val => val !== action.index ) }; //NOT REALLY FINISHED
        default:
            return state;
    }
}

export default addCollectionReducer;
