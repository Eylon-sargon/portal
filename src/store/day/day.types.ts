import { ExerciseItem, UniqueId } from './../../types/ExerciseItem';
import { Day } from '../../types/Day';

export const EDIT_DAY_TITLE = 'EDIT_DAY_TITLE';
export const EDIT_DAY_DESCRIPTION = 'EDIT_DAY_DESCRIPTION';
export const ADD_DAY_EXERCISE_ITEM = 'ADD_DAY_EXERCISE_ITEM';
export const EDIT_DAY_EXERCISE_ITEM = 'EDIT_DAY_EXERCISE_ITEM';
export const DELETE_DAY_EXERCISE_ITEM = 'DELETE_DAY_EXERCISE_ITEM';

export type DayState = Day[];

interface EditDayTitleAction {
	type: typeof EDIT_DAY_TITLE;
	payload: string;
	index: number;
}

interface EditDayDescriptionAction {
	type: typeof EDIT_DAY_DESCRIPTION;
	payload: string;
	index: number;
}

interface AddExercieItemAction {
	type: typeof ADD_DAY_EXERCISE_ITEM;
	payload: ExerciseItem;
	index: number;
}

interface DeleteExercieItemAction {
	type: typeof DELETE_DAY_EXERCISE_ITEM;
	payload: UniqueId;
	index: number;
}

interface EditExercieItemAction {
	type: typeof EDIT_DAY_EXERCISE_ITEM;
	payload: ExerciseItem;
	index: number;
}

export type DayActionTypes = EditDayTitleAction | EditDayDescriptionAction | AddExercieItemAction | DeleteExercieItemAction | EditExercieItemAction;
