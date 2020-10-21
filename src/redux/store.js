import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'

const rootReducer = combineReducers({
     reducer: reducer,
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, 
    createComposer(applyMiddleware(thunk))
    )

export default store;