import { DayState, DayActionTypes, EDIT_DAY_TITLE, EDIT_DAY_DESCRIPTION, EDIT_DAY_EXERCISE_ITEM, ADD_DAY_EXERCISE_ITEM, DELETE_DAY_EXERCISE_ITEM } from './day.types';

const initialState: DayState = [];

export function dayReducer(days = initialState, action: DayActionTypes): DayState {
	switch (action.type) {
		case EDIT_DAY_TITLE:
			return days.map(day => (day.index === action.index ? { ...day, title: action.payload } : day));

		case EDIT_DAY_DESCRIPTION:
			return days.map(day => (day.index === action.index ? { ...day, desctiption: action.payload } : day));

		case ADD_DAY_EXERCISE_ITEM:
			return days.map(day => {
				if (day.index === action.index) {
					return { ...day, exercises: [...day.exercises, action.payload] };
				}
				return day;
			});

		case DELETE_DAY_EXERCISE_ITEM:
			return days.map(day => {
				if (day.index === action.index) {
					return { ...day, exercises: day.exercises.filter(exr => exr.id !== action.payload) };
				}
				return day;
			});

		case EDIT_DAY_EXERCISE_ITEM:
			return days.map(day => {
				if (day.index === action.index) {
					return { ...day, exercises: day.exercises.map(exr => (exr.id === action.payload.id ? action.payload : exr)) };
				}
				return day;
      });
      
		default:
			return days;
	}
}
