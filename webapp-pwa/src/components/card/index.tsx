import { h } from 'preact';
import style from './style.css';
interface Props {
	image: string;
	title: string;
	body: string;
	cardColor: string;
}
const ColoredLine = ({ color }: { color: string }) => (
	<hr
		style={{
			color: color,
			backgroundColor: color,
			height: 5,
			width: '100%',
			margin: 0
		}}
	/>
);

const Card = ({ cardColor, image, title, body }: Props) => {
	return (
		<article class={style.card}>
			<a href='#'>
				<ColoredLine color={cardColor} />
				<figure class='thumbnail'>
					<img src={image} alt='meow' />
				</figure>
				<div class={style.cardContent}>
					<h2>{title}</h2>
					<p>{body}</p>
				</div>
			</a>
		</article>
	);
};

export default Card;
