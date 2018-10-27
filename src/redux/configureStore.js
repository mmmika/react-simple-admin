

import { createStore } from 'redux'
import { rootReducer , initialState } from "./reducers"

export const configureStore = () =>{
    const store = createStore(
        rootReducer,
        initialState,
    )
    return store
}

export default configureStore