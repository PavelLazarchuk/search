import thunk from 'redux-thunk';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import hrReducer from './hr/reducer';
import themeReducer from './theme/reducer';
import vacancyReducer from './vacancy/reducer';

const rootReducer = combineReducers({
	hr: hrReducer,
	toastr: toastrReducer,
	vacancy: vacancyReducer,
	theme: themeReducer,
});

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	undefined,
	enhancer(applyMiddleware(thunk)),
);

export default store;
