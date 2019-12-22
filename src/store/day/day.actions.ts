import { EDIT_DAY_TITLE, EDIT_DAY_DESCRIPTION, EDIT_DAY_EXERCISE_ITEM, ADD_DAY_EXERCISE_ITEM, DELETE_DAY_EXERCISE_ITEM } from './day.types';
import { Day } from '../../types/Day';
import { UniqueId, ExerciseItem, ExerciseItemDto } from './../../types/ExerciseItem';

export const editDayTitle = (day: Day, title: string) => {
	return {
		type: EDIT_DAY_TITLE,
		payload: title,
		index: day.index,
	};
};

export const editDayDescription = (day: Day, description: string) => {
	return {
		type: EDIT_DAY_DESCRIPTION,
		payload: description,
		index: day.index,
	};
};

export const addExercieItem = (day: Day, exerciseItem: ExerciseItemDto) => {
	return {
		type: ADD_DAY_EXERCISE_ITEM,
		payload: { ...exerciseItem, index: day.exercises.length, id: 'asdasd' },
		index: day.index,
	};
};

export const deleteExercieItem = (day: Day, id: UniqueId) => {
	return {
		type: DELETE_DAY_EXERCISE_ITEM,
		payload: id,
		index: day.index,
	};
};

export const editExercieItem = (day: Day, exerciseItem: ExerciseItem) => {
	return {
		type: EDIT_DAY_EXERCISE_ITEM,
		payload: exerciseItem,
		index: day.index,
	};
};
