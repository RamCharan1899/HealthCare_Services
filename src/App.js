import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/Doctors_Dashboard';
import Blogs from './pages/Pharmacy';
import SignUp from './pages/Lab_Tests';
import Contact from './pages/VC_Doctors';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/Doctors_Dashboard' element={<About />} />
				<Route path='/VC_Doctors' element={<Contact />} />
				<Route path='/Pharmacy' element={<Blogs />} />
				<Route path='/Lab_Tests' element={<SignUp />} />
			</Routes>
		</Router>
	);
}

export default App;
