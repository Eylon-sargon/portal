import { ExerciseItem } from './ExerciseItem';

export interface Day {
	index: number;
	title: string;
	desctiption?: string;
	exercises: ExerciseItem[];
}
