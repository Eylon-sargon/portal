import { Exercise } from './../types/Exercice';
import { UniqueId, ExerciseItem } from './../types/ExerciseItem';
import { store } from '../App';
import { rootExercises } from './rootExercises';
import uuid from 'uuid';

export const getExercise = (exerciseId: UniqueId): Exercise => store.getState().exercise.filter(exr => exr.id === exerciseId)[0];

export const getExerciseItemSets = (exerciseItem: ExerciseItem) => exerciseItem.sets.filter(set => !!set && set !== '');

export const dummyExerciseData: Exercise[] = rootExercises.map(exercise => ({ ...exercise, id: uuid() }));
