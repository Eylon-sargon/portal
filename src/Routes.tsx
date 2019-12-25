import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import FitnessProgramPage from './pages/fitness-program.page';
import ExercisePage from './pages/exercise.page';
import TestPage from './pages/test.page';

const Routes = () => {
	return (
		<Fragment>
			<Route exact path="/training-program" component={FitnessProgramPage} />
			<Route exact path="/exercises" component={ExercisePage} />
			<Route exact path="/test" component={TestPage} />
		</Fragment>
	);
};

export default Routes;
