import { ExerciseItem } from './../../types/ExerciseItem';
import { Exercise } from './../../types/Exercice';
import { DayState } from './day.types';
import TabIcon from '@material-ui/icons/Tab';
import uuid from 'uuid';

const exercise1: Exercise = {
	id: uuid(),
	title: 'Dips',
	description: 'Preform with your back fliping straight',
	icon: TabIcon,
};

const exercise2: Exercise = { id: uuid(), title: 'Planche', description: 'Be a vertiacal machine', icon: TabIcon };

const exercise3: Exercise = { id: uuid(), title: 'Launges', description: 'Build insane legs', icon: TabIcon };

const getExerciceItems = (): ExerciseItem[] => [
	{
		id: uuid(),
		index: 1,
		sets: ['12', '10', '10-8'],
		rest: 60,
		exercise: exercise1,
	},
	{
		id: uuid(),
		index: 1,
		sets: ['12', '10', '10-8'],
		rest: 60,
		exercise: exercise2,
	},
	{
		id: uuid(),
		index: 1,
		sets: ['12', '10', '10-8'],
		rest: 60,
		exercise: exercise3,
	},
	{
		id: uuid(),
		index: 4,
		sets: ['12', '10', '10-8'],
		rest: 60,
		exercise: exercise1,
	},
	{
		id: uuid(),
		index: 5,
		sets: ['12', '10', '10-8'],
		rest: 60,
		exercise: exercise2,
	},
	{
		id: uuid(),
		index: 6,
		sets: ['12', '10', '10-8'],
		rest: 60,
		exercise: exercise3,
	},
];

export const dayStateSeedData: DayState = [
	{
		index: 1,
		title: 'Push day',
		desctiption: 'This is an amazing day to train',
		exercises: getExerciceItems(),
	},
	{
		index: 2,
		title: 'Acrobatics',
		desctiption: 'Move it move it',
		exercises: getExerciceItems(),
	},
	{
		index: 3,
		title: 'Legs all the way',
		desctiption: 'This is an amazing day to train',
		exercises: getExerciceItems(),
	},
	{
		index: 4,
		title: 'Push day unlimited',
		desctiption: 'This is an amazing day to train',
		exercises: getExerciceItems(),
	},
];
