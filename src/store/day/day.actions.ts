import { EDIT_DAY_TITLE, EDIT_DAY_DESCRIPTION, EDIT_DAY_EXERCISE_ITEM, ADD_DAY_EXERCISE_ITEM, DELETE_DAY_EXERCISE_ITEM } from './day.types';
import { Day } from '../../types/Day';
import { UniqueId, ExerciseItem, ExerciseItemDto } from './../../types/ExerciseItem';
import uuid from 'uuid';

export const editDayTitle = (day: Day, title: string) => {
	return {
		type: EDIT_DAY_TITLE,
		payload: title,
		id: day.id,
	};
};

export const editDayDescription = (day: Day, description: string) => {
	return {
		type: EDIT_DAY_DESCRIPTION,
		payload: description,
		id: day.id,
	};
};

export const addExercieItem = (day: Day, exerciseItem: ExerciseItemDto) => {
	return {
		type: ADD_DAY_EXERCISE_ITEM,
		payload: { ...exerciseItem, index: day.exerciseItems.length, id: uuid() },
		id: day.id,
	};
};

export const deleteExercieItem = (day: Day, id: UniqueId) => {
	return {
		type: DELETE_DAY_EXERCISE_ITEM,
		payload: id,
		id: day.id,
	};
};

export const editExercieItem = (day: Day, exerciseItem: ExerciseItem) => {
	return {
		type: EDIT_DAY_EXERCISE_ITEM,
		payload: exerciseItem,
		id: day.id,
	};
};
