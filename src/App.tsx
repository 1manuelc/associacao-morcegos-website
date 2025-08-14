import { Header } from './components/layout/Header';
import { Hero } from './components/layout/Hero';
import { About } from './components/layout/About';
import { Activities } from './components/layout/Activities';
import { Impact } from './components/layout/Impact';
import { Contact } from './components/layout/Contact';
import { Footer } from './components/layout/Footer';

function App() {
	return (
		<div className='min-h-screen bg-white dark:bg-zinc-900 transition-colors duration-300'>
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
