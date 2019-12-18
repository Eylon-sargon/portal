import React from 'react';
import Header from './components/layout/Header';
import DaysPage from './pages/all-days.page';
const App: React.FC = () => {
	return (
		<div className="App">
			<Header />
			<DaysPage />
		</div>
	);
};

export default App;
