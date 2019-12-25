import { ExerciseItem, UniqueId } from './../../types/ExerciseItem';
import { Day } from '../../types/Day';

export const EDIT_DAY_TITLE = 'EDIT_DAY_TITLE';
export const EDIT_DAY_DESCRIPTION = 'EDIT_DAY_DESCRIPTION';
export const ADD_DAY_EXERCISE_ITEM = 'ADD_DAY_EXERCISE_ITEM';
export const EDIT_DAY_EXERCISE_ITEM = 'EDIT_DAY_EXERCISE_ITEM';
export const DELETE_DAY_EXERCISE_ITEM = 'DELETE_DAY_EXERCISE_ITEM';
export const SORT_EXERCISE_ITEMS = 'SORT_EXERCISE_ITEMS';
export type DayState = Day[];

interface EditDayTitleAction {
	type: typeof EDIT_DAY_TITLE;
	payload: string;
	id: UniqueId;
}

interface EditDayDescriptionAction {
	type: typeof EDIT_DAY_DESCRIPTION;
	payload: string;
	id: UniqueId;
}

interface AddExercieItemAction {
	type: typeof ADD_DAY_EXERCISE_ITEM;
	payload: ExerciseItem;
	id: UniqueId;
}

interface DeleteExercieItemAction {
	type: typeof DELETE_DAY_EXERCISE_ITEM;
	payload: UniqueId;
	id: UniqueId;
}

interface EditExercieItemAction {
	type: typeof EDIT_DAY_EXERCISE_ITEM;
	payload: ExerciseItem;
	id: UniqueId;
}

interface SortExerciseItems {
	type: typeof SORT_EXERCISE_ITEMS;
	payload: ExerciseItem[]; // Id's of exercise Items
	id: UniqueId;
}

export type DayActionTypes = EditDayTitleAction | EditDayDescriptionAction | AddExercieItemAction | DeleteExercieItemAction | EditExercieItemAction | SortExerciseItems;
