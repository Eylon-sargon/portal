import { ExerciseState } from './exercise.types';
import { Exercise } from '../../types/Exercice';
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

export const exerciseSeedData: ExerciseState = [exercise1, exercise2, exercise3];
