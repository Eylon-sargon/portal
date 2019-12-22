import { UniqueId } from './../../types/ExerciseItem';
import { Exercise } from '../../types/Exercice';

export const ADD_EXERCISE = 'EDIT_DAY_TITLE';
export const EDIT_EXERCISE = 'EDIT_DAY_DESCRIPTION';
export const DELETE_EXERCISE = 'ADD_DAY_EXERCISE_ITEM';

export type ExerciseState = Exercise[];

export interface AddExercise {
	type: typeof ADD_EXERCISE;
	payload: Exercise;
}

export interface EditExercise {
	type: typeof EDIT_EXERCISE;
	payload: Exercise;
}

export interface DeleteExercise {
	type: typeof DELETE_EXERCISE;
	payload: UniqueId;
}

export type ExerciseActionTypes = AddExercise | EditExercise | DeleteExercise;
