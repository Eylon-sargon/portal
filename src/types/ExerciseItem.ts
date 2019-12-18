import { Exercise } from './Exercice';

export interface ExerciseItem{
  id: UniqueId,
  index: number,
  sets: Set[],
  exercise: Exercise
}

export type ExerciseItemDto = Omit<ExerciseItem, 'id' | 'index'>;

export type Set = string
export type UniqueId = string
