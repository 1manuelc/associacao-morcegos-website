import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Activities } from './components/Activities';
import { Impact } from './components/Impact';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
	return (
		<div className='min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300'>
			<Header />
			<Hero />
			<About />
			<Activities />
			<Impact />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
