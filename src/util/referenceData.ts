import { Exercise } from './../types/Exercice';
import { UniqueId, ExerciseItem } from './../types/ExerciseItem';
import { store } from '../App';

export const getExercise = (exerciseId: UniqueId): Exercise => store.getState().exercise.filter(exr => exr.id === exerciseId)[0];

export const getExerciseItemSets = (exerciseItem: ExerciseItem) => exerciseItem.sets.filter(set => !!set && set !== '');
