import { ExerciseItem, UniqueId } from './ExerciseItem';

export interface Day {
	id: UniqueId;
	title: string;
	desctiption?: string;
	isRest?: boolean;
	exerciseItems: ExerciseItem[];
}
