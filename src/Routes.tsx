import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import FitnessProgramPage from './pages/fitness-program.page';
import ExercisePage from './pages/exercise.page';

const Routes = () => {
	return (
		<Fragment>
			<Route exact path="/training-program" component={FitnessProgramPage} />
			<Route exact path="/exercises" component={ExercisePage} />
		</Fragment>
	);
};

export default Routes;
