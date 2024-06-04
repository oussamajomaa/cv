// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Page404 from './pages/Page404';
import { SnackbarProvider } from 'notistack';

function App() {
	
	return (
		// <Home />
		<SnackbarProvider>

		<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/admin" element={<Admin />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
			</BrowserRouter>
		</SnackbarProvider>
	)
}

export default App;
