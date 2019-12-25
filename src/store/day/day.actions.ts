import { EDIT_DAY_TITLE, EDIT_DAY_DESCRIPTION, EDIT_DAY_EXERCISE_ITEM, ADD_DAY_EXERCISE_ITEM, DELETE_DAY_EXERCISE_ITEM, SORT_EXERCISE_ITEMS } from './day.types';
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

export const sortExerciseItems = (day: Day, exerciseItemIds: UniqueId[]) => {
	let sortedExerciseItems = new Array(day.exerciseItems.length).fill(null);
	day.exerciseItems.forEach(exerciseItem => {
		const index = exerciseItemIds.indexOf(exerciseItem.id);
		sortedExerciseItems[index] = exerciseItem;
	});

	console.log(sortedExerciseItems);

	return {
		type: SORT_EXERCISE_ITEMS,
		payload: sortedExerciseItems as ExerciseItem[],
		id: day.id,
	};
};
