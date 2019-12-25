import {
	DayState,
	DayActionTypes,
	EDIT_DAY_TITLE,
	EDIT_DAY_DESCRIPTION,
	EDIT_DAY_EXERCISE_ITEM,
	ADD_DAY_EXERCISE_ITEM,
	DELETE_DAY_EXERCISE_ITEM,
	SORT_EXERCISE_ITEMS,
} from './day.types';
import { dayStateSeedData } from './day.seed-data';

const saved = localStorage.getItem('app-state');
const initialState = saved ? (JSON.parse(saved).day as DayState) : dayStateSeedData;

export function dayReducer(days = initialState, action: DayActionTypes): DayState {
	switch (action.type) {
		case EDIT_DAY_TITLE:
			return days.map(day => (day.id === action.id ? { ...day, title: action.payload } : day));

		case EDIT_DAY_DESCRIPTION:
			return days.map(day => (day.id === action.id ? { ...day, desctiption: action.payload } : day));

		case ADD_DAY_EXERCISE_ITEM: {
			return days.map(day => {
				if (day.id === action.id) {
					return { ...day, exerciseItems: [...day.exerciseItems, action.payload] };
				}
				return day;
			});
		}
		case DELETE_DAY_EXERCISE_ITEM:
			return days.map(day => {
				if (day.id === action.id) {
					return { ...day, exerciseItems: day.exerciseItems.filter(exr => exr.id !== action.payload) };
				}
				return day;
			});

		case EDIT_DAY_EXERCISE_ITEM:
			return days.map(day => {
				if (day.id === action.id) {
					return { ...day, exerciseItems: day.exerciseItems.map(exr => (exr.id === action.payload.id ? action.payload : exr)) };
				}
				return day;
			});

		case SORT_EXERCISE_ITEMS:
			return days.map(day => {
				if (day.id === action.id) {
					return { ...day, exerciseItems: action.payload };
				}
				return day;
			});

		default:
			return days;
	}
}
