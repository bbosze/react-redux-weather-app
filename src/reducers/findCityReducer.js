const initialState = {
    city:  null,
    temperature: '',
    condition: null,
    icon: '',
    isError: false,
    isLoading: false,
}

const findCityReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FIND_CITY__SUCCESS':
            return ({
              ...state,
              city: action.city,
              country: action.country,
              temp: action.temp,
              condition: action.condition,
              icon: action.icon,
              isLoading: false,
              isError: false,
            })
        case 'FIND_CITY_REQUEST':
            return { ...state, isLoading: true };
        case 'FIND_CITY_FAILURE':
            return ({
              isLoading: false,
              errorMessage: action.payload,
              isError: true
            });
        case 'EMPTY_CITY': //Set back manually initial state, if necessary
            return {
              initialState,
            }
        default:
            return state;
    }
}

export default findCityReducer;
