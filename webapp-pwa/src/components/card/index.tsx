import { h } from 'preact';
import style from './style.css';
interface Props {
	cardColor: string;
	Name: string;
	Pin: number;
	AvailableCapacity: number;
	date: string;
	lat: number;
	long: number;
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

const Card = ({ cardColor, Pin, AvailableCapacity, date, lat, long, Name }: Props) => {
	return (
		<article class={style.card}>
			<a href='#'>
				<ColoredLine color={cardColor} />
				<div class={style.cardContent}>
					<h2>{Name}</h2>
					<h3>Date: {date}</h3>
					<p>Pin:{Pin}</p>
					<p>Avaliable Slots: {AvailableCapacity}</p>
					<p>Lat: {lat}</p>
					<p>Long: {long}</p>
				</div>
			</a>
		</article>
	);
};

export default Card;
