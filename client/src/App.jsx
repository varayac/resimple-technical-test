import './App.css';
import Company from './components/Company';
import { ApiDataProvider } from './context/apiDataContext';

function App() {
	return (
		<ApiDataProvider>
			<>
				<Company />
			</>
		</ApiDataProvider>
	);
}

export default App;
