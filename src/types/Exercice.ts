import { UniqueId } from './ExerciseItem';
export interface Exercise {
	id: UniqueId;
	title: string;
	description?: string;
	icon?: any;
	image?: string;
}

export type AddExerciseDto = Omit<Exercise, 'id'>;
