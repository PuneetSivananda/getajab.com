import { FunctionalComponent, h } from 'preact';
import style from './style.css';
import Card from '../../components/card/index';
// ["🚀", "😺", "🐶", "🏈", "📦", "🙊"]
const Home: FunctionalComponent = () => {
	return (
		<div class={style.home}>
			<h1>Home</h1>
			<p>This is the Home component.</p>
			<div class={style.grid}>
				<div class={style.game}>
					<Card hiddenValue={'😺'} flipStatus={'DEFAULT'} onClick={() => alert('Check')} />
				</div>
			</div>
		</div>
	);
};

export default Home;
