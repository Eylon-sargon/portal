import { ExerciseState, ADD_EXERCISE, EDIT_EXERCISE, DELETE_EXERCISE, ExerciseActionTypes } from './exercise.types';

import { exerciseSeedData } from './exercise-seed-data';

const saved = localStorage.getItem('app-state');
const initialState = saved ? (JSON.parse(saved).exercise as ExerciseState) : exerciseSeedData;

export function exerciseReducer(exercises = initialState, action: ExerciseActionTypes): ExerciseState {
	switch (action.type) {
		case ADD_EXERCISE:
			return [...exercises, action.payload];

		case EDIT_EXERCISE:
			return exercises.map(exercise => (exercise.id === action.payload.id ? action.payload : exercise));

		case DELETE_EXERCISE:
			return exercises.filter(exercise => exercise.id !== action.payload);

		default:
			return exercises;
	}
}
