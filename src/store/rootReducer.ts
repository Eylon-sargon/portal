import { combineReducers } from 'redux';
import { dayReducer } from './day/day.reducer';
import { exerciseReducer } from './exercise/exercise.reducer';
export const rootReducer = combineReducers({
	day: dayReducer,
	exercise: exerciseReducer,
});
