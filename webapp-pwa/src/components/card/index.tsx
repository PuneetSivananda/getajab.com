import { FunctionalComponent, h } from 'preact';
import style from './style.css';

const Card: FunctionalComponent = () => {
	return (
		<div class={style.cardgridspace}>
			<div class={style.num}>01</div>
			<a class={style.card} style={style.backgroundImg}>
				<div>
					<h1>HTML Syntax</h1>
					<p>Learn HTML syntax…</p>
					<div class={style.date}>6 Oct 2017</div>
					<div class={style.tags}>
						<div class={style.tag}>HTML</div>
					</div>
				</div>
			</a>
		</div>
	);
};

export default Card;
