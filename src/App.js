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
				<Route exact path='/HealthCare_Services/' element={<Home />} />
				<Route path='/HealthCare_Services/Doctors_Dashboard' element={<About />} />
				<Route path='/HealthCare_Services/VC_Doctors' element={<Contact />} />
				<Route path='/Pharmacy' element={<Blogs />} />
				<Route path='/Lab_Tests' element={<SignUp />} />
			</Routes>
		</Router>
	);
}

export default App;
