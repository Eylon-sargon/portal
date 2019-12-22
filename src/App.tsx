import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store';
import Routes from './Routes';
import MainLayout from './components/layout/MainLayout';
const store = configureStore();

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<MainLayout>
					<Routes />
				</MainLayout>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
