import { Exercise } from './../../types/Exercice';
import uuid from 'uuid';
import { ADD_EXERCISE, EDIT_EXERCISE, DELETE_EXERCISE } from './exercise.types';
import { AddExerciseDto } from '../../types/Exercice';
import { UniqueId } from '../../types/ExerciseItem';

export const addExercise = (exercise: AddExerciseDto) => {
	return {
		type: ADD_EXERCISE,
		payload: { ...exercise, id: uuid() },
	};
};

export const editExercise = (exercise: Exercise) => {
	return {
		type: EDIT_EXERCISE,
		payload: exercise,
	};
};

export const deleteExercise = (id: UniqueId) => {
	return {
		type: DELETE_EXERCISE,
		payload: id,
	};
};
