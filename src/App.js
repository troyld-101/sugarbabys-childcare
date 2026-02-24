//import logo from './logo.svg';
//import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Admissions from "./components/Admissions";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Staff from "./components/Staff";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Hero />
			<About />
			<Staff />
			<Service />
			<Admissions />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
