export interface ExerciseItem {
	id: UniqueId;
	sets: Set[];
	rest: number;
	exercise: UniqueId;
}

export type ExerciseItemDto = Omit<ExerciseItem, 'id'>;

export type Set = string;
export type UniqueId = string;
